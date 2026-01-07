# Supabase Lead Capture Setup

## 1) Install dependencies

Run:

```bash
npm install
```

This project uses:

- `@supabase/supabase-js` for database writes
- `zod` for validation (client + server)

## 2) Create the `leads` table

In Supabase SQL Editor, create a table named `leads`:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  age int not null,
  state text not null,
  source text not null default 'website'
);
```

Optional (recommended) uniqueness:

```sql
create unique index if not exists leads_email_unique on public.leads (email);
```

## 3) Configure environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY"

# Optional (email automation)
RESEND_API_KEY="YOUR_RESEND_API_KEY"
RESEND_FROM="Aharai <no-reply@YOURDOMAIN.com>"
```

Notes:

- `SUPABASE_SERVICE_ROLE_KEY` must stay **server-only** (never expose it in the client).
- Email sending is implemented in `lib/email/sendLeadWelcomeEmail.ts` (Resend). If not configured, it safely becomes a no-op.

## 4) Flow (Server Action)

- Client form: `components/landing/CTASection.tsx`
- Server Action: `app/actions/submitLead.ts`
  - validates input with Zod (server-side)
  - inserts into Supabase `leads` using the **Service Role** key (server-only)
  - attempts to send a welcome email

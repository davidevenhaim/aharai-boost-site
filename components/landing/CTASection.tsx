"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/useI18n";

export default function CTASection() {
  const { m } = useI18n();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(m.cta.successAlert);
  };

  return (
    <section id="apply" className="w-full py-24 scroll-mt-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#3f0a0f] via-[#1a0204] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {m.cta.heading}
        </h2>
        <p className="text-xl md:text-2xl text-[#fcd839] font-medium mb-12">
          {m.cta.subheading}
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder={m.cta.form.placeholders.fullName} onChange={handleChange} className="w-full p-4 text-base rounded-lg bg-white/5 border border-white/20 text-white focus:border-[#fcd839] outline-none" required />
            <input type="email" name="email" placeholder={m.cta.form.placeholders.email} onChange={handleChange} className="w-full p-4 text-base rounded-lg bg-white/5 border border-white/20 text-white focus:border-[#fcd839] outline-none" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="tel" name="phone" placeholder={m.cta.form.placeholders.phone} onChange={handleChange} className="w-full p-4 text-base rounded-lg bg-white/5 border border-white/20 text-white focus:border-[#fcd839] outline-none" required />
            <input type="number" name="age" placeholder={m.cta.form.placeholders.age} onChange={handleChange} className="w-full p-4 text-base rounded-lg bg-white/5 border border-white/20 text-white focus:border-[#fcd839] outline-none" required />
            <input type="text" name="state" placeholder={m.cta.form.placeholders.state} onChange={handleChange} className="w-full p-4 text-base rounded-lg bg-white/5 border border-white/20 text-white focus:border-[#fcd839] outline-none" required />
          </div>
          <button type="submit" className="w-full mt-8 py-4 px-8 rounded-lg bg-[#fcd839] hover:bg-white text-black font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
            {m.cta.form.submit} <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const PLATFORMS = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Snapchat Ads",
  "LinkedIn Ads",
  "X Ads (Twitter)",
];

const PURPOSES = [
  { value: "leadgen", label: "Lead Generation" },
  { value: "ecom", label: "E‑Commerce Sales" },
  { value: "brand", label: "Brand Awareness" },
  { value: "app", label: "App Installs" },
  { value: "other", label: "Other" },
];

const BUDGETS = [
  { value: "<5k", label: "< $5k / mo" },
  { value: "5-20k", label: "$5k–$20k / mo" },
  { value: "20-50k", label: "$20k–$50k / mo" },
  { value: ">50k", label: "> $50k / mo" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    purpose: "",
    budget: "",
    message: "",
  });
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (p: string, checked: boolean) => {
    setSelectedPlatforms((prev) =>
      checked ? Array.from(new Set([...prev, p])) : prev.filter((x) => x !== p)
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form, platforms: selectedPlatforms };
    console.log("Contact submission", payload);
    alert("Thank you! We received your details. We'll get back to you shortly.");
    setForm({ name: "", email: "", company: "", phone: "", purpose: "", budget: "", message: "" });
    setSelectedPlatforms([]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your details, pick the ad platforms, and tell us your goals and monthly budget.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select onValueChange={(v) => setForm({ ...form, purpose: v })} value={form.purpose}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {PURPOSES.map((p) => (
                      <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={(v) => setForm({ ...form, budget: v })} value={form.budget}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Monthly budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGETS.map((b) => (
                      <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Project details / objectives" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

              <div>
                <Button type="submit" className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white">
                  Send Request
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1 p-5 border border-border/60 rounded-xl bg-card/40 space-y-4">
              <h3 className="font-bold text-lg">Platforms</h3>
              <div className="grid grid-cols-1 gap-3">
                {PLATFORMS.map((p) => {
                  const checked = selectedPlatforms.includes(p);
                  return (
                    <label key={p} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-gold/50 cursor-pointer">
                      <Checkbox checked={checked} onCheckedChange={(v) => togglePlatform(p, Boolean(v))} />
                      <span className="text-sm font-medium">{p}</span>
                    </label>
                  );
                })}
              </div>
              <div className="text-xs text-muted-foreground">
                Select all ad platforms you are interested in. You can change this later.
              </div>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

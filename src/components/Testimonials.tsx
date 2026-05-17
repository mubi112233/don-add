"use client";

import { Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchTestimonials } from "@/lib/api";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";
import { usePathname } from "next/navigation";

interface Testimonial {
  _id?: string;
  content: string;
  name: string;
  role: string;
  company: string;
  order?: number;
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ge') || pathname.startsWith('/de') ? 'ge' : 'en';

  const copy = getCopy(currentLang, 'testimonials');

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTestimonials(currentLang);
        if (!data) throw new Error('Failed to fetch testimonials');
        const fetchedTestimonials = Array.isArray(data.testimonials)
          ? [...data.testimonials].sort((a: any, b: any) => (a?.order ?? 0) - (b?.order ?? 0))
          : [];
        setTestimonials(fetchedTestimonials);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') console.error('Error fetching testimonials:', err);
        setError(err instanceof Error ? err.message : 'Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonialsData();
  }, [currentLang]);

  const sectionClass = `relative ${SPACING.section} bg-muted/30 text-foreground z-40`;

  if (loading) {
    return (
<<<<<<< HEAD
      <motion.section id="testimonials" className={sectionClass}>
        <div className={`container mx-auto ${SPACING.container}`}>
=======
      <motion.section 
        id="testimonials"
        className={`relative ${SPACING.section} bg-[hsl(220_85%_20%)] text-white z-40`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
          </div>
        </div>
      </motion.section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
<<<<<<< HEAD
      <motion.section id="testimonials" className={sectionClass}>
        <div className={`container mx-auto ${SPACING.container}`}>
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              {error || (currentLang === 'ge'
=======
      <motion.section 
        id="testimonials"
        className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-[hsl(220_85%_20%)] text-white z-40"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="text-center py-20">
            <p className="text-white/60 mb-4">
              {error || (currentLang === 'ge' 
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
                ? 'Keine Testimonials verfügbar. Bitte fügen Sie Testimonials im Admin-Panel hinzu.'
                : 'No testimonials available. Please add testimonials in the admin panel.')}
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="testimonials"
<<<<<<< HEAD
      className={sectionClass}
=======
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 text-foreground z-40"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
<<<<<<< HEAD
      <div className={`container mx-auto ${SPACING.container}`}>
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
=======
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-left"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
<<<<<<< HEAD
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50" />
            <span className="relative z-10">{currentLang === "ge" ? "Kundenstimmen" : "Testimonials"}</span>
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: copy.heading }}
          />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
            {copy.subheading}
=======
          <motion.span
            className="inline-block px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-bold rounded-full mb-2 sm:mb-3 md:mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-900 dark:text-white leading-tight">
            {copy.heading?.replace(/<[^>]*>/g, '') || "Trusted by Growing Businesses"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {copy.subheading || "See how companies like yours have scaled their operations with our dedicated virtual assistants."}
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id || index}
<<<<<<< HEAD
              className="bg-card border-2 border-gold/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gold hover:shadow-[0_25px_80px_-20px_hsl(45_80%_55%/0.4)] transition-all duration-700 group"
=======
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
<<<<<<< HEAD
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gold">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
=======
              
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="border-t border-white/10 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-white">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-blue-400">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-white/60">{testimonial.company}</p>
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
              </div>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        <motion.div
          className="bg-card border-2 border-gold/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-gold hover:shadow-[0_25px_80px_-20px_hsl(45_80%_55%/0.4)] transition-all duration-700"
=======
        <motion.div 
          className="bg-white/5 border border-blue-400/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-blue-400/50 transition-all duration-300"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-left">
<<<<<<< HEAD
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50" />
              <span className="relative z-10">{copy.caseStudy?.badge}</span>
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white leading-tight"
=======
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              {copy.caseStudy?.badge}
            </span>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
              dangerouslySetInnerHTML={{ __html: copy.caseStudy?.title }}
            />
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              {copy.caseStudy?.description}
            </p>
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-white text-[hsl(220_85%_20%)] hover:bg-white/90">
              {copy.caseStudy?.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

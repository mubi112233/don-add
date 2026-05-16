import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type TestimonialItem = { name: string; company: string; role: string; content: string; rating: number };
type FeaturedCaseStudy = {
  caseStudyId: number;
  title: string;
  challenge: string;
  stats?: { mainResult?: string };
};

export const Testimonials = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [featuredCaseStudy, setFeaturedCaseStudy] = useState<FeaturedCaseStudy | null>(null);

  useEffect(() => {
    let cancelled = false;

    const apiBase = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');
    const database = import.meta.env.VITE_DATABASE || 'callcenter';

    const fetchTestimonials = async () => {
      try {
        const url = `${apiBase}/api/testimonials?lang=${i18n.language}`;
        const response = await fetch(url, {
          headers: {
            'X-Tenant-ID': database
          }
        });

        if (!response.ok) {
          console.error('Failed to fetch testimonials data - Status:', response.status);
          if (!cancelled) setTestimonials([]);
          return;
        }

        const data = await response.json();
        if (!cancelled) setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Failed to fetch testimonials data:', error);
        if (!cancelled) setTestimonials([]);
      }
    };

    const fetchFeaturedCaseStudy = async () => {
      try {
        const url = `${apiBase}/api/case-studies?lang=${i18n.language}`;
        const response = await fetch(url, {
          headers: {
            'X-Tenant-ID': database
          }
        });

        if (!response.ok) {
          if (!cancelled) setFeaturedCaseStudy(null);
          return;
        }

        const data = await response.json();
        const first = (data.caseStudies || [])[0];
        if (!cancelled) setFeaturedCaseStudy(first || null);
      } catch (_error) {
        if (!cancelled) setFeaturedCaseStudy(null);
      }
    };

    fetchTestimonials();
    fetchFeaturedCaseStudy();

    return () => {
      cancelled = true;
    };
  }, [i18n.language]);

  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight px-2">
            {t("testimonials.headingPrefix")} <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] bg-clip-text text-transparent bg-[length:200%_100%]">{t("testimonials.headingEmphasis")}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/40 to-transparent"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative bg-card/50 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-xl p-5 sm:p-6 md:p-8 hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.3),0_0_30px_hsl(217_91%_60%/0.1)] dark:hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25),0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.12, 
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }
              }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)]" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-card-foreground dark:text-white mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-[hsl(220,40%,92%)] dark:border-border/50 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-[hsl(222,47%,20%)] dark:text-white">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-[hsl(217,91%,65%)] dark:text-[hsl(217,91%,75%)]">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-[hsl(220,90%,60%)] dark:text-white">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {featuredCaseStudy?.caseStudyId ? (
          <motion.div 
            className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-[hsl(var(--gold))]/70 dark:hover:border-[hsl(var(--gold))]/70 hover:shadow-[0_25px_70px_-15px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="text-left">
              <span className="inline-block px-3 py-1 bg-card dark:bg-[hsl(250,45%,20%)]/50 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                {t("testimonials.successStory")}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[hsl(250,50%,20%)] dark:text-white">
                {t("testimonials.caseStudyPrefix")} <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">{featuredCaseStudy.stats?.mainResult || featuredCaseStudy.title}</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[hsl(220,30%,50%)] dark:text-white mb-5 sm:mb-6 leading-relaxed max-w-3xl">
                {featuredCaseStudy.challenge}
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white hover:opacity-95 transition-all duration-300 hover:scale-105 font-semibold border-0"
                onClick={() => navigate(`/case-study/${featuredCaseStudy.caseStudyId}`)}
              >
                {t("testimonials.viewFull")}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
};
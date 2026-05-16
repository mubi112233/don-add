import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FAQSchema from "./FAQSchema";

type FAQItem = {
  _id?: string;
  order?: number;
  question: string;
  answer: string;
};

export const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    let cancelled = false;

    const fetchFaqs = async () => {
      try {
        const apiBase = (import.meta.env.VITE_API_BASE || "").replace(/\/$/, "");
        const database = import.meta.env.VITE_DATABASE || "callcenter";
        const url = `${apiBase}/api/faq?lang=${i18n.language}`;

        const response = await fetch(url, {
          headers: {
            "X-Tenant-ID": database,
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch FAQ data - Status:", response.status);
          if (!cancelled) setFaqs([]);
          return;
        }

        const data = await response.json();
        if (!cancelled) setFaqs(Array.isArray(data.faqs) ? data.faqs : []);
      } catch (error) {
        console.error("Failed to fetch FAQ data:", error);
        if (!cancelled) setFaqs([]);
      }
    };

    fetchFaqs();

    return () => {
      cancelled = true;
    };
  }, [i18n.language]);

  return (
    <>
      {/* FAQ Schema for SEO */}
      {faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))}
          name="Don-Ad Digital Advertising FAQ"
          description="Frequently asked questions about Don-Ad's omnichannel advertising services"
        />
      )}
      
      <motion.section
        id="faq"
        className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-80 overflow-hidden"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-10 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge - Centered */}
              <motion.div
                className="flex justify-center mb-5 sm:mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              >
                <div className="px-4 py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] backdrop-blur-sm rounded-full text-sm font-semibold text-white flex items-center gap-2 border border-[hsl(var(--gold))]/20">
                  <HelpCircle className="w-4 h-4" />
                  <span>{t("faq.badge")}</span>
                </div>
              </motion.div>

              {/* Heading - Centered */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-[hsl(222,47%,20%)] dark:text-white px-2" style={{ textAlign: 'center' }}>
                {t("faq.heading")} <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent"></span>
              </h2>
              {/* Description - Centered */}
              <p className="text-base sm:text-lg md:text-xl text-[hsl(220,60%,45%)] dark:text-card-foreground/80 max-w-2xl leading-relaxed px-2 text-center mx-auto">
                {t("faq.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq._id || index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem
                      value={faq._id || `item-${index}`}
                      className="group bg-card/60 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_10px_30px_-5px_hsl(217_91%_60%/0.2)] dark:hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300 data-[state=open]:border-[hsl(var(--gold))]/70 dark:data-[state=open]:border-[hsl(var(--gold))]/70 data-[state=open]:shadow-[0_15px_40px_-5px_hsl(217_91%_60%/0.25),0_0_20px_hsl(217_91%_60%/0.1)] dark:data-[state=open]:shadow-[0_15px_40px_-5px_rgba(59,130,246,0.2),0_0_20px_rgba(59,130,246,0.08)]"
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] py-5 sm:py-6 hover:no-underline group-hover:text-[hsl(var(--gold))] dark:group-hover:text-[hsl(var(--gold))] transition-colors">
                        <span className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[hsl(var(--gold))] dark:bg-[hsl(var(--gold))] flex items-center justify-center text-white text-sm font-bold mt-0.5">
                            {index + 1}
                          </span>
                          <span className="flex-1">{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base text-card-foreground dark:text-card-foreground/85 leading-relaxed pt-2 pb-5 sm:pb-6 pl-9 sm:pl-10">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            {/* Enhanced trust indicators */}
            <motion.div
              className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="p-5 sm:p-6 bg-card border-2 border-[hsl(215,32%,91%)] dark:border-border/50 rounded-xl sm:rounded-2xl group hover:border-[hsl(var(--gold))] dark:hover:border-[hsl(var(--gold))] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-[hsl(220,100%,98%)] dark:bg-card rounded-xl group-hover:bg-[hsl(220,95%,97%)] dark:group-hover:bg-card/70 transition-colors">
                    <Shield className="w-6 h-6 text-[hsl(217,91%,65%)] dark:text-[hsl(217,91%,75%)]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[hsl(222,47%,20%)] dark:text-white mb-1.5">
                      {t("faq.trustIndicator1.title")}
                    </h3>
                    <p className="text-sm text-[hsl(220,60%,45%)] dark:text-card-foreground/80 leading-relaxed">
                      {t("faq.trustIndicator1.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-card border-2 border-[hsl(215,32%,91%)] dark:border-border/50 rounded-xl sm:rounded-2xl group hover:border-[hsl(var(--gold))] dark:hover:border-[hsl(var(--gold))] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-[hsl(220,100%,98%)] dark:bg-card rounded-xl group-hover:bg-[hsl(220,95%,97%)] dark:group-hover:bg-card/70 transition-colors">
                    <Zap className="w-6 h-6 text-[hsl(217,91%,65%)] dark:text-[hsl(217,91%,75%)]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[hsl(222,47%,20%)] dark:text-white mb-1.5">
                      {t("faq.trustIndicator2.title")}
                    </h3>
                    <p className="text-sm text-[hsl(220,60%,45%)] dark:text-card-foreground/80 leading-relaxed">
                      {t("faq.trustIndicator2.description")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Still have questions CTA */}
            <motion.div 
              className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-card border-2 border-[hsl(215,32%,91%)] dark:border-border/50 rounded-xl sm:rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <p className="text-base sm:text-lg md:text-xl font-semibold text-[hsl(222,47%,20%)] dark:text-white mb-2">
                {t("faq.ctaTitle")}
              </p>
              <p className="text-sm sm:text-base text-[hsl(220,60%,45%)] dark:text-card-foreground/80 mb-4 sm:mb-5">
                {t("faq.ctaSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[hsl(217,91%,65%)] to-[hsl(220,90%,60%)] text-white font-semibold rounded-xl hover:from-[hsl(217,91%,70%)] hover:to-[hsl(220,95%,65%)] transition-all duration-300 hover:scale-105 border-0"
                >
                  {t("faq.contactSupport")}
                </a>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[hsl(217,91%,65%)] text-[hsl(217,91%,65%)] dark:text-[hsl(217,91%,75%)] font-semibold rounded-xl hover:bg-[hsl(217,91%,65%)]/10 transition-all duration-300"
                >
                  {t("faq.viewPricing")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

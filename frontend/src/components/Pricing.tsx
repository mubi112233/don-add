import { Button } from "@/components/ui/button";
import { Check, Star, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface PricingPlan {
  name: string;
  hours: string;
  price: number;
  setupFee: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
  order: number;
}

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const apiBase = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');
        const database = import.meta.env.VITE_DATABASE || 'callcenter';
        const url = `${apiBase}/api/pricing?lang=${i18n.language}`;
        
        const response = await fetch(url, {
          headers: { 'X-Tenant-ID': database }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.plans && data.plans.length > 0) {
            setPlans(data.plans);
          }
        }
      } catch (error) {
        console.error('Failed to fetch pricing:', error);
      }
    };
    fetchPricing();
  }, [i18n.language]);

  return (
    <motion.section 
      id="pricing"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-background text-foreground z-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Animated background gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></span>
            <span className="relative z-10">{t("pricing.badge")}</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight">
            {t("pricing.headingPrefix")} <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] bg-clip-text text-transparent bg-[length:200%_100%]">{t("pricing.headingEmphasis")}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/40 to-transparent"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("pricing.intro")}
          </p>
        </motion.div>

        {/* Free Trial Banner */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(200,95%,55%)] to-[hsl(187,92%,47%)] p-[2px] shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]">
            <div className="relative bg-gradient-to-br from-card/95 to-card/90 dark:from-background/95 dark:to-background/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,91%,60%)]/10 via-[hsl(200,95%,55%)]/10 to-[hsl(187,92%,47%)]/10 rounded-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-start gap-4 text-center sm:text-left">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(187,92%,47%)] rounded-xl flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(222,47%,20%)] dark:text-white mb-2">
                      {t("pricing.trialTitle")}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t("pricing.freeBanner")}
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="flex-shrink-0 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(187,92%,47%)] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 font-semibold shadow-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-0"
                  onClick={() => window.location.href = '/book-meeting'}
                >
                  {t("pricing.startTrial")}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -8, 
                scale: 1.015,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 30,
                  mass: 0.5
                }
              }}
            >
              {/* Animated gradient border for highlighted plan */}
              {plan.highlighted && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-brand via-brand to-brand rounded-2xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}
              
              <div className={`relative rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 group h-full bg-card/80 backdrop-blur-xl text-[hsl(222,47%,20%)] dark:text-white border-2 border-[hsl(215,32%,91%)] dark:border-border/30 hover:border-[hsl(var(--gold))] dark:hover:border-[hsl(var(--gold))] hover:shadow-[0_25px_70px_-15px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] hover:scale-[1.02]`}>
                {/* Top accent line with animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    plan.highlighted ? 'bg-white/20' : 'bg-gradient-to-r from-transparent via-brand to-transparent'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              
                {plan.badge && (
                  <motion.div 
                    className="absolute -top-4 right-6 px-4 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 bg-[hsl(250,100%,98%)] dark:bg-[hsl(var(--gold))] text-[hsl(222,47%,20%)] dark:text-white"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </motion.div>
                    {plan.badge}
                  </motion.div>
                )}
              
                {/* Header */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 text-[hsl(222,47%,20%)] dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))]">
                      {plan.hours}
                    </p>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-card dark:bg-[hsl(250,45%,20%)]/50 text-[hsl(222,47%,20%)] dark:text-white">
                      {t("pricing.tagLabel")}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-current/10 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <motion.span 
                      className="text-5xl sm:text-6xl font-bold tracking-tight text-[hsl(222,47%,20%)] dark:text-white"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                    >
                      ${plan.price}
                    </motion.span>
                    <span className="text-base ml-1 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))]">
                      {t("pricing.perMonth")}
                    </span>
                  </div>
                  {plan.setupFee > 0 ? (
                    <p className="text-xs mt-2 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))]">
                      {t("pricing.setupFeeWithAmount", { amount: `$${plan.setupFee}` })}
                    </p>
                  ) : (
                    <p className="text-xs mt-2 font-semibold flex items-center gap-1 text-[hsl(222,47%,20%)] dark:text-white">
                      <Check className="w-3.5 h-3.5 text-[hsl(222,47%,20%)] dark:text-white" />
                      {t("pricing.noSetupFee")}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 relative z-10">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + fIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-[hsl(var(--gold))]/10 to-[hsl(var(--brand-blue))]/10 dark:from-[hsl(var(--gold))]/20 dark:to-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--gold))]/20 dark:border-[hsl(var(--gold))]/30 group-hover:border-[hsl(var(--gold))]/40 dark:group-hover:border-[hsl(var(--gold))]/50 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                        <Check className="w-3 h-3 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))]" />
                      </div>
                      <span className="text-sm leading-relaxed text-card-foreground dark:text-white">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/book-meeting'}
                  className="w-full relative z-10 font-bold text-base py-6 sm:py-7 rounded-xl transition-all duration-300 group/btn overflow-hidden min-h-[44px] bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white hover:opacity-95 hover:scale-105 border-0"
                  aria-label={`Get started with ${plan.name} plan`}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" aria-hidden="true" />
                  <span className="relative">{t("pricing.startAudit")}</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-muted-foreground mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("pricing.disclaimer")}
        </motion.p>
      </div>
    </motion.section>
  );
};
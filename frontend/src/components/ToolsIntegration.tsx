import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ToolsIntegration = () => {
  const { t } = useTranslation();
  type Item = { name: string; category: string };
  const tools = (t("integrations.items", { returnObjects: true }) as Item[]) || [];
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></span>
            <span className="relative z-10">{t("integrations.badge")}</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight">
            {t("integrations.headingPrefix")} <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] bg-clip-text text-transparent bg-[length:200%_100%]">{t("integrations.headingEmphasis")}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/40 to-transparent"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            {t("integrations.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="relative bg-card/80 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-xl p-3 sm:p-4 text-center hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_12px_35px_-10px_hsl(217_91%_60%/0.3),0_0_20px_hsl(217_91%_60%/0.1)] dark:hover:shadow-[0_12px_35px_-10px_rgba(59,130,246,0.25),0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-[hsl(var(--brand-blue))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-sm sm:text-base font-bold text-[hsl(222,47%,20%)] dark:text-white transition-colors relative z-10">
                  {tool.name}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-[hsl(var(--gold))]/10 to-[hsl(var(--brand-blue))]/10 dark:from-[hsl(var(--gold))]/20 dark:to-[hsl(var(--brand-blue))]/20 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] rounded-full border border-[hsl(var(--gold))]/20 dark:border-[hsl(var(--gold))]/30 relative z-10">
                  {tool.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl p-6 sm:p-8 md:p-10 text-center overflow-hidden group hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_20px_50px_-15px_hsl(217_91%_60%/0.3),0_0_30px_hsl(217_91%_60%/0.1)] dark:hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.25),0_0_30px_rgba(59,130,246,0.08)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-[hsl(var(--brand-blue))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/50 to-transparent"></div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[hsl(222,47%,20%)] dark:text-white mb-3 sm:mb-4 relative z-10">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">{t("integrations.ctaTitlePrefix")}</span> {t("integrations.ctaTitleEmphasis")} 
            </p>
            <p className="text-sm sm:text-base text-muted-foreground dark:text-white/80 leading-relaxed relative z-10">
              {t("integrations.ctaDesc")}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
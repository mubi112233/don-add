import { motion, useReducedMotion } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp, Calendar, Target, Zap, Award, LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Icon mapping for different icon names
const iconMap: Record<string, LucideIcon> = {
  Search,
  Settings,
  Rocket,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Award
};

interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  stepLabel: string;
}

export const HowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [steps, setSteps] = useState<HowItWorksStep[]>([]);
  const [sectionData, setSectionData] = useState({
    badge: "",
    headingPrefix: "",
    headingEmphasis: "",
    subtitle: "",
    cta: ""
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchHowItWorksData = async () => {
      try {
        const apiBase = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');
        const database = import.meta.env.VITE_DATABASE || 'callcenter';
        const url = `${apiBase}/api/how-it-works?lang=${i18n.language}`;
        
        const response = await fetch(url, {
          headers: {
            'X-Tenant-ID': database
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setSteps(data.steps);
          setSectionData(data.sectionData || {
            badge: "Our Process",
            headingPrefix: "How We",
            headingEmphasis: "Drive Results",
            subtitle: "Our proven 4-step process ensures maximum ROI for your advertising campaigns",
            cta: "Start Your Campaign"
          });
        } else {
          // Fallback data
          setSteps([
            {
              stepNumber: 1,
              title: "Strategy & Analysis",
              description: "We analyze your business, target audience, and competitors to create a winning strategy.",
              icon: "Search",
              stepLabel: "Step 1"
            },
            {
              stepNumber: 2,
              title: "Campaign Setup",
              description: "We create and optimize your ad campaigns across multiple platforms for maximum reach.",
              icon: "Settings",
              stepLabel: "Step 2"
            },
            {
              stepNumber: 3,
              title: "Launch & Monitor",
              description: "We launch your campaigns and continuously monitor performance for optimal results.",
              icon: "Rocket",
              stepLabel: "Step 3"
            },
            {
              stepNumber: 4,
              title: "Optimize & Scale",
              description: "We analyze data and optimize campaigns to increase conversions and scale your success.",
              icon: "TrendingUp",
              stepLabel: "Step 4"
            }
          ]);
          setSectionData({
            badge: "Our Process",
            headingPrefix: "How We",
            headingEmphasis: "Drive Results",
            subtitle: "Our proven 4-step process ensures maximum ROI for your advertising campaigns",
            cta: "Start Your Campaign"
          });
        }
      } catch (error) {
        console.error('Failed to fetch how it works data:', error);
        // Fallback data on error
        setSteps([
          {
            stepNumber: 1,
            title: "Strategy & Analysis",
            description: "We analyze your business, target audience, and competitors to create a winning strategy.",
            icon: "Search",
            stepLabel: "Step 1"
          },
          {
            stepNumber: 2,
            title: "Campaign Setup",
            description: "We create and optimize your ad campaigns across multiple platforms for maximum reach.",
            icon: "Settings",
            stepLabel: "Step 2"
          },
          {
            stepNumber: 3,
            title: "Launch & Monitor",
            description: "We launch your campaigns and continuously monitor performance for optimal results.",
            icon: "Rocket",
            stepLabel: "Step 3"
          },
          {
            stepNumber: 4,
            title: "Optimize & Scale",
            description: "We analyze data and optimize campaigns to increase conversions and scale your success.",
            icon: "TrendingUp",
            stepLabel: "Step 4"
          }
        ]);
        setSectionData({
          badge: "Our Process",
          headingPrefix: "How We",
          headingEmphasis: "Drive Results",
          subtitle: "Our proven 4-step process ensures maximum ROI for your advertising campaigns",
          cta: "Start Your Campaign"
        });
      }
    };

    if (isMounted) {
      fetchHowItWorksData();
    }
  }, [i18n.language, isMounted]);

  if (!isMounted || steps.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <motion.section 
      id="how-it-works"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-20 min-h-[600px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: prefersReducedMotion ? 0.5 : 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-10 sm:mb-16 md:mb-20 text-left"
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
            <span className="relative z-10">{sectionData.badge}</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight">
            {sectionData.headingPrefix} <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] bg-clip-text text-transparent bg-[length:200%_100%]">{sectionData.headingEmphasis}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/40 to-transparent"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {sectionData.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -16 : 16), rotateY: 0 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] flex items-center justify-center text-white ring-1 ring-[hsl(var(--gold))]/30 shadow-[0_12px_30px_-12px_hsl(217_91%_60%/0.35)] relative group"
                  whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.06, rotate: 6 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full bg-[hsl(var(--gold))]/20 blur-md group-hover:blur-lg transition-all duration-500" />
                  {iconMap[step.icon] ? (
                    <span className="relative z-10">
                      {(() => { const Icon = iconMap[step.icon]!; return <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />; })()}
                    </span>
                  ) : null}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[hsl(250,100%,98%)] dark:bg-[hsl(250,45%,20%)] text-[hsl(var(--gold))] dark:text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-[hsl(var(--gold))] dark:border-[hsl(var(--gold))]">
                    {index + 1}
                  </div>
                </motion.div>
                
                <motion.div 
                  className={[
                    "relative flex-1 bg-card/80 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 transition-all duration-300 group overflow-hidden",
                    "text-[hsl(222,47%,20%)] dark:text-white",
                    "border-[hsl(215,32%,91%)] dark:border-border/40",
                    "hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60",
                    "hover:shadow-[0_20px_50px_-14px_hsl(217_91%_60%/0.3),0_0_30px_hsl(217_91%_60%/0.1)] dark:hover:shadow-[0_20px_50px_-14px_rgba(59,130,246,0.25),0_0_30px_rgba(59,130,246,0.08)]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]",
                    index % 2 === 1 ? 'md:text-right' : ''
                  ].join(' ')}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  tabIndex={0}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/10 dark:from-[hsl(var(--gold))]/20 via-[hsl(250,100%,98%)]/10 dark:via-[hsl(250,45%,20%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider mb-3 inline-block px-3 py-1 bg-card dark:bg-[hsl(250,45%,20%)]/50 rounded-full">
                    {step.stepLabel}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(215,20%,35%)] dark:text-white leading-relaxed text-base sm:text-base md:text-lg">
                    {step.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className={`absolute ${index % 2 === 1 ? 'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl sm:rounded-tl-2xl' : 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl sm:rounded-br-2xl'} w-12 h-12 sm:w-16 sm:h-16 border-[hsl(var(--gold))]/0 group-hover:border-[hsl(var(--gold))]/50 transition-all duration-500`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.5 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white hover:opacity-95 hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
              {sectionData.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Calendar, Sparkles, Palette, Layers, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroData {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  ctaPrimary: string;
  urgency: string;
  stats: {
    clients: string;
    costSaved: string;
    rating: string;
  };
}

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { i18n } = useTranslation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const heroData: HeroData = i18n.language === 'de' ? {
    title: "Hochkonvertierende Werbekampagnen mit messbaren Ergebnissen",
    subtitle: "Maximieren Sie Ihren ROI mit unseren datengesteuerten Werbestrategien. Wir erstellen und verwalten Facebook-, Google- und Instagram-Anzeigen, die Besucher in Kunden verwandeln und Ihr Unternehmen skalieren.",
    tagline: "✨ Performance Marketing Experten",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    ctaPrimary: "Kostenlose Anzeigen-Analyse",
    urgency: "Begrenzte Plätze für kostenlose Analyse",
    stats: {
      clients: "300+ Kampagnen",
      costSaved: "4,2x ROAS",
      rating: "95% Erfolgsquote"
    }
  } : {
    title: "High-Converting Ad Campaigns That Drive Results",
    subtitle: "Maximize your ROI with our data-driven advertising strategies. We create and manage Facebook, Google, and Instagram ads that convert visitors into customers and scale your business.",
    tagline: "✨ Performance Marketing Experts",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    ctaPrimary: "Get Free Ad Audit",
    urgency: "Free audit spots filling fast",
    stats: {
      clients: "300+ Campaigns",
      costSaved: "4.2x ROAS",
      rating: "95% Success Rate"
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden pt-16 sm:pt-20 md:pt-0"
    >
      {/* Animated background with futuristic grid */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(var(--brand-blue)/0.08)] z-0"
      />
      
      {/* Futuristic floating orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--brand-blue))]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--brand-blue))]/20 to-[hsl(var(--gold))]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
              className="inline-block mb-3 sm:mb-4 md:mb-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] border border-[hsl(var(--gold))]/30 rounded-full text-white text-xs sm:text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-default"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="text-white"
              >
                {heroData.tagline}
              </motion.span>
            </motion.div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-[1.12] md:leading-[1.1] tracking-tight text-black dark:text-white">
              {heroData.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-xl font-normal">
              {heroData.subtitle}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <Button 
                size="lg"
                onClick={() => window.location.href = '/book-meeting'}
                className="group relative w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 h-auto font-bold bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white hover:opacity-95 transform hover:scale-[1.06] hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent hover:border-[hsl(var(--gold))]/30 shadow-[0_20px_60px_-15px_hsl(188_80%_40%/0.35),0_0_40px_hsl(217_91%_60%/0.2)] hover:shadow-[0_25px_70px_-15px_hsl(188_80%_40%/0.5),0_0_60px_hsl(217_91%_60%/0.4)]"
                aria-label="Book a free 30-minute design consultation"
              >
                {/* Subtle shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{
                    x: ["-150%", "150%"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.5
                  }}
                  aria-hidden="true"
                />
                
                {/* Enhanced hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <Calendar className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                  <span className="hidden sm:inline font-semibold group-hover:tracking-wide transition-all duration-300">{heroData.ctaPrimary}</span>
                  <span className="sm:hidden font-semibold group-hover:tracking-wide transition-all duration-300">{heroData.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                </span>
              </Button>
              
              {/* Urgency indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" aria-hidden="true" />
                </motion.div>
                <span className="font-medium">{heroData.urgency}</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative lg:ml-auto mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{ perspective: 1200 }}
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20"
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative bg-gradient-to-br from-[hsl(217,91%,65%)] via-[hsl(217,91%,60%)] to-[hsl(217,91%,55%)] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-[0_10px_30px_-5px_rgba(59,130,246,0.4)] border border-white/20 flex items-center gap-1.5 sm:gap-2 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></div>
                <Award className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" aria-hidden="true" />
                <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap relative z-10">Top Rated</span>
              </motion.div>
            </motion.div>
            
            {/* 3D tilt container */}
            <motion.div
              className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-brand/30 group shadow-[0_30px_120px_-30px_hsl(var(--brand-blue)/0.45)]"
              whileHover={{ rotateX: -6, rotateY: 10 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Layer 1: image */}
              <motion.img
                src={heroData.image}
                alt="Hero section visual"
                className="w-full h-auto object-cover"
                style={{ transform: "translateZ(20px)" }}
              />

              {/* Layer 2: brand gradient veil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-blue)/0.25)] via-transparent to-[hsl(var(--gold)/0.25)]"
                style={{ transform: "translateZ(30px)" }}
              />

              {/* Layer 3: concentric rings for depth */}
              <motion.div
                className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-[hsl(var(--gold)/0.25)] to-[hsl(var(--brand-blue)/0.25)] blur-3xl"
                style={{ transform: "translateZ(60px)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-tr from-[hsl(var(--brand-blue)/0.2)] to-[hsl(var(--gold)/0.2)] blur-3xl"
                style={{ transform: "translateZ(40px)" }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Layer 4: floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 backdrop-blur-xl bg-gradient-to-br from-[hsl(220,25%,15%)] via-[hsl(220,25%,18%)] to-[hsl(220,25%,20%)] border border-[hsl(217,91%,65%)]/50 rounded-xl p-4 sm:p-5 shadow-2xl"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Palette className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{heroData.stats.clients}</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-[hsl(217,91%,85%)] font-medium">Clients Served</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center border-x border-border/50"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{heroData.stats.costSaved}</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-[hsl(217,91%,85%)] font-medium">Avg Timeline</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{heroData.stats.rating}</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-[hsl(217,91%,85%)] font-medium">Success Rate</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-brand/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-brand/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute top-1/2 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-full blur-2xl"
              animate={{
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
      
    </motion.section>
  );
};

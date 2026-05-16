import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Clock, CheckCircle2, Award, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <motion.section 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[image:var(--gradient-dark)] z-60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />
          {/* Dark overlay for stronger contrast */}
        <div className="absolute inset-0 pointer-events-none bg-black/20 dark:bg-black/30" />
      </div>
        {/* Soft radial vignette */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-70 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_30%,transparent_65%)]" />
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_8px)]" />
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[hsl(217,91%,65%)]/20 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-16 -left-16 w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-[hsl(220,90%,60%)]/25 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced geometric patterns */}
        <motion.div 
          className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white/25 rounded-lg"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-16 right-16 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/25 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/35 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Enhanced decorative header */}
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8 md:mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-lg rounded-full text-sm sm:text-base font-bold text-white flex items-center gap-2 border border-white/35 shadow-xl hover:scale-105 transition-transform duration-300">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span className="whitespace-nowrap">Launch High‑ROI Campaigns</span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[hsl(var(--gold))] animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main headline with improved hierarchy */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block drop-shadow-lg">Ready to Scale</span>
            <span className="relative inline-block mt-2 sm:mt-3">
              <span className="relative z-10 bg-gradient-to-r from-white via-white/70 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Profitable Ads?
              </span>
              <motion.span 
                className="absolute bottom-2 sm:bottom-3 left-0 w-full h-4 sm:h-5 bg-white/30 -z-0 rounded-full blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          {/* One-liner */}
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Launch and scale cross‑channel ads with creative testing, robust tracking, and weekly optimization.
            </p>
          </motion.div>
          
          {/* Free Trial Badge */}
          <motion.div
            className="flex justify-center mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold text-white border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>7-Day Free Trial • No Credit Card Required</span>
            </div>
          </motion.div>

          {/* Single CTA */}
          <motion.div 
            className="flex justify-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Button 
              size="lg"
              onClick={() => window.location.href = '/book-meeting'}
              className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white hover:opacity-95 group px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold rounded-2xl shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.2)] hover:shadow-[0_25px_70px_-15px_hsl(217_91%_60%/0.5),0_0_60px_hsl(217_91%_60%/0.3)] transition-all duration-300 border-0 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          {/* (condensed) removed stats */}
          <></>

          {/* (condensed) removed trust indicators */}
          <></>

          {/* Small reassurance */}
          <motion.p 
            className="mt-6 text-white/80 text-sm max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Join 300+ teams scaling with data‑driven ad playbooks.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};
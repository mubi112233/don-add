import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle2, ArrowLeft, Menu, X, Phone, Mail, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BookMeeting = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Handle scroll for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Enhanced Professional Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/98 backdrop-blur-2xl border-b-2 border-gold/20 shadow-2xl shadow-gold/5"
            : "bg-background/90 backdrop-blur-xl border-b border-border/30"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring", damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-gold/30 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-foreground font-black text-xl sm:text-2xl">D</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-gold group-hover:to-yellow-600 transition-all duration-300">
                  DON VA
                </span>
                <span className="text-[10px] sm:text-xs text-gold/80 font-semibold -mt-1 tracking-wide">Premium VAs</span>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-6">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300 font-semibold px-4 py-2 rounded-xl group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Home
              </Button>
              
              <div className="hidden lg:flex items-center gap-4 px-4 py-2 rounded-xl bg-muted/30 border border-border/50">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-300 font-medium group">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm">+1 (234) 567-890</span>
                </a>
                <div className="w-px h-6 bg-border/50" />
                <a href="mailto:contact@luxva.com" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-300 font-medium group">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm">contact@luxva.com</span>
                </a>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => document.querySelector('.calendly-inline-widget')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-foreground font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Jetzt buchen
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative w-11 h-11 rounded-xl border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5 text-gold" />
                  ) : (
                    <Menu className="h-5 w-5 text-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="md:hidden border-t-2 border-gold/20 bg-background/95 backdrop-blur-xl"
              >
                <div className="py-6 space-y-4">
                  {/* Book Now CTA */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="px-4"
                  >
                    <Button
                      onClick={() => {
                        document.querySelector('.calendly-inline-widget')?.scrollIntoView({ behavior: 'smooth' });
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-foreground font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Jetzt Termin vereinbaren
                    </Button>
                  </motion.div>
                  
                  <div className="h-px bg-border/50 mx-4" />
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
                      className="w-full justify-start text-muted-foreground hover:text-gold hover:bg-gold/5 py-3 rounded-xl transition-all duration-300 group"
                    >
                      <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                      <span className="font-semibold">Zur Startseite</span>
                    </Button>
                  </motion.div>
                  
                  <div className="space-y-2 px-4">
                    <motion.a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground/60 font-medium">Anrufen</span>
                        <span className="font-semibold">+1 (234) 567-890</span>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="mailto:contact@luxva.com"
                      className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground/60 font-medium">E-Mail</span>
                        <span className="font-semibold">contact@luxva.com</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            className="lg:col-span-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                Beratung buchen
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Vereinbaren Sie ein kostenloses 15‑minütiges Gespräch, um zu besprechen, wie wir Ihr Unternehmen unterstützen können.
              </p>
            </div>

            {/* Meeting Details */}
            <div className="space-y-4 p-5 sm:p-6 bg-card border border-border rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                Das erwartet Sie
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      15‑Minuten Termin
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Kurzes, fokussiertes Gespräch zu Ihren Anforderungen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      Virtuelles Meeting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Teilnahme über Google Meet oder Zoom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      Keine Verpflichtung
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Kostenloses Beratungsgespräch ohne Verpflichtungen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We'll Cover */}
            <div className="space-y-4 p-5 sm:p-6 bg-gold/5 border border-gold/20 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                Wir besprechen
              </h3>
              <ul className="space-y-3">
                {[
                  "Ihre aktuellen operativen Herausforderungen",
                  "Wie VAs in Ihren Workflow passen",
                  "Individuelle Lösungen für Ihr Unternehmen",
                  "Preise & Teamstruktur‑Optionen",
                  "Nächste Schritte für den Start",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">200+</div>
                <div className="text-xs text-muted-foreground mt-1">Kunden</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">70%</div>
                <div className="text-xs text-muted-foreground mt-1">Kosteneinsparung</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">4.9/5</div>
                <div className="text-xs text-muted-foreground mt-1">Bewertung</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Calendly Widget */}
          <div className="lg:col-span-3 order-first lg:order-last">
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-xl p-2 shadow-lg">
                <div
                  className="calendly-inline-widget rounded-lg overflow-hidden"
                  data-url="https://calendly.com/mmubasharshahzad40/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=d4af37"
                  style={{ minWidth: "100%", height: "600px" }}
                />
              </div>

              {/* Bottom Note */}
              <div className="mt-4 p-4 bg-gold/5 border border-gold/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 inline mr-2 text-gold" />
                  <span className="font-semibold text-foreground">100% Secure & Confidential</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
              Was unsere Kunden sagen
            </h2>
            <p className="text-muted-foreground">
              Warum Unternehmen DON VA vertrauen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc",
                text: "DON VA hat unsere Abläufe transformiert. Die Beratung war fundiert und das Onboarding nahtlos.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, Digital Growth",
                text: "Die beste Entscheidung. Unsere VA wurde innerhalb weniger Wochen ein fester Teil des Teams.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Director, MarketPro",
                text: "Professionell, verlässlich und kosteneffizient. Mehr kann man von einem VA‑Service nicht erwarten.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Professional Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-extrabold text-sm">D</span>
              </div>
              <span className="text-lg font-bold">DON VA</span>
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 DON VA. Alle Rechte vorbehalten. Premium Virtual‑Assistant‑Services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

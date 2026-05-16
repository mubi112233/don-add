import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  const toggleLanguage = () => {
    const current = i18n.language;
    const next = current === "en" ? "de" : "en";
    void i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const getThemeIcon = () => {
    // Default to light if theme is system or undefined
    const currentTheme = theme === "system" || !theme ? "light" : theme;
    return (
      <motion.div
        key={currentTheme}
        initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {currentTheme === "light" ? (
          <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
          <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
        )}
      </motion.div>
    );
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  const navItems = [
    { name: t("navbar.services"), href: "#services" },
    { name: t("navbar.howItWorks"), href: "#how-it-works" },
    { name: t("navbar.pricing"), href: "#pricing" },
    { name: t("navbar.testimonials"), href: "#testimonials" },
    { name: t("navbar.faq"), href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/[0.08]"
          : "bg-background/90 backdrop-blur-md"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[3px]"
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
      >
        <div className="animated-border h-full w-full" />
      </motion.div>
      {/* Animated gradient underline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] opacity-70">
        <div className="animated-border h-full w-full" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-[72px] lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <motion.div
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[hsl(217,91%,65%)] to-[hsl(220,90%,60%)] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 10px 25px -5px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-base sm:text-lg md:text-lg lg:text-xl">
                D
              </span>
            </motion.div>
            <motion.span
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              DON VA
            </motion.span>
          </motion.div>

          {/* Desktop Navigation - Show on medium screens and up */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative text-[hsl(222,47%,20%)] dark:text-foreground hover:text-[hsl(217,91%,60%)] dark:hover:text-gold transition-all duration-200 font-semibold text-sm md:text-sm lg:text-base px-2 md:px-2.5 lg:px-3 py-2 rounded-lg hover:bg-[hsl(210,40%,98%)] dark:hover:bg-gold/10 group whitespace-nowrap cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(217,91%,65%)] to-[hsl(220,90%,60%)] group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions - Show on medium screens and up */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative hover:bg-gold/10 hover:text-gold w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-110 overflow-hidden"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {getThemeIcon()}
                </AnimatePresence>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="px-2 md:px-2.5 lg:px-3 py-2 rounded-lg hover:bg-gold/10 hover:text-gold font-semibold"
                aria-label="Toggle language"
              >
                {i18n.language === "en" ? "DE" : "EN"}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/contact'}
                className="text-sm md:text-sm lg:text-base px-4 md:px-4 lg:px-6 py-2 md:py-2 lg:py-2.5 cursor-pointer hover:bg-gold/10 hover:text-gold transition-all duration-300 font-semibold whitespace-nowrap"
              >
                {i18n.language === "en" ? "Contact" : "Kontakt"}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Button
                variant="gold"
                size="sm"
                onClick={() => window.location.href = '/book-meeting'}
                className="text-sm md:text-sm lg:text-base px-4 md:px-4 lg:px-7 py-2 md:py-2 lg:py-2.5 cursor-pointer bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] hover:opacity-95 text-white border-0 hover:shadow-lg hover:shadow-[hsl(var(--gold))]/30 transition-all duration-300 hover:scale-105 font-semibold whitespace-nowrap"
              >
                {t("navbar.bookCall")}
              </Button>
            </motion.div>
          </div>

          {/* Mobile/Tablet Menu Button - Show on small/medium screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden flex items-center space-x-2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gold/10 hover:text-gold w-9 h-9 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {getThemeIcon()}
              </AnimatePresence>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="px-2 py-2 rounded-lg hover:bg-gold/10 hover:text-gold font-semibold"
              aria-label="Toggle language"
            >
              {i18n.language === "en" ? "DE" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gold/10 hover:text-gold w-9 h-9 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border/50 shadow-lg"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="block text-foreground hover:text-[hsl(217,91%,65%)] hover:bg-[hsl(217,91%,65%)]/10 active:bg-[hsl(217,91%,65%)]/20 transition-all duration-200 font-medium py-3 px-4 rounded-lg mx-2 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="pt-3 px-3 border-t border-border/50"
                >
                  <Button
                    variant="ghost"
                    onClick={() => window.location.href = '/contact'}
                    className="w-full text-base py-3 cursor-pointer font-semibold hover:bg-gold/10 hover:text-gold transition-all duration-300"
                  >
                    {i18n.language === "en" ? "Contact" : "Kontakt"}
                  </Button>
                  <div className="mt-2" />
                  <Button
                    variant="gold"
                    onClick={() => window.location.href = '/book-meeting'}
                    className="w-full text-base py-3 cursor-pointer font-semibold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] hover:opacity-95 text-white border-0 hover:shadow-lg transition-all duration-300"
                  >
                    {t("navbar.bookCall")}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
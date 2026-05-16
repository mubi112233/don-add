"use client";

import { Instagram, HeadphonesIcon, FolderKanban, TrendingUp, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { fetchServices, Service } from "@/lib/api";
import { SPACING } from "@/lib/constants";
import { usePathname } from "next/navigation";

const iconMap: Record<string, any> = {
  Instagram,
  HeadphonesIcon,
  FolderKanban,
  TrendingUp,
};

const sectionCopy = {
  en: {
    badge: "Services",
    heading: "Our Services",
    description: "Comprehensive ad management and call center solutions tailored to your business needs. From Google Ads to performance campaigns, we've got you covered.",
  },
  ge: {
    badge: "Dienstleistungen",
    heading: "Unsere Dienstleistungen",
    description: "Umfassendes Ad-Management und Call-Center-Lösungen, die auf Ihre Geschäftsbedürfnisse zugeschnitten sind. Von Google Ads bis hin zu Performance-Kampagnen.",
  },
};

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ge') || pathname.startsWith('/de') ? 'ge' : 'en';

  const copy = sectionCopy[currentLang as keyof typeof sectionCopy] || sectionCopy.en;

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchServices(currentLang);
        if (data && Array.isArray((data as any).services)) {
          const sortedServices = [...(data as any).services].sort((a: Service, b: Service) => a.order - b.order);
          setServices(sortedServices);
        } else {
          setServices([]);
        }
      } catch {
        setError("Failed to load services");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchServicesData();
  }, [currentLang]);

  if (loading) {
    return (
      <motion.section id="services" className="relative py-8 sm:py-10 md:py-14 lg:py-16 bg-muted/30 text-foreground z-30 overflow-hidden min-h-[500px]">
        <div className={`container mx-auto ${SPACING.container}`}>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gold" />
          </div>
        </div>
      </motion.section>
    );
  }

  if (error || services.length === 0) {
    return (
      <motion.section id="services" className="relative py-8 sm:py-10 md:py-14 lg:py-16 bg-muted/30 text-foreground z-30 overflow-hidden min-h-[500px]">
        <div className={`container mx-auto ${SPACING.container}`}>
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              {error || (currentLang === "ge" ? "Keine Dienstleistungen verfügbar." : "No services available.")}
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="services"
      className="relative py-8 sm:py-10 md:py-14 lg:py-16 bg-muted/30 text-foreground z-30 overflow-hidden min-h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <motion.div
        className="absolute top-10 right-5 w-64 h-64 sm:top-16 sm:right-8 sm:w-80 sm:h-80 md:top-20 md:right-10 md:w-96 md:h-96 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-5 w-56 h-56 sm:bottom-16 sm:left-8 sm:w-72 sm:h-72 md:bottom-20 md:left-10 md:w-80 md:h-80 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className={`container mx-auto ${SPACING.container}`}>
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50" />
            <span className="relative z-10">{copy.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight text-left">
            {copy.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2">
            {copy.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || (LucideIcons as any)[service.icon] || Instagram;
            return (
              <motion.div
                key={service._id || service.order}
                className="relative bg-card backdrop-blur-sm border-2 border-gold/20 p-5 sm:p-6 md:p-7 lg:p-9 rounded-xl sm:rounded-2xl hover:border-gold hover:shadow-[0_25px_80px_-20px_hsl(45_80%_55%/0.4)] transition-all duration-700 group overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-row items-start gap-5 sm:gap-6 relative z-10">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-foreground group-hover:scale-110 transition-all duration-500 shadow-[0_10px_30px_-10px_hsl(45_80%_55%/0.4)]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </motion.div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs sm:text-sm font-semibold group-hover:bg-gold group-hover:text-foreground group-hover:border-gold transition-all duration-500">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span className="leading-none">{service.benefit}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

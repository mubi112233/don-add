"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SPACING } from "@/lib/constants";
import { siteConfig, normalizeLocale, localizedPath } from "@/lib/site-config";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const lang = normalizeLocale(pathname);
  const isGe = lang === "ge";

  const links = {
    en: {
      company: "Company",
      services: "Services",
      resources: "Resources",
      nav: [
        { label: "Home", href: "/en" },
        { label: "Book a Meeting", href: "/en/book-meeting" },
        { label: "Contact Us", href: "/en/contact" },
      ],
      serviceLinks: [
        { label: "Google Ads", href: "/en/#services" },
        { label: "Meta Ads", href: "/en/#services" },
        { label: "Call Center", href: "/en/#services" },
        { label: "Performance Marketing", href: "/en/#services" },
        { label: "Pricing Plans", href: "/en/#pricing" },
      ],
      resourceLinks: [
        { label: "Blog", href: "/en/blog" },
        { label: "Case Studies", href: "/en/#case-studies" },
        { label: "How It Works", href: "/en/#how-it-works" },
        { label: "FAQ", href: "/en/#faq" },
        { label: "Testimonials", href: "/en/#testimonials" },
      ],
      tagline: "Professional ad management and call center services to grow your leads and revenue.",
      rights: "All rights reserved.",
    },
    ge: {
      company: "Unternehmen",
      services: "Dienstleistungen",
      resources: "Ressourcen",
      nav: [
        { label: "Startseite", href: "/de" },
        { label: "Meeting buchen", href: "/de/book-meeting" },
        { label: "Kontakt", href: "/de/contact" },
      ],
      serviceLinks: [
        { label: "Google Ads", href: "/de/#services" },
        { label: "Meta Ads", href: "/de/#services" },
        { label: "Call Center", href: "/de/#services" },
        { label: "Performance Marketing", href: "/de/#services" },
        { label: "Preispläne", href: "/de/#pricing" },
      ],
      resourceLinks: [
        { label: "Blog", href: "/de/blog" },
        { label: "Fallstudien", href: "/de/#case-studies" },
        { label: "So funktioniert es", href: "/de/#how-it-works" },
        { label: "FAQ", href: "/de/#faq" },
        { label: "Testimonials", href: "/de/#testimonials" },
      ],
      tagline: "Professionelles Ad-Management und Call-Center-Services für mehr Leads und Umsatz.",
      rights: "Alle Rechte vorbehalten.",
    },
  };

  const c = links[lang];

  return (
    <footer className="w-full bg-card border-t border-border/50 mt-8">
      <div className={`container mx-auto ${SPACING.container} py-12 sm:py-16`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg">{siteConfig.brandMarkText}</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">{siteConfig.brandName}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.tagline}</p>
            <Link
              href={localizedPath(lang, siteConfig.routes.bookMeeting)}
              className="inline-block px-5 py-2.5 bg-gold text-black text-sm font-bold rounded-lg hover:bg-primary transition-colors"
            >
              {isGe ? "Jetzt starten" : "Get Started"}
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{c.company}</h3>
            <ul className="space-y-2.5">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{c.services}</h3>
            <ul className="space-y-2.5">
              {c.serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{c.resources}</h3>
            <ul className="space-y-2.5">
              {c.resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. {c.rights}</p>
          <div className="flex items-center gap-4">
            <Link href={localizedPath(lang, siteConfig.routes.blog)} className="hover:text-gold transition-colors">Blog</Link>
            <Link href={localizedPath(lang, siteConfig.routes.contact)} className="hover:text-gold transition-colors">{isGe ? "Kontakt" : "Contact"}</Link>
            <Link href={localizedPath(lang, siteConfig.routes.bookMeeting)} className="hover:text-gold transition-colors">{isGe ? "Meeting buchen" : "Book Meeting"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

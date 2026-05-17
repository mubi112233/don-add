/**
 * Next-safe copy/translation constants (no react-i18next runtime)
 * Mirrors frontend/src/lib/client-i18n.ts for badge/heading/subheading text.
 * Use URL-based language detection (en/ge) to select strings.
 */

export const copy = {
  en: {
    // How It Works
    howItWorks: {
      badge: "How It Works",
      heading: "Launch your ads in <span class=\"text-gold\">4 simple steps</span>",
      description: "From strategy to live campaigns — our process is designed to deliver paid ad results fast.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Initial Consultation",
          description: "We audit your current ad spend and competitors to build a winning paid media strategy."
        },
        step2: {
          step: "Step 2",
          title: "Campaign Strategy & Planning",
          description: "We craft a tailored ad roadmap covering Google Ads, Meta, and call center campaigns."
        },
        step3: {
          step: "Step 3",
          title: "Launch & Optimization",
          description: "We go live with your campaigns and continuously optimize bids, creatives, and targeting."
        },
        step4: {
          step: "Step 4",
          title: "Monitoring & Scaling",
          description: "Real-time tracking, transparent reporting, and scaling what works to maximize your ROI."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      description: "Performance-driven ad management, dedicated call center support, transparent reporting, and measurable ROI.",
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">Growing Businesses</span>",
      subheading: "Real results from real companies scaling with DON ADS.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">3× ROAS in 60 Days</span>",
        description: "See how a mid-sized e-commerce brand tripled their return on ad spend and cut cost-per-lead by 55% with DON ADS.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Insights",
      heading: "Latest <span class=\"text-gold\">Insights</span>",
      description: "Practical guides and strategies for maximizing your paid ad performance and lead generation.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Real <span class=\"text-gold\">Success Stories</span>",
      description: "Proven results from companies scaling their paid media with DON ADS.",
      labels: {
        saved: "Saved",
        teamSize: "Team Size",
        timeline: "Timeline",
        viewFull: "View Full Case Study",
        viewStudy: "View Study",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about our ad management, call center services, and quality control.",
      qualityCardTitle: "Native Quality Control",
      qualityCardText: "Dedicated supervisors review campaign outputs and coach agents continuously to maintain standards.",
      toolsCardTitle: "Works with Your Tools",
      toolsCardText: "We integrate with your existing CRM, ad platforms, and workflows without disrupting operations.",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "We're here to help you choose the right ad setup for your needs.",
      contactSupport: "Contact Support",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "Simple, transparent pricing",
      sectionDescription: "Choose a plan that fits your needs. Scale up or down anytime.",
      vaCountLabel: "Select your ads plan",
      vaCountHelper: "Choose the right ad management package for your business",
      startingFrom: "Starting from €{price}/mo · ~€{hourly}/hr",
      bulkDiscount: "{percent}% bulk discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more plan{suffix} to unlock {percent}% bulk discount",
      bannerBadge: "Limited Time",
      bannerTitle: "Book a Free Meeting",
      bannerSubtitle: "Schedule your free consultation and get started today",
      bannerPoints: {
        noCommitment: "No commitment",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Full access"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedicated Ads Specialist",
            "Native Quality Control",
            "24h Replacement Guarantee",
            "Slack/Email Support",
            "14 Days Money-Back Warranty"
          ]
        },
        professional: {
          name: "Professional",
          hours: "20h / week",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Bi-weekly Performance Reports",
            "Flexible Hour Rollover"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week",
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "No Setup Fee",
            "Dedicated Account Manager",
            "Weekly Strategy Calls",
            "Custom Workflow Integration"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "hours",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All prices are per plan. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // Final CTA
    finalCTA: {
      badge: "Ready to Scale?",
      title: "Start with <span class=\"text-gold\">DON ADS</span> Today",
      description: "Book a free consultation and see how we can grow your leads and revenue in 30 days.",
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Why <span class=\"text-gold\">Choose Us</span>",
    },
  },

  ge: {
    // How It Works
    howItWorks: {
      badge: "Wie es funktioniert",
      heading: "Starten Sie in <span class=\"text-gold\">4 einfachen Schritten</span>",
      description: "Von der Strategie bis zur Live-Kampagne – unser Prozess liefert schnelle Ergebnisse im Paid Advertising.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Erstberatung",
          description: "Wir analysieren Ihr aktuelles Ad-Budget und die Konkurrenz, um eine gewinnbringende Paid-Media-Strategie zu entwickeln."
        },
        step2: {
          step: "Schritt 2",
          title: "Kampagnenstrategie & Planung",
          description: "Wir erstellen eine maßgeschneiderte Roadmap für Google Ads, Meta und Call-Center-Kampagnen."
        },
        step3: {
          step: "Schritt 3",
          title: "Launch & Optimierung",
          description: "Wir starten Ihre Kampagnen und optimieren kontinuierlich Gebote, Creatives und Targeting."
        },
        step4: {
          step: "Schritt 4",
          title: "Monitoring & Skalierung",
          description: "Echtzeit-Tracking, transparentes Reporting und Skalierung der erfolgreichsten Kampagnen für maximalen ROI."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      description: "Performance-orientiertes Ad-Management, dedizierter Call-Center-Support, transparentes Reporting und messbarer ROI.",
    },

    // Testimonials
    testimonials: {
      heading: "Vertrauen von <span class=\"text-gold\">wachsenden Unternehmen</span>",
      subheading: "Echte Ergebnisse von Unternehmen, die mit DON ADS wachsen.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">3× ROAS in 60 Tagen</span>",
        description: "Erfahren Sie, wie eine mittelständische E-Commerce-Marke ihren ROAS verdreifachte und die Kosten pro Lead um 55% senkte.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "Einblicke",
      heading: "Aktuelle <span class=\"text-gold\">Einblicke</span>",
      description: "Praktische Leitfäden und Strategien zur Skalierung Ihres Teams und Optimierung Ihrer Abläufe.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "Echte <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Bewährte Ergebnisse von Unternehmen, die ihr Paid-Media-Wachstum mit DON ADS skalieren.",
      labels: {
        saved: "Gespart",
        teamSize: "Teamgröße",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Studie ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf die häufigsten Fragen zu unserem Service, Qualitätskontrolle und Sicherheit.",
      qualityCardTitle: "Native Qualitätskontrolle",
      qualityCardText: "Dedizierte Supervisoren prüfen Ergebnisse und coachen kontinuierlich, um Standards zu halten.",
      toolsCardTitle: "Funktioniert mit Ihren Tools",
      toolsCardText: "Wir integrieren uns in Ihre bestehenden Workflows und Plattformen ohne Unterbrechung.",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Wir helfen Ihnen gern, das passende Setup zu wählen.",
      contactSupport: "Support kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Preise",
      sectionTitle: "Einfache, transparente Preise",
      sectionDescription: "Wählen Sie den perfekten Plan für Ihr Unternehmen. Skalieren Sie jederzeit hoch oder runter.",
      vaCountLabel: "Wie viele VAs brauchen Sie?",
      vaCountHelper: "Wählen Sie die richtige Anzahl virtueller Assistenten für Ihr Team",
      startingFrom: "Ab €{price}/Stunde",
      bulkDiscount: "{percent}% Rabatt - {suffix} mehr!",
      bulkSavings: "Gesamtersparnis: €{amount}",
      bulkHint: "Fügen Sie {count} weitere {suffix} hinzu, um {percent}% Rabatt zu erhalten",
      bannerBadge: "Zeitlich begrenzt",
      bannerTitle: "Meeting buchen",
      bannerSubtitle: "Vereinbaren Sie Ihre kostenlose Beratung und starten Sie noch heute",
      bannerPoints: {
        noCommitment: "Keine Verpflichtung",
        cancelAnytime: "Jederzeit kündbar", 
        fullAccess: "Voller Zugriff"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedizierter virtueller Assistent",
            "Qualitätskontrolle durch Muttersprachler",
            "24h Ersatzgarantie", 
            "Slack/Email Support",
            "14 Tage Geld-zurück-Garantie"
          ]
        },
        professional: {
          name: "Professional", 
          hours: "20h / Woche",
          features: [
            "Alles aus Starter",
            "Keine Einrichtungsgebühr",
            "Prioritätsupport",
            "Zweiwöchentliche Fortschrittsberichte",
            "Flexible Stundenübertragung"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / Woche", 
          badge: "Bester Wert",
          features: [
            "Alles aus Professional",
            "Keine Einrichtungsgebühr",
            "Dedizierter Account Manager", 
            "Wöchentliche Strategie-Calls",
            "Individuelle Workflow-Integration"
          ]
        }
      },
      button: "Jetzt starten",
      perMonth: "/Mo.",
      hoursUnit: "Stunden",
      planSetupFee: "+€{fee} Einrichtungsgebühr",
      planNoSetupFee: "Keine Einrichtungsgebühr",
      disclaimer: "Alle Preise gelten pro Plan. Mengenrabatte werden automatisch angewendet. Einrichtungsgebühren sind einmalige Zahlungen."
    },

    // Final CTA
    finalCTA: {
      badge: "Bereit zu skalieren?",
      title: "Starten Sie noch heute mit <span class=\"text-gold\">DON ADS</span>",
      description: "Buchen Sie eine kostenlose Beratung und erleben Sie, wie wir Ihre Leads und Umsätze in 30 Tagen steigern können."
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Warum <span class=\"text-gold\">wir</span>?",
    },
  },
} as const;

/**
 * Helper to get copy for a language (en/ge)
 */
export const getCopy = <K extends keyof typeof copy.en>(lang: string, key: K) => {
  const normalizedLang = lang.toLowerCase().startsWith('ge') || lang.toLowerCase().startsWith('de') ? 'ge' : 'en';
  return copy[normalizedLang as 'en' | 'ge'][key];
};

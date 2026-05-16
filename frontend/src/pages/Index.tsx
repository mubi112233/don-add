import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <SEOHead 
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Omnichannel Ad Campaign Management | Don-Ad",
          "description": "Plan, launch, and scale paid ads across Google, Meta, TikTok, Snapchat, LinkedIn, and X. Full‑funnel strategy, creative, tracking, A/B testing, and performance reporting.",
          "url": "https://don-ad.com/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Don-Ad",
            "url": "https://don-ad.com",
            "logo": "https://don-ad.com/placeholder.svg"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://don-ad.com/"
              }
            ]
          }
        }}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HowItWorks />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Services />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Pricing />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ToolsIntegration />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Blog />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CaseStudies />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FAQ />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FinalCTA />
        </motion.div>
      </motion.div>
    </main>
    </>
  );
};

export default Index;
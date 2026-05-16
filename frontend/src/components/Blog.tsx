import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";

interface BlogPost {
  blogId: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  sections?: Array<{heading: string; details: string[]}>;
  charts?: Record<string, unknown>;
  order: number;
}

export const Blog = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [sectionData, setSectionData] = useState({
    badge: "",
    headingPrefix: "",
    headingEmphasis: "",
    subtitle: ""
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const apiBase = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');
        const database = import.meta.env.VITE_DATABASE || 'callcenter';
        const url = `${apiBase}/api/blogs?lang=${i18n.language}`;
        
        const response = await fetch(url, {
          headers: {
            'X-Tenant-ID': database
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data.blogs);
          setSectionData({
            badge: "Latest Insights",
            headingPrefix: "Marketing",
            headingEmphasis: "Blog",
            subtitle: "Stay updated with the latest digital marketing trends and strategies"
          });
        } else {
          console.error('Failed to fetch blog data - Status:', response.status);
        }
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
        // Set fallback data immediately on error
        setBlogPosts([
          {
            blogId: 1,
            title: "5 Facebook Ad Strategies That Actually Work in 2024",
            excerpt: "Discover the latest Facebook advertising strategies that are driving real results for businesses this year.",
            content: "",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
            author: "Marketing Team",
            date: "2024-01-15",
            readTime: "5 min read",
            category: "Facebook Ads",
            order: 1
          },
          {
            blogId: 2,
            title: "Google Ads vs Facebook Ads: Which is Better for Your Business?",
            excerpt: "A comprehensive comparison to help you choose the right advertising platform for your business goals.",
            content: "",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            author: "Marketing Team",
            date: "2024-01-10",
            readTime: "7 min read",
            category: "Strategy",
            order: 2
          },
          {
            blogId: 3,
            title: "How to Optimize Your Ad Campaigns for Maximum ROI",
            excerpt: "Learn the key metrics and optimization techniques that top advertisers use to maximize their return on investment.",
            content: "",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            author: "Marketing Team",
            date: "2024-01-05",
            readTime: "6 min read",
            category: "Optimization",
            order: 3
          }
        ]);
        setSectionData({
          badge: "Latest Insights",
          headingPrefix: "Marketing",
          headingEmphasis: "Blog",
          subtitle: "Stay updated with the latest digital marketing trends and strategies",
          cta: "View All Posts"
        });
      }
    };

    if (isMounted) {
      fetchBlogData();
    }
  }, [i18n.language, isMounted]);

  // Default section data
  const defaultSectionData = {
    badge: i18n.language === 'de' ? 'Unser Blog' : 'Our Blog',
    headingPrefix: i18n.language === 'de' ? 'Unser' : 'Our',
    headingEmphasis: i18n.language === 'de' ? 'Blog' : 'Blog',
    subtitle: i18n.language === 'de' 
      ? 'Einblicke in unsere Denkweise, Strategien und Erfolgsgeschichten aus der digitalen Marketingwelt.'
      : 'Insights into our thinking, strategies, and success stories from the digital marketing world.'
  };

  const currentSectionData = { ...defaultSectionData, ...sectionData };

  if (!isMounted || blogPosts.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {currentSectionData.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,11%)] dark:text-foreground">
            {currentSectionData.headingPrefix} <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">{currentSectionData.headingEmphasis}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {currentSectionData.subtitle}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.blogId ?? index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="group relative bg-card/80 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl overflow-hidden hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer w-full flex flex-col hover:-translate-y-2"
                onClick={() => navigate(`/blog/${post.blogId}`)}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                  }
                }}
              >
                {/* Hover glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(var(--gold))]/20 via-transparent to-[hsl(var(--brand-blue))]/20" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(217,91%,65%)] to-transparent opacity-60" />
                
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-category={post.category}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.dataset.fallback !== '1') {
                        target.dataset.fallback = '1';
                        const cat = (target.dataset.category || '').toLowerCase();
                        let placeholder = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=80';
                        if (cat.includes('tiktok')) {
                          placeholder = 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1200&auto=format&fit=crop&q=80';
                        } else if (cat.includes('snap')) {
                          placeholder = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop&q=80';
                        } else if (cat.includes('comparison') || cat.includes('playbook')) {
                          placeholder = 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&auto=format&fit=crop&q=80';
                        }
                        target.src = placeholder;
                      }
                    }}
                  />
                  {/* Subtle image gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 backdrop-blur-[2px] bg-card/90 dark:bg-[hsl(var(--gold))] text-[hsl(222,47%,20%)] dark:text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-[hsl(222,47%,20%)] dark:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[hsl(220,30%,50%)] dark:text-white mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[hsl(240,40%,92%)] dark:border-[hsl(240,30%,35%)]/50">
                    <span className="text-[10px] sm:text-xs text-[hsl(var(--brand-blue))] dark:text-[hsl(var(--brand-blue))] truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card dark:bg-white/10 text-[hsl(var(--gold))] dark:text-white border border-[hsl(var(--gold))]/30 dark:border-white/20 hover:bg-gradient-to-r hover:from-[hsl(var(--gold))] hover:to-[hsl(var(--brand-blue))] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                        <span className="hidden sm:inline">Read More</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

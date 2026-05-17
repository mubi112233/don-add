"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchBlog } from "@/lib/api";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";

const decodeHtml = (value: string) => {
  if (!value) return value;
  if (!value.includes("&")) return value;
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
};

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();

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
  charts?: any;
  order?: number;
  id?: number | string;
  sections?: { heading: string; details: string }[];
}

export const Blog = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/ge") || pathname.startsWith("/de") ? "ge" : "en";
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const copy = getCopy(currentLang, "blog");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlog(currentLang);
        if (!data) throw new Error("Failed to fetch blogs");
        const fetchedBlogs = Array.isArray((data as any).blogs)
          ? (data as any).blogs.sort(
              (a: BlogPost, b: BlogPost) => (a.order || 0) - (b.order || 0) || a.blogId - b.blogId
            )
          : [];
        setPosts(fetchedBlogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blogs");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentLang]);

  const sectionClass = `relative ${SPACING.section} bg-background overflow-hidden`;

  if (loading) {
    return (
<<<<<<< HEAD
      <motion.section id="blog" className={sectionClass}>
=======
      <motion.section
        id="blog"
        className={`relative ${SPACING.section} bg-background overflow-hidden`}
      >
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
        <div className={`container mx-auto ${SPACING.container}`}>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
          </div>
        </div>
      </motion.section>
    );
  }

  if (error || posts.length === 0) {
    return (
<<<<<<< HEAD
      <motion.section id="blog" className={sectionClass}>
=======
      <motion.section
        id="blog"
        className={`relative ${SPACING.section} bg-background overflow-hidden`}
      >
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
        <div className={`container mx-auto ${SPACING.container}`}>
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              {error || (currentLang === "ge" ? "Keine Blog-Artikel verfügbar." : "No blog posts available.")}
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="blog"
<<<<<<< HEAD
      className={sectionClass}
=======
      className={`relative ${SPACING.section} bg-muted/30 overflow-hidden`}
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />

      <div className={`container mx-auto ${SPACING.container} relative z-10`}>
<<<<<<< HEAD
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.4)] border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50" />
            <span className="relative z-10">{copy.badge}</span>
=======
        <div className="mb-12 sm:mb-16 lg:mb-20 text-left max-w-5xl">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-4 shadow-md">
            {copy.badge}
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[hsl(222,47%,20%)] dark:text-white leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: decodeHtml(copy.heading) }}
          />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {posts.map((post: BlogPost, index: number) => (
            <motion.div
              key={post.blogId || post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/${currentLang}/blog/${slugify(post.title)}-${post.blogId || post.id}`}
<<<<<<< HEAD
                className="group bg-card border-2 border-gold/20 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gold hover:shadow-[0_25px_80px_-20px_hsl(45_80%_55%/0.4)] transition-all duration-700 w-full flex flex-col h-full"
=======
                className="group bg-background border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 w-full block h-full"
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
              >
                <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden flex-shrink-0">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : null}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

<<<<<<< HEAD
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
=======
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-grow">
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border mt-auto">
                    <span className="text-xs sm:text-sm text-muted-foreground truncate">
                      {copy.by} {post.author}
                    </span>
<<<<<<< HEAD
                    <div className="flex items-center gap-1 sm:gap-2 text-gold font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all flex-shrink-0">
=======
                    <div className="flex items-center gap-1 sm:gap-2 text-primary font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all flex-shrink-0">
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
                      <span className="hidden sm:inline">{copy.readMore}</span>
                      <span className="sm:hidden">{copy.read}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

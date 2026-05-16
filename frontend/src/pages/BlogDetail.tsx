import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}
const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const posts = (t("blogList.items", { returnObjects: true }) as unknown as BlogPost[]) || [];
  
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t("blog.notFound")}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            {t("blog.backHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-11 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-gold/50 rounded-lg sm:rounded-xl text-foreground hover:text-gold transition-all duration-300 font-semibold group shadow-md hover:shadow-lg hover:shadow-gold/10 text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{t("blog.backToHome")}</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.dataset.fallback !== '1') {
                    target.dataset.fallback = '1';
                    target.src = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=80';
                  }
                }}
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-base sm:prose-lg lg:prose-xl prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:font-bold prose-h2:mb-5 prose-h2:mt-10 prose-h2:!text-[hsl(var(--brand-blue))] prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:font-bold prose-h3:mb-4 prose-h3:mt-8 prose-h3:!text-[hsl(var(--brand-blue))] prose-h4:text-xl sm:prose-h4:text-2xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-6 prose-h4:!text-[hsl(var(--brand-blue))] prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-12 sm:mb-14"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* Chart Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-10 sm:mb-12"
            >
              {(() => {
                const baseData = [
                  { name: "Wk 1", value: 24 },
                  { name: "Wk 2", value: 31 },
                  { name: "Wk 3", value: 27 },
                  { name: "Wk 4", value: 36 },
                  { name: "Wk 5", value: 42 },
                ];
                const config = {
                  value: {
                    label: i18n.language === "en" ? "Performance" : "Performance",
                    theme: { light: "hsl(var(--gold))", dark: "hsl(var(--gold))" },
                  },
                } as const;

                const chartTitle = i18n.language === "en" ? "Performance overview" : "Performance-Übersicht";
                const isBar = post.id % 2 === 0;

                return (
                  <div className="p-4 sm:p-6 border border-border/60 rounded-xl bg-card/40">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">{chartTitle}</h4>
                      <div className="text-xs sm:text-sm text-muted-foreground">{i18n.language === "en" ? "Last 5 weeks" : "Letzte 5 Wochen"}</div>
                    </div>
                    <ChartContainer config={config} className="w-full h-[260px] sm:h-[320px]">
                      {isBar ? (
                        <BarChart data={baseData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" tickLine={false} axisLine={false} />
                          <YAxis tickLine={false} axisLine={false} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="var(--color-value)" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      ) : (
                        <LineChart data={baseData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" tickLine={false} axisLine={false} />
                          <YAxis tickLine={false} axisLine={false} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={3} dot={{ r: 3 }} />
                        </LineChart>
                      )}
                    </ChartContainer>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
                      {i18n.language === "en"
                        ? "Sample data for illustration. Replace with your live KPIs (traffic, conversions, ROAS)."
                        : "Beispieldaten zur Veranschaulichung. Ersetzen Sie durch Ihre KPIs (Traffic, Conversions, ROAS)."}
                    </p>
                  </div>
                );
              })()}
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  {t("blog.ctaTitle")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  {t("blog.ctaSubtitle")}
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">{t("blog.ctaPrimary")}</span>
                  <span className="sm:hidden">{t("blog.ctaPrimaryMobile")}</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">{t("blog.moreArticles")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;

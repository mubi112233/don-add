import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";

interface CaseStudy {
  caseStudyId: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    mainResult: string;
    timeframe: string;
    seoFocus: string;
  };
}

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const caseStudyId = useMemo(() => Number(id), [id]);
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const apiBase = (import.meta.env.VITE_API_BASE || "").replace(/\/$/, "");
    const database = import.meta.env.VITE_DATABASE || "callcenter";

    const fetchCaseStudy = async () => {
      if (!Number.isFinite(caseStudyId)) {
        if (!cancelled) {
          setCaseStudy(null);
          setRelatedCaseStudies([]);
          setIsLoading(false);
        }
        return;
      }

      try {
        setIsLoading(true);

        const detailUrl = `${apiBase}/api/case-studies/${caseStudyId}?lang=${i18n.language}`;
        const listUrl = `${apiBase}/api/case-studies?lang=${i18n.language}`;

        const [detailResponse, listResponse] = await Promise.all([
          fetch(detailUrl, {
            headers: {
              "X-Tenant-ID": database
            }
          }),
          fetch(listUrl, {
            headers: {
              "X-Tenant-ID": database
            }
          })
        ]);

        if (!detailResponse.ok) {
          if (!cancelled) setCaseStudy(null);
        } else {
          const detailData = await detailResponse.json();
          if (!cancelled) setCaseStudy(detailData.caseStudy || null);
        }

        if (listResponse.ok) {
          const listData = await listResponse.json();
          const listItems: CaseStudy[] = listData.caseStudies || [];
          const related = listItems.filter(cs => cs.caseStudyId !== caseStudyId).slice(0, 2);
          if (!cancelled) setRelatedCaseStudies(related);
        } else {
          if (!cancelled) setRelatedCaseStudies([]);
        }
      } catch (_error) {
        if (!cancelled) {
          setCaseStudy(null);
          setRelatedCaseStudies([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchCaseStudy();

    return () => {
      cancelled = true;
    };
  }, [caseStudyId, i18n.language]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t("caseStudy.notFound")}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            {t("caseStudy.backHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-medium group px-3 py-2 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t("caseStudy.backHome")}
          </button>

          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-10">
              {/* Industry badge */}
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-4">
                {caseStudy.industry}
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                {caseStudy.title}
              </h1>

              <div className="flex items-center gap-3 text-base text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{caseStudy.company}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
              </div>

              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8 border border-border">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.mainResult}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudiesList.statResult")}</div>
                </div>
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.seoFocus}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudiesList.statFocus")}</div>
                </div>
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.timeframe}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudiesList.statTimeframe")}</div>
                </div>
              </div>
            </div>

            {/* Challenge Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {t("caseStudy.challenge")}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {t("caseStudy.solution")}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                {t("caseStudy.results")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-5"
                  >
                    <div className="text-3xl font-bold text-gold mb-2">{result.value}</div>
                    <div className="text-base font-semibold text-foreground mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-10">
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 sm:p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/30" />
                <p className="text-base sm:text-lg text-foreground mb-5 leading-relaxed italic">
                  "{caseStudy.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                    {caseStudy.testimonialAuthor.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{caseStudy.testimonialAuthor}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.testimonialRole}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-2xl p-8 sm:p-10 md:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-4">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-gold">{t("caseStudy.successBadge")}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {t("caseStudy.readyTitlePrefix")} {" "}
                  <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
                    {t("caseStudy.readyTitleEmphasis")}
                  </span>
                </h3>
                
                {/* Optional additional description can go here if added to data/locales */}
                
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <button
                    onClick={() => navigate('/book-meeting')}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>{t("caseStudy.ctaBook")}</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>
                  
                  <button
                    onClick={() => navigate('/')}
                    className="w-full sm:w-auto px-8 py-4 bg-gold/10 text-gold border-2 border-gold/30 hover:bg-gold/20 font-semibold rounded-xl transition-all duration-300"
                  >
                    {t("caseStudy.ctaViewAll")}
                  </button>
                </div>
                
                <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>{t("caseStudy.benefitNoCommitment")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>{t("caseStudy.benefit15Min")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>{t("caseStudy.benefitFree")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="mt-12 pt-10 border-t border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">{t("caseStudy.moreSuccess")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {relatedCaseStudies.map((relatedStudy) => (
                  <div
                    key={relatedStudy.caseStudyId}
                    onClick={() => navigate(`/case-study/${relatedStudy.caseStudyId}`)}
                    className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-gold/50 hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={relatedStudy.image}
                      alt={relatedStudy.company}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <span className="text-xs text-gold font-semibold">{relatedStudy.industry}</span>
                      <h4 className="text-base font-bold mt-2 mb-1 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedStudy.company}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedStudy.challenge}</p>
                      <div className="mt-2 text-sm text-gold font-semibold flex items-center gap-1">
                        {t("caseStudy.viewCaseStudy")}
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

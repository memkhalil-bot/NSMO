import { createFileRoute, Link } from "@tanstack/react-router";
import dohaImg from "@/assets/nsmo-doha.jpg";
import saduImg from "@/assets/sadu-pattern.png";
import {
  Target, Users, ShieldCheck, Building2, Briefcase, Award, BadgeCheck,
  LineChart, ClipboardList, ArrowLeft, ArrowRight, MapPin, Mail, Phone,
  GraduationCap, Scale, Network,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

type ClientLogo = { src: string; name: string; site?: string };

const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/images/clients/client-logo-01.jpeg", name: "عميل" },
  { src: "/images/clients/client-logo-02.png",  name: "الأهلي كابيتال",                         site: "https://www.alahlicapital.com" },
  { src: "/images/clients/client-logo-03.png",  name: "الجزيرة كابيتال",                        site: "https://www.aljaziracapital.com.sa" },
  { src: "/images/clients/client-logo-04.jpg",  name: "وزارة الصحة — السعودية",                 site: "https://www.moh.gov.sa" },
  { src: "/images/clients/client-logo-05.jpg",  name: "وزارة الموارد البشرية والتنمية الاجتماعية", site: "https://www.hrsd.gov.sa" },
  { src: "/images/clients/client-logo-06.jpg",  name: "إكسترا",                                 site: "https://www.extra.com" },
  { src: "/images/clients/client-logo-07.jpg",  name: "مصرف الراجحي",                           site: "https://www.alrajhibank.com.sa" },
  { src: "/images/clients/client-logo-08.png",  name: "بنك التنمية الاجتماعية",                 site: "https://www.sdb.gov.sa" },
  { src: "/images/clients/client-logo-09.png",  name: "وزارة الإسكان — السعودية",               site: "https://www.housing.gov.sa" },
  { src: "/images/clients/client-logo-10.jpg",  name: "دُلني",                                  site: "https://www.dulani.com" },
  { src: "/images/clients/client-logo-11.png",  name: "لبيه",                                   site: "https://labayh.net" },
  { src: "/images/clients/client-logo-12.png",  name: "هناك",                                   site: "https://hunak.qa" },
  { src: "/images/clients/client-logo-13.png",  name: "مؤسسة سالم بن محفوظ",                   site: "https://www.sbmfoundation.com" },
  { src: "/images/clients/client-logo-14.png",  name: "جامعة الحدود الشمالية",                 site: "https://www.nbu.edu.sa" },
  { src: "/images/clients/client-logo-15.jpeg", name: "جامعة قطر",                              site: "https://www.qu.edu.qa" },
  { src: "/images/clients/client-logo-16.png",  name: "مالتي باك",                              site: "https://multipackindustries.com" },
  { src: "/images/clients/client-logo-17.png",  name: "سكتور ستيل الدوحة",                     site: "https://www.sectorsteel.com" },
  { src: "/images/clients/client-logo-18.png",  name: "الهلال الأحمر القطري",                  site: "https://www.qrcs.org.qa" },
  { src: "/images/clients/client-logo-19.png",  name: "وزارة الثقافة — قطر",                   site: "https://www.moc.gov.qa" },
  { src: "/images/clients/client-logo-20.jpeg", name: "وزارة الداخلية — قطر",                  site: "https://www.moi.gov.qa" },
  { src: "/images/clients/client-logo-21.png",  name: "ديوان الخدمة والتطوير الحكومي — قطر",   site: "https://www.csb.gov.qa" },
  { src: "/images/clients/client-logo-22.png",  name: "الهيئة العامة للجمارك — قطر",           site: "https://www.customs.gov.qa" },
  { src: "/images/clients/client-logo-23.png",  name: "جهاز التخطيط والإحصاء",                 site: "https://www.psa.gov.qa" },
  { src: "/images/clients/client-logo-24.png",  name: "وزارة التجارة والصناعة — قطر",          site: "https://www.moci.gov.qa" },
  { src: "/images/clients/client-logo-25.png",  name: "ديوان المحاسبة — قطر",                  site: "https://www.sab.gov.qa" },
  { src: "/images/clients/client-logo-26.jpeg", name: "المجلس الأعلى للقضاء — قطر",            site: "https://www.sjc.gov.qa" },
  { src: "/images/clients/client-logo-27.png",  name: "كهرماء",                                 site: "https://www.km.qa" },
  { src: "/images/clients/client-logo-28.jpeg", name: "وكالة الأنباء القطرية",                  site: "https://www.qna.org.qa" },
  { src: "/images/clients/client-logo-29.jpeg", name: "القطرية",                                site: "https://www.qatarairways.com" },
  { src: "/images/clients/client-logo-30.png",  name: "Ooredoo",                                site: "https://www.ooredoo.qa" },
  { src: "/images/clients/client-logo-31.jpeg", name: "الهيئة العامة للضرائب — قطر",           site: "https://www.gta.gov.qa" },
  { src: "/images/clients/client-logo-32.jpeg", name: "قطر تستحق الأفضل",                      site: "https://www.gco.gov.qa" },
  { src: "/images/clients/client-logo-33.png",  name: "تكامل",                                  site: "https://takamol.com.sa" },
  { src: "/images/clients/client-logo-34.jpeg", name: "اللجنة الوطنية لحقوق الإنسان",          site: "https://www.nhrc-qa.org" },
  { src: "/images/clients/client-logo-35.png",  name: "وزارة الصحة العامة — قطر",              site: "https://www.moph.gov.qa" },
  { src: "/images/clients/client-logo-36.png",  name: "MBCC" },
  { src: "/images/clients/client-logo-37.jpeg", name: "معادن",                                  site: "https://www.maaden.com.sa" },
  { src: "/images/clients/client-logo-38.png",  name: "Z Corporate" },
  { src: "/images/clients/client-logo-39.jpeg", name: "البنك الأهلي القطري",                   site: "https://www.ahlibank.com.qa" },
  { src: "/images/clients/client-logo-40.png",  name: "سكتور ستيل الدوحة",                     site: "https://www.sectorsteel.com" },
  { src: "/images/clients/client-logo-41.jpeg", name: "مستشفيات دار الفؤاد",                   site: "https://www.daralfouad-hospital.com" },
  { src: "/images/clients/client-logo-42.jpeg", name: "عصفور كريستال",                          site: "https://www.asfourcrystal.com" },
  { src: "/images/clients/client-logo-43.jpeg", name: "Hassob Labs" },
  { src: "/images/clients/client-logo-44.png",  name: "هليوبوليس للتعمير",                     site: "https://www.hdg.com.eg" },
  { src: "/images/clients/client-logo-45.png",  name: "الديوان الأميري",                        site: "https://www.diwan.gov.qa" },
  { src: "/images/clients/client-logo-46.jpeg", name: "حكومة دبي",                              site: "https://www.dubai.ae" },
  { src: "/images/clients/client-logo-47.jpeg", name: "بنك قطر الوطني QNB",                    site: "https://www.qnb.com" },
  { src: "/images/clients/client-logo-48.png",  name: "جامعة الملك خالد",                      site: "https://www.kku.edu.sa" },
  { src: "/images/clients/client-logo-49.png",  name: "جامعة الملك سعود",                      site: "https://www.ksu.edu.sa" },
  { src: "/images/clients/client-logo-50.jpeg", name: "جامعة أم القرى",                        site: "https://www.uqu.edu.sa" },
];

const SERVICE_ICONS = [
  Target, ClipboardList, LineChart, ShieldCheck,
  Building2, Users, Award, Briefcase,
  GraduationCap, Network, Scale, BadgeCheck,
];

const ADVISORS = [
  { name: "د. منى النعيمي", code: "qa" },
  { name: "د. علي الإبراهيم", code: "qa" },
  { name: "الأستاذ/ حسين أمان العلي", code: "qa" },
  { name: "الأستاذ إبراهيم السادة", code: "qa" },
  { name: "د. ثمر البقمي", code: "sa" },
  { name: "السيد إقبال خان", code: "pk" },
  { name: "د. ألكسندر فان دي بوتي", code: "pl" },
  { name: "د. أحمد البربري", code: "eg" },
  { name: "د. ماجد السقا", code: "eg" },
  { name: "د. إسلام فرج", code: "eg" },
  { name: "د. أحمد بيومي", code: "eg" },
  { name: "الأستاذ محمد السيد خليل", code: "eg" },
  { name: "د. علي قاسم جواد", code: "sy" },
  { name: "د. أحمد حسونة", code: "jo" },
  { name: "د. معين الباطينة", code: "jo" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نسمو للاستشارات الإدارية — تحويل الاستراتيجية إلى نتائج" },
      { name: "description", content: "مركز نسمو للاستشارات الإدارية في الدوحة. شريك مؤسسي قطري لتطوير الاستراتيجية، القيادات، المخاطر، والتميز المؤسسي، انسجامًا مع رؤية قطر الوطنية 2030." },
    ],
  }),
  component: HomePage,
});

/** Qatar flag inspired serrated maroon band */
function QatarBand({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-6 block">
        <defs>
          <pattern id="serr" x="0" y="0" width="60" height="24" patternUnits="userSpaceOnUse">
            <polygon points="0,0 60,0 60,12 30,24 0,12" fill="var(--maroon)" />
          </pattern>
        </defs>
        <rect width="1200" height="24" fill="url(#serr)" />
      </svg>
    </div>
  );
}

function ClientLogoCard({ logo }: { logo: ClientLogo }) {
  const cardClass =
    "group flex items-center justify-center h-24 md:h-28 w-full bg-white rounded-xl shadow-sm border border-border/40 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--maroon)]/40";
  const img = (
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="max-h-16 md:max-h-20 max-w-[85%] w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
    />
  );
  if (logo.site) {
    return (
      <a href={logo.site} target="_blank" rel="noopener noreferrer" title={logo.name} aria-label={logo.name} className={cardClass}>
        {img}
      </a>
    );
  }
  return <div className={cardClass} title={logo.name} aria-label={logo.name}>{img}</div>;
}

/** Arrow that points forward in the current layout direction */
function FwdArrow({ className }: { className?: string }) {
  const { lang } = useTranslation();
  return lang === "ar"
    ? <ArrowLeft className={className} />
    : <ArrowRight className={className} />;
}

/** Language switcher pill */
function LangSwitcher() {
  const { lang, setLang } = useTranslation();
  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
        lang === l
          ? "bg-[var(--maroon)] text-white"
          : "text-muted-foreground hover:text-foreground"
      }`}
      aria-current={lang === l ? "true" : undefined}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center border border-border rounded-sm overflow-hidden shrink-0">
      {btn("ar", "عربي")}
      {btn("en", "EN")}
    </div>
  );
}

function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b-2 border-[var(--maroon)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0">
          <img src="/images/logos/nsmo-logo.png" alt="NSMO Logo" className="h-10 w-auto md:w-44 md:h-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#why" className="hover:text-[var(--maroon)] transition-colors whitespace-nowrap">{t("nav.why")}</a>
          <a href="#services" className="hover:text-[var(--maroon)] transition-colors whitespace-nowrap">{t("nav.services")}</a>
          <a href="#approach" className="hover:text-[var(--maroon)] transition-colors whitespace-nowrap">{t("nav.approach")}</a>
          <a href="#advisors" className="hover:text-[var(--maroon)] transition-colors whitespace-nowrap">{t("nav.advisors")}</a>
          <a href="#clients" className="hover:text-[var(--maroon)] transition-colors whitespace-nowrap">{t("nav.clients")}</a>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <LangSwitcher />
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-[var(--maroon)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--maroon-deep)] transition-colors whitespace-nowrap">
            {t("nav.cta")}
            <FwdArrow className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const { t } = useTranslation();

  const PILLARS = [
    { t: t("pillar.1.t"), d: t("pillar.1.d") },
    { t: t("pillar.2.t"), d: t("pillar.2.d") },
    { t: t("pillar.3.t"), d: t("pillar.3.d") },
  ];

  const STEPS = [0, 1, 2, 3].map((i) => ({
    n: t(`step.${i}.n` as Parameters<typeof t>[0]),
    title: t(`step.${i}.t` as Parameters<typeof t>[0]),
    desc: t(`step.${i}.d` as Parameters<typeof t>[0]),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <img
            src={dohaImg}
            alt={t("hero.img_alt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--maroon)]/95 via-[var(--maroon)]/80 to-[var(--maroon)]/40" />
        </div>

        <div
          className="absolute top-0 inset-x-0 h-8 z-10 opacity-90"
          style={{ backgroundImage: `url(${saduImg})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-32 md:pt-40 md:pb-44 relative z-10">
          <div className="max-w-3xl text-white animate-fade-up-blur">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] font-semibold text-[var(--gold-light)]">
              <span className="w-10 h-px bg-[var(--gold-light)]" />
              <span className="w-10 h-px bg-[var(--gold-light)]" />
            </div>
            <h1 className="mt-8 text-4xl md:text-7xl leading-[1.1] font-bold">
              {t("hero.h1")}
              <br />
              <span className="text-[var(--gold-light)]">{t("hero.h1_highlight")}</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/85 leading-[2] max-w-2xl">
              {t("hero.sub_pre")}
              {" "}
              <span className="text-[var(--gold-light)] font-semibold">{t("hero.sub_highlight")}</span>.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[var(--maroon)] px-8 py-4 text-sm font-bold hover:bg-[var(--gold-light)] transition-colors">
                {t("hero.cta1")}
                <FwdArrow className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[var(--maroon)] transition-colors">
                {t("hero.cta2")}
              </a>
            </div>
          </div>
        </div>

        <QatarBand />
      </section>

      {/* PILLARS / VALUES */}
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {PILLARS.map((p) => (
            <div key={p.t} className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-[var(--maroon)] grid place-items-center text-white font-display font-bold">۞</div>
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--maroon)]">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.9]">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY NOW */}
      <section id="why" className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-12 opacity-30"
          style={{ backgroundImage: `url(${saduImg})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">{t("why.label")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">
              {t("why.h2_1")}<br />{t("why.h2_2")}
            </h2>
            <p className="mt-8 text-muted-foreground leading-[2] text-lg">
              {t("why.body")}
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--maroon)]">
            <div className="bg-background p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--maroon)]">{t("why.stat1.val")}</div>
              <h3 className="mt-4 text-lg font-bold">{t("why.stat1.t")}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">{t("why.stat1.d")}</p>
            </div>
            <div className="bg-background p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--maroon)]">{t("why.stat2.val")}</div>
              <h3 className="mt-4 text-lg font-bold">{t("why.stat2.t")}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">{t("why.stat2.d")}</p>
            </div>
            <div className="bg-[var(--maroon)] text-white p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--gold-light)]">{t("why.stat3.val")}</div>
              <h3 className="mt-4 text-lg font-bold">{t("why.stat3.t")}</h3>
              <p className="mt-3 text-sm text-white/80 leading-[1.9]">{t("why.stat3.d")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">{t("services.label")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">{t("services.h2")}</h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-[2]">{t("services.sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {SERVICE_ICONS.map((Icon, i) => (
            <div key={i} className="bg-background p-8 hover:bg-[var(--cream)] transition-colors group border-b-2 border-transparent hover:border-[var(--maroon)]">
              <div className="w-12 h-12 bg-[var(--cream)] grid place-items-center text-[var(--maroon)] group-hover:bg-[var(--maroon)] group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-bold font-display">
                {t(`service.${i}.t` as Parameters<typeof t>[0])}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">
                {t(`service.${i}.d` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative bg-[var(--maroon)] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-y-0 start-0 w-64 opacity-15"
          style={{ backgroundImage: `url(${saduImg})`, backgroundSize: "200% auto", backgroundRepeat: "repeat-y" }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold-light)] font-bold">{t("approach.label")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              {t("approach.h2")}
              <br />
              <span className="text-[var(--gold-light)]">{t("approach.h2_highlight")}</span>
            </h2>
            <p className="mt-8 text-white/80 leading-[2] text-lg max-w-md">{t("approach.body")}</p>
          </div>
          <div className="space-y-6">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 border-t border-white/20 pt-6">
                <div className="text-[var(--gold-light)] font-display font-bold text-2xl shrink-0 w-12">{n}</div>
                <div>
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-[1.9]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section id="advisors" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">{t("advisors.label")}</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule center mx-auto">{t("advisors.h2")}</h2>
          <p className="mt-8 text-muted-foreground leading-[2]">{t("advisors.body")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORS.map((a) => (
            <div key={a.name} className="bg-card border border-border p-8 hover:border-[var(--maroon)] hover:shadow-lg transition-all">
              <div className="w-7 h-5 rounded-sm overflow-hidden shadow-sm">
                <img
                  src={`https://flagcdn.com/w80/${a.code}.png`}
                  srcSet={`https://flagcdn.com/w160/${a.code}.png 2x`}
                  alt={t(`country.${a.code}` as Parameters<typeof t>[0])}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-bold font-display text-lg">{a.name}</h3>
              <p className="text-xs text-[var(--maroon)] mt-3 tracking-[0.2em] font-semibold">
                {t(`country.${a.code}` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground whitespace-pre-line">
          {t("advisors.partners")}{"\n"}
          <span className="text-foreground font-bold">INSEAD · McKinsey · Accenture · Dale Carnegie · IE Business School</span>
        </p>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="relative bg-[var(--cream)] py-20 md:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">{t("clients.label")}</p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold">{t("clients.h2")}</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{t("clients.sub")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {CLIENT_LOGOS.map((c, i) => (
              <ClientLogoCard key={`logo-${i}`} logo={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">{t("contact.label")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">
              {t("contact.h2")}
              <br />
              {t("contact.h2_2")}
            </h2>
            <p className="mt-8 text-muted-foreground leading-[2] text-lg">{t("contact.body")}</p>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[var(--maroon)] shrink-0" />
                <span>{t("contact.loc")}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[var(--maroon)] shrink-0" />
                <a href="mailto:info@nsmo.qa" className="hover:text-[var(--maroon)] transition-colors">info@nsmo.qa</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[var(--maroon)] shrink-0" />
                <a href="tel:+97470960678" dir="ltr" className="hover:text-[var(--maroon)] transition-colors">+974 70960678</a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert(t("contact.form.success")); }}
            className="bg-card border-t-4 border-[var(--maroon)] border-x border-b border-border p-8 md:p-10 space-y-5 shadow-sm"
          >
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">{t("contact.form.name")}</label>
              <input required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">{t("contact.form.org")}</label>
              <input required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">{t("contact.form.email")}</label>
              <input type="email" required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">{t("contact.form.msg")}</label>
              <textarea rows={4} required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-[var(--maroon)] text-white py-4 text-sm font-bold hover:bg-[var(--maroon-deep)] transition-colors">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--ink)] text-white/80">
        <QatarBand />
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-sm inline-flex">
              <img src="/images/logos/nsmo-logo.png" alt="NSMO Logo" className="h-12 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-[1.9] text-white/65">{t("footer.tagline")}</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold-light)] font-bold mb-4">{t("footer.links")}</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[var(--gold-light)]">{t("nav.services")}</a></li>
              <li><a href="#approach" className="hover:text-[var(--gold-light)]">{t("nav.approach")}</a></li>
              <li><a href="#advisors" className="hover:text-[var(--gold-light)]">{t("nav.advisors")}</a></li>
              <li><a href="#contact" className="hover:text-[var(--gold-light)]">{t("contact.label")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold-light)] font-bold mb-4">{t("footer.address")}</div>
            <p className="text-sm leading-[1.9] text-white/65">
              {t("footer.addr_text")}<br />
              info@nsmo.qa<br />
              <span dir="ltr">+974 70960678</span>
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.linkedin.com/company/nsmo-qa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 hover:bg-[var(--maroon)] grid place-items-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/nsmo_qa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-[var(--maroon)] grid place-items-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@nsmo_qa" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 bg-white/10 hover:bg-[var(--maroon)] grid place-items-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-3.2-.01-6.4.02-9.6z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-white/50">
            <span>{t("footer.copyright")}</span>
            <span className="tracking-[0.25em]">{t("footer.crafted")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

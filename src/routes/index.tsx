import { createFileRoute, Link } from "@tanstack/react-router";
import dohaImg from "@/assets/nsmo-doha.jpg";
import saduImg from "@/assets/sadu-pattern.png";
import {
  Target, Users, ShieldCheck, Building2, Briefcase, Award, BadgeCheck,
  LineChart, ClipboardList, ArrowLeft, MapPin, Mail, Phone,
  GraduationCap, Scale, Network,
} from "lucide-react";

const clientLogoModules = import.meta.glob("@/assets/clients/*.asset.json", { eager: true }) as Record<string, { default: { url: string } }>;

// Map of logo file index (image{N} from source PPTX) → { name, website }
const CLIENT_META: Record<number, { name: string; site?: string }> = {
  2: { name: "الأهلي كابيتال", site: "https://www.alahlicapital.com" },
  3: { name: "الجزيرة كابيتال", site: "https://www.aljaziracapital.com.sa" },
  4: { name: "وزارة الصحة - السعودية", site: "https://www.moh.gov.sa" },
  5: { name: "وزارة الموارد البشرية والتنمية الاجتماعية", site: "https://www.hrsd.gov.sa" },
  6: { name: "إكسترا", site: "https://www.extra.com" },
  7: { name: "مصرف الراجحي", site: "https://www.alrajhibank.com.sa" },
  8: { name: "بنك التنمية الاجتماعية", site: "https://www.sdb.gov.sa" },
  9: { name: "وزارة الإسكان - السعودية", site: "https://www.housing.gov.sa" },
  10: { name: "دُلني", site: "https://www.dulani.com" },
  11: { name: "لبيه", site: "https://labayh.net" },
  12: { name: "هناك", site: "https://hunak.qa" },
  13: { name: "مؤسسة سالم بن محفوظ", site: "https://www.sbmfoundation.com" },
  14: { name: "جامعة الحدود الشمالية", site: "https://www.nbu.edu.sa" },
  15: { name: "جامعة قطر", site: "https://www.qu.edu.qa" },
  16: { name: "مالتي باك", site: "https://multipackindustries.com" },
  17: { name: "سكتور ستيل الدوحة", site: "https://www.sectorsteel.com" },
  18: { name: "الهلال الأحمر القطري", site: "https://www.qrcs.org.qa" },
  19: { name: "وزارة الثقافة - قطر", site: "https://www.moc.gov.qa" },
  20: { name: "وزارة الداخلية - قطر", site: "https://www.moi.gov.qa" },
  21: { name: "ديوان الخدمة والتطوير الحكومي - قطر", site: "https://www.csb.gov.qa" },
  22: { name: "الهيئة العامة للجمارك - قطر", site: "https://www.customs.gov.qa" },
  23: { name: "جهاز التخطيط والإحصاء", site: "https://www.psa.gov.qa" },
  24: { name: "وزارة التجارة والصناعة - قطر", site: "https://www.moci.gov.qa" },
  25: { name: "ديوان المحاسبة - قطر", site: "https://www.sab.gov.qa" },
  26: { name: "المجلس الأعلى للقضاء - قطر", site: "https://www.sjc.gov.qa" },
  27: { name: "كهرماء", site: "https://www.km.qa" },
  28: { name: "وكالة الأنباء القطرية", site: "https://www.qna.org.qa" },
  29: { name: "القطرية", site: "https://www.qatarairways.com" },
  30: { name: "Ooredoo", site: "https://www.ooredoo.qa" },
  31: { name: "الهيئة العامة للضرائب - قطر", site: "https://www.gta.gov.qa" },
  32: { name: "قطر تستحق الأفضل", site: "https://www.gco.gov.qa" },
  33: { name: "تكامل", site: "https://takamol.com.sa" },
  34: { name: "اللجنة الوطنية لحقوق الإنسان", site: "https://www.nhrc-qa.org" },
  35: { name: "وزارة الصحة العامة - قطر", site: "https://www.moph.gov.qa" },
  36: { name: "MBCC", site: "https://www.maaden.com.sa" },
  37: { name: "معادن", site: "https://www.maaden.com.sa" },
  38: { name: "Z Corporate" },
  39: { name: "البنك الأهلي القطري", site: "https://www.ahlibank.com.qa" },
  40: { name: "سكتور ستيل الدوحة", site: "https://www.sectorsteel.com" },
  41: { name: "مستشفيات دار الفؤاد", site: "https://www.daralfouad-hospital.com" },
  42: { name: "عصفور كريستال", site: "https://www.asfourcrystal.com" },
  43: { name: "Hassob Labs" },
  44: { name: "هليوبوليس للتعمير", site: "https://www.hdg.com.eg" },
  45: { name: "الديوان الأميري", site: "https://www.diwan.gov.qa" },
  46: { name: "حكومة دبي", site: "https://www.dubai.ae" },
  47: { name: "بنك قطر الوطني QNB", site: "https://www.qnb.com" },
  48: { name: "جامعة الملك خالد", site: "https://www.kku.edu.sa" },
  49: { name: "جامعة الملك سعود", site: "https://www.ksu.edu.sa" },
  50: { name: "جامعة أم القرى", site: "https://www.uqu.edu.sa" },
};

type ClientLogo = { url: string; name: string; site?: string };
const CLIENT_LOGOS: ClientLogo[] = Object.entries(clientLogoModules)
  .map(([path, m]) => {
    const n = parseInt(path.match(/logo(\d+)/)?.[1] ?? "0", 10);
    const meta = CLIENT_META[n] ?? { name: "عميل" };
    return { url: m.default.url, name: meta.name, site: meta.site, _n: n };
  })
  .sort((a, b) => a._n - b._n)
  .map(({ url, name, site }) => ({ url, name, site }));



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نسمو للاستشارات الإدارية — تحويل الاستراتيجية إلى نتائج" },
      { name: "description", content: "مركز نسمو للاستشارات الإدارية في الدوحة. شريك مؤسسي قطري لتطوير الاستراتيجية، القيادات، المخاطر، والتميز المؤسسي، انسجامًا مع رؤية قطر الوطنية 2030." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Target, title: "التخطيط الاستراتيجي", desc: "صياغة رؤى وخطط استراتيجية مرتبطة برؤية قطر الوطنية 2030، مع سجل افتراضات ومخاطر." },
  { icon: ClipboardList, title: "الخطط التشغيلية السنوية", desc: "تحويل الاستراتيجية إلى خطط تشغيلية واضحة، بجداول زمنية ومصفوفة أولويات." },
  { icon: LineChart, title: "خارطة المبادرات التنفيذية", desc: "ربط المبادرات بالنتائج المستهدفة عبر مصفوفة اعتمادية وجدول زمني مرحلي." },
  { icon: ShieldCheck, title: "إدارة المخاطر والامتثال", desc: "إطار شامل لإدارة المخاطر يواكب أعلى المخاطر وفق المنتدى الاقتصادي العالمي." },
  { icon: Building2, title: "إعادة الهيكلة التنظيمية", desc: "تصميم هياكل تنظيمية مرنة تدعم الكفاءة وتسريع اتخاذ القرار." },
  { icon: Users, title: "الموارد البشرية الاستراتيجية", desc: "بناء منظومة موارد بشرية تربط الكفاءات بالأهداف وتُمكّن من تحقيق التميز." },
  { icon: Award, title: "التميز المؤسسي والجودة", desc: "أنظمة جودة ومعايير تميز تُرسّخ ثقافة الأداء العالي والتحسين المستمر." },
  { icon: Briefcase, title: "إدارة المشاريع — PMO", desc: "حوكمة ومتابعة فعّالة تُحوّل الاستراتيجية إلى نتائج ملموسة." },
  { icon: GraduationCap, title: "الكوتشنج القيادي", desc: "تطوير قدرات القيادات التنفيذية من خلال جلسات فردية وجماعية تركّز على اتخاذ القرار والأثر المؤسسي." },
  { icon: Network, title: "الكوتشنج المؤسسي", desc: "بناء ثقافة التعلم المستمر داخل الفرق وتفعيل آليات التطوير المهني المبني على الكفايات." },
  { icon: Scale, title: "الحوكمة والالتزام", desc: "تصميم أطر حوكمة شاملة تضمن الشفافية، الفصل بين السلطات، والالتزام بأعلى معايير الممارسات." },
  { icon: BadgeCheck, title: "شهادة التميز المؤسسي EFQM", desc: "إعداد المؤسسات لنيل شهادة التميز المؤسسي وفق منهجية EFQM العالمية، مع تقييم الجاهزية وبناء خطة تحسين مؤسسي." },
];

const ADVISORS = [
  { name: "د. منى النعيمي", country: "قطر", code: "qa" },
  { name: "د. علي الإبراهيم", country: "قطر", code: "qa" },
  { name: "الأستاذ/ حسين أمان العلي", country: "قطر", code: "qa" },
  { name: "الأستاذ إبراهيم السادة", country: "قطر", code: "qa" },
  { name: "د. ثمر البقمي", country: "السعودية", code: "sa" },
  { name: "السيد إقبال خان", country: "باكستان", code: "pk" },
  { name: "د. ألكسندر فان دي بوتي", country: "بولندا", code: "pl" },
  { name: "د. أحمد البربري", country: "مصر", code: "eg" },
  { name: "د. ماجد السقا", country: "مصر", code: "eg" },
  { name: "د. إسلام فرج", country: "مصر", code: "eg" },
  { name: "د. أحمد بيومي", country: "مصر", code: "eg" },
  { name: "الأستاذ محمد السيد خليل", country: "مصر", code: "eg" },
  { name: "د. علي قاسم جواد", country: "سوريا", code: "sy" },
  { name: "د. أحمد حسونة", country: "الأردن", code: "jo" },
  { name: "د. معين الباطينة", country: "الأردن", code: "jo" },
];

const CLIENTS = [
  { name: "بنك قطر الوطني QNB", initial: "QNB" },
  { name: "وزارة الصحة العامة", initial: "صح" },
  { name: "تكامل للأعمال", initial: "تك" },
  { name: "اللجنة الوطنية لحقوق الإنسان", initial: "حق" },
  { name: "مؤسسة قطر", initial: "قط" },
  { name: "وزارة التجارة والصناعة", initial: "تج" },
  { name: "هيئات حكومية", initial: "حك" },
  { name: "شركات قطاع خاص", initial: "خاص" },
];

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
    "group flex items-center justify-center h-28 md:h-32 w-full bg-white rounded-lg shadow-sm border border-border/40 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--maroon)]";
  const img = (
    <img
      src={logo.url}
      alt={logo.name}
      loading="lazy"
      className="max-h-20 md:max-h-24 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
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

function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b-2 border-[var(--maroon)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logos/nsmo-logo.png" alt="NSMO Logo" className="h-10 w-auto md:w-44 md:h-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why" className="hover:text-[var(--maroon)] transition-colors">لماذا نسمو</a>
          <a href="#services" className="hover:text-[var(--maroon)] transition-colors">الخدمات</a>
          <a href="#approach" className="hover:text-[var(--maroon)] transition-colors">منهجيتنا</a>
          <a href="#advisors" className="hover:text-[var(--maroon)] transition-colors">المستشارون</a>
          <a href="#clients" className="hover:text-[var(--maroon)] transition-colors">العملاء</a>
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-[var(--maroon)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--maroon-deep)] transition-colors">
          احجز جلسة تشخيص
          <ArrowLeft className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        {/* Doha skyline background */}
        <div className="absolute inset-0 z-0">
          <img
            src={dohaImg}
            alt="أفق الدوحة عند الغروب"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--maroon)]/95 via-[var(--maroon)]/80 to-[var(--maroon)]/40" />
        </div>

        {/* Sadu pattern strip at top */}
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
              نُحوِّل الاستراتيجية
              <br />
              <span className="text-[var(--gold-light)]">إلى نتائج ملموسة.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/85 leading-[2] max-w-2xl">
              شريك مؤسسي قطري يبني منظومة تنفيذ تربط الخطة بالواقع،
              ويُمكّن المؤسسات الحكومية والخاصة من تحقيق
              <span className="text-[var(--gold-light)] font-semibold"> رؤية قطر الوطنية 2030</span>.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[var(--maroon)] px-8 py-4 text-sm font-bold hover:bg-[var(--gold-light)] transition-colors">
                ابدأ رحلة التحول
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[var(--maroon)] transition-colors">
                استكشف خدماتنا
              </a>
            </div>
          </div>
        </div>

        {/* Qatar flag serrated bottom edge */}
        <QatarBand />
      </section>

      {/* PILLARS / VALUES */}
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            { t: "الأصالة القطرية", d: "نتجذّر في القيم القطرية الأصيلة ونستلهم من الإرث الحضاري للأمة." },
            { t: "الانتماء الوطني", d: "كل مشروع نخدم به مؤسسة قطرية هو خدمة للوطن ولرؤيته الطموحة." },
            { t: "التميز العالمي", d: "نجمع بين المعرفة الدولية والفهم العميق لخصوصية البيئة الخليجية." },
          ].map((p) => (
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
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">لماذا الآن؟</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">
              عندما تزيد الضبابية الاستراتيجية،<br />الأداء يتراجع.
            </h2>
            <p className="mt-8 text-muted-foreground leading-[2] text-lg">
              رصدت Gartner ظاهرة "الاختلال الاستراتيجي" وارتباطها بانخفاض احتمالية الأداء القوي.
              هذه ليست أرقامًا للتخويف — إنها تكلفة غياب منظومة تنفيذ تربط الخطة بالواقع.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--maroon)]">
            <div className="bg-background p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--maroon)]">10–30٪</div>
              <h3 className="mt-4 text-lg font-bold">فجوة التنفيذ</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">
                ما يتحقق فعليًا من المقصود في غياب منظومة تنفيذ حقيقية.
              </p>
            </div>
            <div className="bg-background p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--maroon)]">11.4٪</div>
              <h3 className="mt-4 text-lg font-bold">تكلفة الهدر</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">
                من الاستثمار يضيع بسبب ضعف أداء المشاريع وفق دراسات PMI.
              </p>
            </div>
            <div className="bg-[var(--maroon)] text-white p-10">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--gold-light)]">2030</div>
              <h3 className="mt-4 text-lg font-bold">رؤية قطر الوطنية</h3>
              <p className="mt-3 text-sm text-white/80 leading-[1.9]">
                مواءمة استراتيجياتك مع الركائز الأربع: البشرية، الاجتماعية، الاقتصادية، والبيئية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">خدماتنا</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">
              منظومة استشارية متكاملة.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-[2]">
            من التخطيط الاستراتيجي حتى التنفيذ المؤسسي — حلول مصمَّمة للبيئة القطرية، بأثر قابل للقياس.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 hover:bg-[var(--cream)] transition-colors group border-b-2 border-transparent hover:border-[var(--maroon)]">
              <div className="w-12 h-12 bg-[var(--cream)] grid place-items-center text-[var(--maroon)] group-hover:bg-[var(--maroon)] group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-bold font-display">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.9]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative bg-[var(--maroon)] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-64 opacity-15"
          style={{ backgroundImage: `url(${saduImg})`, backgroundSize: "200% auto", backgroundRepeat: "repeat-y" }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold-light)] font-bold">منهجيتنا</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              تشخيص دقيق.
              <br />
              <span className="text-[var(--gold-light)]">تنفيذ منضبط.</span>
            </h2>
            <p className="mt-8 text-white/80 leading-[2] text-lg max-w-md">
              نُقدِّم مخرجات استشارية متوافقة مع التدقيق والحوكمة والجهات الرقابية،
              بدءًا من السياسات والأطر التنظيمية حتى لوحات القياس التنفيذية.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { n: "٠١", t: "التشخيص المؤسسي", d: "تقييم مستوى النضج، تحليل الفجوات، وقياس الأداء بمؤشرات كمية ونوعية." },
              { n: "٠٢", t: "صياغة الحلول", d: "تصميم خطط واقعية وقابلة للتنفيذ، مع سيناريوهات وافتراضات موثَّقة." },
              { n: "٠٣", t: "التنفيذ والمتابعة", d: "بناء PMO وحوكمة، مع لوحات قياس تكشف الانحرافات مبكرًا." },
              { n: "٠٤", t: "الأثر المستدام", d: "ترسيخ القدرات داخل المؤسسة لضمان استمرار التحسين بعد انتهاء التدخل." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-6 border-t border-white/20 pt-6">
                <div className="text-[var(--gold-light)] font-display font-bold text-2xl shrink-0 w-12">{n}</div>
                <div>
                  <h3 className="font-bold text-lg">{t}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-[1.9]">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section id="advisors" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">مستشارونا</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule center mx-auto">
            خبرات عالمية. أثر قطري.
          </h2>
          <p className="mt-8 text-muted-foreground leading-[2]">
            شبكة من المستشارين والشركاء الدوليين من أعرق المؤسسات الأكاديمية والاستشارية.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORS.map((a) => (
            <div key={a.name} className="bg-card border border-border p-8 hover:border-[var(--maroon)] hover:shadow-lg transition-all">
              <div className="w-7 h-5 rounded-sm overflow-hidden shadow-sm">
                <img
                  src={`https://flagcdn.com/w80/${a.code}.png`}
                  srcSet={`https://flagcdn.com/w160/${a.code}.png 2x`}
                  alt={a.country}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-bold font-display text-lg">{a.name}</h3>
              <p className="text-xs text-[var(--maroon)] mt-3 tracking-[0.2em] font-semibold">{a.country}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground whitespace-pre-line">
          بالشراكة مع{"\n"}
          <span className="text-foreground font-bold">INSEAD · McKinsey · Accenture · Dale Carnegie · IE Business School</span>
        </p>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="relative bg-[var(--cream)] py-20 md:py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">عملاؤنا</p>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold">يثقون بنا</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
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
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--maroon)] font-bold">تواصل معنا</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold maroon-rule">
              ابدأ رحلة التحول.
              <br />
              احجز جلسة تشخيص.
            </h2>
            <p className="mt-8 text-muted-foreground leading-[2] text-lg">
              تواصل مع فريق نسمو لجلسة استكشافية تُحدِّد فيها الفجوات الأهم،
              وخارطة تدخل سريعة من 6 إلى 10 أسابيع.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[var(--maroon)] shrink-0" />
                <span>الدوحة — دولة قطر</span>
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
            onSubmit={(e) => { e.preventDefault(); alert("شكرًا لتواصلك. سيتم الرد عليك خلال يوم عمل."); }}
            className="bg-card border-t-4 border-[var(--maroon)] border-x border-b border-border p-8 md:p-10 space-y-5 shadow-sm"
          >
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">الاسم الكامل</label>
              <input required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">الجهة / المؤسسة</label>
              <input required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">البريد الإلكتروني</label>
              <input type="email" required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">رسالتك</label>
              <textarea rows={4} required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-[var(--maroon)] outline-none py-3 text-sm transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-[var(--maroon)] text-white py-4 text-sm font-bold hover:bg-[var(--maroon-deep)] transition-colors">
              إرسال الطلب
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
            <p className="mt-5 text-sm leading-[1.9] text-white/65">
              شريك مؤسسي قطري متخصص في تحويل الاستراتيجية إلى نتائج، انسجامًا مع رؤية قطر الوطنية 2030.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold-light)] font-bold mb-4">روابط</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[var(--gold-light)]">الخدمات</a></li>
              <li><a href="#approach" className="hover:text-[var(--gold-light)]">منهجيتنا</a></li>
              <li><a href="#advisors" className="hover:text-[var(--gold-light)]">المستشارون</a></li>
              <li><a href="#contact" className="hover:text-[var(--gold-light)]">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold-light)] font-bold mb-4">العنوان</div>
            <p className="text-sm leading-[1.9] text-white/65">
              الدوحة — دولة قطر<br />
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
            <span>© {new Date().getFullYear()} مركز نسمو للاستشارات الإدارية — جميع الحقوق محفوظة</span>
            <span className="tracking-[0.25em]">صُمِّم في الدوحة 🇶🇦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

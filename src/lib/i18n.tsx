import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "ar" | "en";

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------

const YEAR = new Date().getFullYear();

const ar = {
  // Meta
  "meta.title": "نسمو للاستشارات الإدارية — تحويل الاستراتيجية إلى نتائج",
  "meta.desc": "مركز نسمو للاستشارات الإدارية في الدوحة. شريك مؤسسي قطري لتطوير الاستراتيجية، القيادات، المخاطر، والتميز المؤسسي، انسجامًا مع رؤية قطر الوطنية 2030.",

  // Nav
  "nav.why": "لماذا نسمو",
  "nav.services": "الخدمات",
  "nav.approach": "منهجيتنا",
  "nav.advisors": "المستشارون",
  "nav.clients": "العملاء",
  "nav.cta": "احجز جلسة تشخيص",

  // Hero
  "hero.h1": "نُحوِّل الاستراتيجية",
  "hero.h1_highlight": "إلى نتائج ملموسة.",
  "hero.sub_pre": "شريك مؤسسي قطري يبني منظومة تنفيذ تربط الخطة بالواقع، ويُمكّن المؤسسات الحكومية والخاصة من تحقيق",
  "hero.sub_highlight": "رؤية قطر الوطنية 2030",
  "hero.cta1": "ابدأ رحلة التحول",
  "hero.cta2": "استكشف خدماتنا",
  "hero.img_alt": "أفق الدوحة عند الغروب",

  // Pillars
  "pillar.1.t": "الأصالة القطرية",
  "pillar.1.d": "نتجذّر في القيم القطرية الأصيلة ونستلهم من الإرث الحضاري للأمة.",
  "pillar.2.t": "الانتماء الوطني",
  "pillar.2.d": "كل مشروع نخدم به مؤسسة قطرية هو خدمة للوطن ولرؤيته الطموحة.",
  "pillar.3.t": "التميز العالمي",
  "pillar.3.d": "نجمع بين المعرفة الدولية والفهم العميق لخصوصية البيئة الخليجية.",

  // Why
  "why.label": "لماذا الآن؟",
  "why.h2_1": "عندما تزيد الضبابية الاستراتيجية،",
  "why.h2_2": "الأداء يتراجع.",
  "why.body": "رصدت Gartner ظاهرة \"الاختلال الاستراتيجي\" وارتباطها بانخفاض احتمالية الأداء القوي. هذه ليست أرقامًا للتخويف — إنها تكلفة غياب منظومة تنفيذ تربط الخطة بالواقع.",
  "why.stat1.val": "10–30٪",
  "why.stat1.t": "فجوة التنفيذ",
  "why.stat1.d": "ما يتحقق فعليًا من المقصود في غياب منظومة تنفيذ حقيقية.",
  "why.stat2.val": "11.4٪",
  "why.stat2.t": "تكلفة الهدر",
  "why.stat2.d": "من الاستثمار يضيع بسبب ضعف أداء المشاريع وفق دراسات PMI.",
  "why.stat3.val": "2030",
  "why.stat3.t": "رؤية قطر الوطنية",
  "why.stat3.d": "مواءمة استراتيجياتك مع الركائز الأربع: البشرية، الاجتماعية، الاقتصادية، والبيئية.",

  // Services
  "services.label": "خدماتنا",
  "services.h2": "منظومة استشارية متكاملة.",
  "services.sub": "من التخطيط الاستراتيجي حتى التنفيذ المؤسسي — حلول مصمَّمة للبيئة القطرية، بأثر قابل للقياس.",
  "service.0.t": "التخطيط الاستراتيجي",
  "service.0.d": "صياغة رؤى وخطط استراتيجية مرتبطة برؤية قطر الوطنية 2030، مع سجل افتراضات ومخاطر.",
  "service.1.t": "الخطط التشغيلية السنوية",
  "service.1.d": "تحويل الاستراتيجية إلى خطط تشغيلية واضحة، بجداول زمنية ومصفوفة أولويات.",
  "service.2.t": "خارطة المبادرات التنفيذية",
  "service.2.d": "ربط المبادرات بالنتائج المستهدفة عبر مصفوفة اعتمادية وجدول زمني مرحلي.",
  "service.3.t": "إدارة المخاطر والامتثال",
  "service.3.d": "إطار شامل لإدارة المخاطر يواكب أعلى المخاطر وفق المنتدى الاقتصادي العالمي.",
  "service.4.t": "إعادة الهيكلة التنظيمية",
  "service.4.d": "تصميم هياكل تنظيمية مرنة تدعم الكفاءة وتسريع اتخاذ القرار.",
  "service.5.t": "الموارد البشرية الاستراتيجية",
  "service.5.d": "بناء منظومة موارد بشرية تربط الكفاءات بالأهداف وتُمكّن من تحقيق التميز.",
  "service.6.t": "التميز المؤسسي والجودة",
  "service.6.d": "أنظمة جودة ومعايير تميز تُرسّخ ثقافة الأداء العالي والتحسين المستمر.",
  "service.7.t": "إدارة المشاريع — PMO",
  "service.7.d": "حوكمة ومتابعة فعّالة تُحوّل الاستراتيجية إلى نتائج ملموسة.",
  "service.8.t": "الكوتشنج القيادي",
  "service.8.d": "تطوير قدرات القيادات التنفيذية من خلال جلسات فردية وجماعية تركّز على اتخاذ القرار والأثر المؤسسي.",
  "service.9.t": "الكوتشنج المؤسسي",
  "service.9.d": "بناء ثقافة التعلم المستمر داخل الفرق وتفعيل آليات التطوير المهني المبني على الكفايات.",
  "service.10.t": "الحوكمة والالتزام",
  "service.10.d": "تصميم أطر حوكمة شاملة تضمن الشفافية، الفصل بين السلطات، والالتزام بأعلى معايير الممارسات.",
  "service.11.t": "شهادة التميز المؤسسي EFQM",
  "service.11.d": "إعداد المؤسسات لنيل شهادة التميز المؤسسي وفق منهجية EFQM العالمية، مع تقييم الجاهزية وبناء خطة تحسين مؤسسي.",

  // Approach
  "approach.label": "منهجيتنا",
  "approach.h2": "تشخيص دقيق.",
  "approach.h2_highlight": "تنفيذ منضبط.",
  "approach.body": "نُقدِّم مخرجات استشارية متوافقة مع التدقيق والحوكمة والجهات الرقابية، بدءًا من السياسات والأطر التنظيمية حتى لوحات القياس التنفيذية.",
  "step.0.n": "٠١",
  "step.0.t": "التشخيص المؤسسي",
  "step.0.d": "تقييم مستوى النضج، تحليل الفجوات، وقياس الأداء بمؤشرات كمية ونوعية.",
  "step.1.n": "٠٢",
  "step.1.t": "صياغة الحلول",
  "step.1.d": "تصميم خطط واقعية وقابلة للتنفيذ، مع سيناريوهات وافتراضات موثَّقة.",
  "step.2.n": "٠٣",
  "step.2.t": "التنفيذ والمتابعة",
  "step.2.d": "بناء PMO وحوكمة، مع لوحات قياس تكشف الانحرافات مبكرًا.",
  "step.3.n": "٠٤",
  "step.3.t": "الأثر المستدام",
  "step.3.d": "ترسيخ القدرات داخل المؤسسة لضمان استمرار التحسين بعد انتهاء التدخل.",

  // Advisors
  "advisors.label": "مستشارونا",
  "advisors.h2": "خبرات عالمية. أثر قطري.",
  "advisors.body": "شبكة من المستشارين والشركاء الدوليين من أعرق المؤسسات الأكاديمية والاستشارية.",
  "advisors.partners": "بالشراكة مع",

  // Countries
  "country.qa": "قطر",
  "country.sa": "السعودية",
  "country.pk": "باكستان",
  "country.pl": "بولندا",
  "country.eg": "مصر",
  "country.sy": "سوريا",
  "country.jo": "الأردن",

  // Clients
  "clients.label": "عملاؤنا",
  "clients.h2": "عملاؤنا",
  "clients.sub": "نفتخر بثقة شركائنا وعملائنا",

  // Contact
  "contact.label": "تواصل معنا",
  "contact.h2": "ابدأ رحلة التحول.",
  "contact.h2_2": "احجز جلسة تشخيص.",
  "contact.body": "تواصل مع فريق نسمو لجلسة استكشافية تُحدِّد فيها الفجوات الأهم، وخارطة تدخل سريعة من 6 إلى 10 أسابيع.",
  "contact.loc": "الدوحة — دولة قطر",
  "contact.form.name": "الاسم الكامل",
  "contact.form.org": "الجهة / المؤسسة",
  "contact.form.email": "البريد الإلكتروني",
  "contact.form.msg": "رسالتك",
  "contact.form.submit": "إرسال الطلب",
  "contact.form.success": "شكرًا لتواصلك. سيتم الرد عليك خلال يوم عمل.",

  // Footer
  "footer.tagline": "شريك مؤسسي قطري متخصص في تحويل الاستراتيجية إلى نتائج، انسجامًا مع رؤية قطر الوطنية 2030.",
  "footer.links": "روابط",
  "footer.address": "العنوان",
  "footer.addr_text": "الدوحة — دولة قطر",
  "footer.copyright": `© ${YEAR} مركز نسمو للاستشارات الإدارية — جميع الحقوق محفوظة`,
  "footer.crafted": "صُمِّم في الدوحة 🇶🇦",

  // Login
  "login.create": "إنشاء حساب",
  "login.welcome": "مرحبًا بعودتك",
  "login.sub_signup": "انضم إلى نسمو اليوم",
  "login.sub_signin": "تابع من حيث توقفت",
  "login.google": "المتابعة عبر Google",
  "login.loading": "جارٍ التحميل...",
  "login.or": "أو",
  "login.email": "البريد الإلكتروني",
  "login.password": "كلمة المرور",
  "login.signup": "إنشاء حساب",
  "login.signin": "تسجيل الدخول",
  "login.have_account": "لديك حساب بالفعل؟",
  "login.no_account": "ليس لديك حساب؟",
  "login.confirm_email": "تحقق من بريدك الإلكتروني لتأكيد حسابك",

  // App
  "app.morning": "صباح الخير",
  "app.afternoon": "مساء الخير",
  "app.evening": "مساء النور",
  "app.daily_ritual": "روتينك اليومي",
  "app.perfect_day": "يوم مثالي",
  "app.nothing_scheduled": "لا شيء مجدول اليوم",
  "app.all_done": "أُنجز الكل لليوم ✨",
  "app.progress": "أُنجز {x} من {y}",
  "app.fresh_start": "ابدأ من جديد",
  "app.add_first": "اضغط على زر + أدناه لإضافة عادتك الأولى",
  "app.not_scheduled": "غير مجدول اليوم ({count})",
} as const;

const en: typeof ar = {
  // Meta
  "meta.title": "NSMO Management Consulting — Turning Strategy into Measurable Results",
  "meta.desc": "NSMO Management Consulting in Doha, Qatar. A trusted Qatari institutional partner for strategy development, leadership, risk management, and organizational excellence aligned with Qatar National Vision 2030.",

  // Nav
  "nav.why": "Why NSMO",
  "nav.services": "Services",
  "nav.approach": "Our Approach",
  "nav.advisors": "Advisors",
  "nav.clients": "Clients",
  "nav.cta": "Book a Discovery Call",

  // Hero
  "hero.h1": "We Turn Strategy",
  "hero.h1_highlight": "Into Measurable Results.",
  "hero.sub_pre": "A Qatari institutional partner that builds execution systems connecting plans to reality, empowering public and private organizations to achieve",
  "hero.sub_highlight": "Qatar National Vision 2030",
  "hero.cta1": "Start Your Transformation",
  "hero.cta2": "Explore Our Services",
  "hero.img_alt": "Doha skyline at sunset",

  // Pillars
  "pillar.1.t": "Qatari Heritage",
  "pillar.1.d": "Rooted in authentic Qatari values, drawing inspiration from the nation's rich civilizational legacy.",
  "pillar.2.t": "National Commitment",
  "pillar.2.d": "Every project we deliver for a Qatari institution is an act of service to the nation and its ambitious vision.",
  "pillar.3.t": "Global Excellence",
  "pillar.3.d": "We bring together international expertise with a deep understanding of the Gulf region's unique operating context.",

  // Why
  "why.label": "Why Now?",
  "why.h2_1": "When strategic clarity fades,",
  "why.h2_2": "performance follows.",
  "why.body": "Gartner identified \"strategic misalignment\" and its direct link to declining performance probability. These aren't scare statistics — they represent the real cost of operating without an execution system that bridges strategy and reality.",
  "why.stat1.val": "10–30%",
  "why.stat1.t": "Execution Gap",
  "why.stat1.d": "The typical share of strategic intent that actually gets realized without a proper execution system in place.",
  "why.stat2.val": "11.4%",
  "why.stat2.t": "Cost of Waste",
  "why.stat2.d": "Of investment is lost due to poor project performance, according to PMI research.",
  "why.stat3.val": "2030",
  "why.stat3.t": "Qatar National Vision",
  "why.stat3.d": "Align your strategy with the four pillars: human, social, economic, and environmental development.",

  // Services
  "services.label": "Our Services",
  "services.h2": "An Integrated Consulting Suite.",
  "services.sub": "From strategic planning to institutional execution — solutions designed for the Qatari context, with measurable impact.",
  "service.0.t": "Strategic Planning",
  "service.0.d": "Crafting visions and strategic plans aligned with Qatar National Vision 2030, complete with assumptions and risk registers.",
  "service.1.t": "Annual Operational Plans",
  "service.1.d": "Translating strategy into clear operational roadmaps with timelines and prioritization matrices.",
  "service.2.t": "Executive Initiative Mapping",
  "service.2.d": "Linking initiatives to target outcomes through dependency matrices and phased delivery schedules.",
  "service.3.t": "Risk Management & Compliance",
  "service.3.d": "A comprehensive risk framework tracking top global risks as identified by the World Economic Forum.",
  "service.4.t": "Organizational Restructuring",
  "service.4.d": "Designing agile structures that enhance operational efficiency and accelerate decision-making at every level.",
  "service.5.t": "Strategic Human Resources",
  "service.5.d": "Building an HR ecosystem that connects competencies to objectives and enables sustained institutional excellence.",
  "service.6.t": "Organizational Excellence & Quality",
  "service.6.d": "Quality systems and excellence benchmarks that embed a culture of high performance and continuous improvement.",
  "service.7.t": "Project Management — PMO",
  "service.7.d": "Effective governance and oversight structures that turn strategy into tangible, accountable results.",
  "service.8.t": "Executive Leadership Coaching",
  "service.8.d": "Developing the capabilities of senior executives through individual and group sessions focused on decision-making and institutional impact.",
  "service.9.t": "Organizational Coaching",
  "service.9.d": "Building a culture of continuous learning within teams and activating competency-based professional development mechanisms.",
  "service.10.t": "Governance & Compliance",
  "service.10.d": "Designing comprehensive governance frameworks that ensure transparency, separation of powers, and adherence to best practices.",
  "service.11.t": "EFQM Excellence Certification",
  "service.11.d": "Preparing organizations for EFQM Excellence certification — including readiness assessment and a tailored institutional improvement roadmap.",

  // Approach
  "approach.label": "Our Approach",
  "approach.h2": "Precise Diagnosis.",
  "approach.h2_highlight": "Disciplined Execution.",
  "approach.body": "We deliver consulting outputs aligned with audit, governance, and regulatory standards — from policies and regulatory frameworks to executive performance dashboards.",
  "step.0.n": "01",
  "step.0.t": "Institutional Diagnosis",
  "step.0.d": "Assessing maturity levels, analyzing gaps, and measuring performance using quantitative and qualitative indicators.",
  "step.1.n": "02",
  "step.1.t": "Solution Design",
  "step.1.d": "Designing realistic, executable plans with documented scenarios and assumptions.",
  "step.2.n": "03",
  "step.2.t": "Execution & Monitoring",
  "step.2.d": "Establishing PMO and governance structures with performance dashboards that surface deviations early.",
  "step.3.n": "04",
  "step.3.t": "Lasting Impact",
  "step.3.d": "Embedding capabilities within the organization to ensure continuous improvement long after the engagement concludes.",

  // Advisors
  "advisors.label": "Our Advisors",
  "advisors.h2": "World-Class Expertise. Qatari Impact.",
  "advisors.body": "A network of international advisors and partners from the world's most prestigious academic and consulting institutions.",
  "advisors.partners": "In partnership with",

  // Countries
  "country.qa": "Qatar",
  "country.sa": "Saudi Arabia",
  "country.pk": "Pakistan",
  "country.pl": "Poland",
  "country.eg": "Egypt",
  "country.sy": "Syria",
  "country.jo": "Jordan",

  // Clients
  "clients.label": "Our Clients",
  "clients.h2": "Our Clients",
  "clients.sub": "Trusted by organizations across different sectors",

  // Contact
  "contact.label": "Get in Touch",
  "contact.h2": "Start Your Transformation.",
  "contact.h2_2": "Book a Discovery Call.",
  "contact.body": "Connect with the NSMO team for an exploratory session to identify your most critical gaps and a rapid intervention roadmap spanning 6 to 10 weeks.",
  "contact.loc": "Doha, Qatar",
  "contact.form.name": "Full Name",
  "contact.form.org": "Organization",
  "contact.form.email": "Email Address",
  "contact.form.msg": "Your Message",
  "contact.form.submit": "Send Request",
  "contact.form.success": "Thank you for reaching out. We'll respond within one business day.",

  // Footer
  "footer.tagline": "A Qatari institutional partner specializing in turning strategy into measurable results, aligned with Qatar National Vision 2030.",
  "footer.links": "Links",
  "footer.address": "Address",
  "footer.addr_text": "Doha, Qatar",
  "footer.copyright": `© ${YEAR} NSMO Management Consulting — All rights reserved`,
  "footer.crafted": "Crafted in Doha 🇶🇦",

  // Login
  "login.create": "Create your account",
  "login.welcome": "Welcome back",
  "login.sub_signup": "Join NSMO today",
  "login.sub_signin": "Continue where you left off",
  "login.google": "Continue with Google",
  "login.loading": "Please wait...",
  "login.or": "or",
  "login.email": "Email",
  "login.password": "Password",
  "login.signup": "Sign up",
  "login.signin": "Sign in",
  "login.have_account": "Already have an account?",
  "login.no_account": "Don't have an account?",
  "login.confirm_email": "Check your email to confirm your account",

  // App
  "app.morning": "Good morning",
  "app.afternoon": "Good afternoon",
  "app.evening": "Good evening",
  "app.daily_ritual": "Your daily ritual",
  "app.perfect_day": "Perfect day",
  "app.nothing_scheduled": "Nothing scheduled today",
  "app.all_done": "All done for today ✨",
  "app.progress": "{x} of {y} done",
  "app.fresh_start": "A fresh start",
  "app.add_first": "Tap the + button below to add your first habit",
  "app.not_scheduled": "Not scheduled today ({count})",
};

const translations: Record<Lang, typeof ar> = { ar, en };

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof ar, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "ar",
  setLang: () => {},
  t: (key) => ar[key] ?? key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("nsmo-lang") as Lang | null;
      if (stored === "en" || stored === "ar") {
        setLangState(stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("nsmo-lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: keyof typeof ar, vars?: Record<string, string | number>): string => {
    const text = translations[lang][key] ?? translations.ar[key] ?? (key as string);
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  return useContext(I18nContext);
}

import {
  BarChart3, Blocks, BookOpenCheck, Building2, Calculator, ChefHat, Factory,
  GraduationCap, HandCoins, Headphones, Landmark, LaptopMinimalCheck,
  MessagesSquare, PackageCheck, Settings2, ShoppingCart, Store, Wrench,
} from "lucide-react";

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://money-coder-website.vercel.app",
  githubUrl: "https://github.com/AhmedMohamed500/Money-Coder---WebSite",
  inquiryUrl: "https://github.com/AhmedMohamed500/Money-Coder---WebSite/issues/new?title=%D8%B7%D9%84%D8%A8%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20Money%20Coder",
  slogan: "WHERE MONEY MEETS CODE.",
  tagline: "SMART ACCOUNTING & AUTOMATION",
};

export const navigation = [
  { label: "الرئيسية", href: "#home" }, { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" }, { label: "الأسعار", href: "#pricing" },
  { label: "الموارد", href: "#process" }, { label: "من نحن", href: "#about" },
  { label: "تواصل معنا", href: "#contact" },
];

export const services = [
  { title: "الحلول المحاسبية", icon: Calculator, points: ["أنظمة محاسبية متكاملة", "إعداد التقارير المالية", "مراجعة وتحليل الحسابات"] },
  { title: "تصميم وتطوير الأنظمة", icon: LaptopMinimalCheck, points: ["أنظمة ERP وPOS", "تطوير حسب احتياجك", "مواقع وتطبيقات ويب"] },
  { title: "أتمتة الأعمال (n8n)", icon: Blocks, points: ["ربط التطبيقات والأنظمة", "أتمتة المهام المتكررة", "إشعارات وتقارير تلقائية"] },
  { title: "تحليل البيانات Power BI & Excel", icon: BarChart3, points: ["لوحات وتقارير تفاعلية", "تحليل أداء الأعمال", "مؤشرات وحلول متقدمة"] },
  { title: "الاستشارات والدعم", icon: Headphones, points: ["استشارات محاسبية وتقنية", "دعم مستمر", "تطوير سير العمل"] },
  { title: "التدريب والتعليم", icon: GraduationCap, points: ["دورات متخصصة", "محتوى عملي وتطبيقي", "منصة تعليمية تفاعلية"] },
];

export const products = [
  { title: "RestaurantFlow", subtitle: "نظام إدارة المطاعم والكافيهات", description: "واجهة تشغيل تجمع المبيعات والمخزون والتقارير في تجربة واضحة.", tags: ["مطاعم", "مبيعات", "مخزون"], href: "https://restaurant-or-cafe-cashier.vercel.app", verifiedDemo: true, tone: "orange", icon: ChefHat },
  { title: "Hawally | حوّلي", subtitle: "إدارة نقاط الخدمات والعمليات المالية", description: "تنظيم المحافظ والحسابات والتقارير اليومية في مكان واحد.", tags: ["خدمات", "محافظ", "تقارير"], href: "#contact", verifiedDemo: false, tone: "violet", icon: HandCoins },
  { title: "Industrial ERP", subtitle: "إدارة المشروعات والمقاولات الصناعية", description: "متابعة المواقع والمخازن والمشتريات والحسابات بترابط كامل.", tags: ["مقاولات", "مشروعات", "مخازن"], href: "https://industrial-contracting-project.vercel.app", verifiedDemo: true, tone: "blue", icon: Factory },
  { title: "Debit & Credit", subtitle: "منصة تعليم محاسبة تفاعلية", description: "تجربة مبسطة للتعلّم والتحديات والمستويات المحاسبية.", tags: ["تعليم", "محاسبة", "تحديات"], href: "#contact", verifiedDemo: false, tone: "green", icon: BookOpenCheck },
];

export const processSteps = [
  { title: "فهم احتياجاتك", text: "نراجع متطلباتك وطبيعة العمل الحالي لأعمالك.", icon: MessagesSquare },
  { title: "تصميم الحل", text: "نقترح الحل الأنسب ونضع خريطة التنفيذ.", icon: PackageCheck },
  { title: "التطوير والتنفيذ", text: "نبني النظام أو ننفذ الأتمتة وفقاً لأفضل الممارسات.", icon: Wrench },
  { title: "الاختبار والتدريب", text: "نختبر النظام وندرب فريقك لضمان سهولة الاستخدام.", icon: Settings2 },
  { title: "الدعم المستمر", text: "نتابع معك بصيانة وتطوير مستمر.", icon: Headphones },
];

export const industries = [
  { title: "المطاعم والكافيهات", icon: ChefHat, href: "#products" }, { title: "التجارة والتوزيع", icon: ShoppingCart, href: "#services" },
  { title: "الخدمات", icon: Store, href: "#services" }, { title: "المقاولات", icon: Building2, href: "#products" },
  { title: "التصنيع", icon: Factory, href: "#products" }, { title: "المحاسبة", icon: Calculator, href: "#services" },
  { title: "التعليم والتدريب", icon: GraduationCap, href: "#services" }, { title: "أنشطة أخرى", icon: Landmark, href: "#contact" },
];

export const plans = [
  { name: "Starter", audience: "لبداية منظمة", priceLabel: "حسب احتياجك", features: ["جلسة اكتشاف", "نطاق عمل واضح", "حل قابل للتوسع"], featured: false },
  { name: "Professional", audience: "للشركات النامية", priceLabel: "عرض سعر مخصص", features: ["تحليل متقدم", "تنفيذ وتكامل", "تدريب ودعم"], featured: true },
  { name: "Business", audience: "للاحتياجات الكبيرة", priceLabel: "تواصل معنا", features: ["حلول متعددة", "تخصيص شامل", "خطة تطوير مستمرة"], featured: false },
];

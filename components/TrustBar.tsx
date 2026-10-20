import { BriefcaseBusiness, Building2, CheckCircle2, Layers3, Sparkles } from "lucide-react";

export function TrustBar() {
  const sectors = [[Building2, "تجارة وتوزيع"], [BriefcaseBusiness, "خدمات"], [Layers3, "تصنيع"], [CheckCircle2, "تعليم"], [Sparkles, "تقنية"]] as const;
  return <section className="trust-strip" aria-label="مجالات العمل"><div className="container trust-inner">
    <div className="trust-statement"><strong>حلول مبنية لواقع عملك</strong><span>خبرات متنوعة، تنفيذ مخصص، ونتائج قابلة للقياس</span></div>
    <div className="sector-list">{sectors.map(([Icon, label]) => <span key={label}><Icon size={18} />{label}</span>)}</div>
    <div className="trust-facts"><div><strong>مرنة</strong><span>قابلة للتوسع</span></div><div><strong>مترابطة</strong><span>بين أنظمتك</span></div><div><strong>عملية</strong><span>لحل تحدياتك</span></div></div>
  </div></section>;
}

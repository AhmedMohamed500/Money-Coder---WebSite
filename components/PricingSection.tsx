import { ArrowLeft, Check } from "lucide-react";
import { plans, siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function PricingSection() {
  return <section id="pricing" className="section pricing-section section-wave"><div className="container pricing-container">
    <SectionHeading eyebrow="باقاتنا" title="خطط مرنة تناسب كل نشاط" description="نحدد نطاقاً وسعراً واضحين بعد فهم احتياجك؛ لا توجد أسعار منشورة غير معتمدة." />
    <div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
      {plan.featured && <span className="popular-badge">الأكثر طلباً</span>}<h3>{plan.name}</h3><p>{plan.audience}</p><strong>{plan.priceLabel}</strong><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><a className={`button ${plan.featured ? "button-primary" : "button-secondary"}`} href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">ابدأ الآن <ArrowLeft size={15} /></a>
    </article>)}</div>
  </div></section>;
}

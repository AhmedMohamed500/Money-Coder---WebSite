import { ArrowLeft, Check } from "lucide-react";
import { plans, siteConfig } from "@/data/site";

export function PricingSection() {
  return <section id="pricing" className="pricing-v2"><div className="container">
    <header className="pricing-v2-heading"><span>07 / ENGAGEMENT</span><h2>اختر نقطة البداية.<br /><em>واترك النظام يتوسع.</em></h2><p>لا أسعار وهمية؛ النطاق والسعر يتحددان بعد فهم التشغيل.</p></header>
    <div className="pricing-tracks">{plans.map((plan, index) => <article className={`pricing-track ${plan.featured ? "is-featured" : ""}`} key={plan.name}><span className="track-index">0{index + 1}</span><div className="track-name"><h3>{plan.name}</h3><small>{plan.audience}</small></div><strong>{plan.priceLabel}</strong><ul>{plan.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><a href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">ابدأ الآن <ArrowLeft /></a></article>)}</div>
  </div></section>;
}

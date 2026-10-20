import { ArrowLeft } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return <section id="services" className="section services-section"><div className="container">
    <SectionHeading eyebrow="خدماتنا" title="خدمات متكاملة تغطي كل احتياجات عملك" description="من المحاسبة والبرمجة إلى الأتمتة وتحليل البيانات، نقدم لك حلولاً متكاملة مصممة لواقع أعمالك." />
    <div className="services-grid">{services.map(({ title, icon: Icon, points }) => <article className="service-card" key={title}>
      <span className="icon-orb"><Icon /></span><h3>{title}</h3><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul><a href="#contact">اعرف أكثر <ArrowLeft size={15} /></a>
    </article>)}</div>
  </div></section>;
}

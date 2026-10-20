import { ArrowLeft } from "lucide-react";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  return <section id="process" className="section process-section"><div className="container">
    <SectionHeading eyebrow="كيف نعمل؟" title="من فكرتك إلى نظام يعمل فعلاً" description="خطوات واضحة وسهلة للوصول إلى الحل المناسب لعملك." />
    <div className="process-grid">{processSteps.map(({ title, text, icon: Icon }, index) => <article className="process-step" key={title}>
      <span className="step-number">0{index + 1}</span><span className="step-icon"><Icon /></span><h3>{title}</h3><p>{text}</p>{index < processSteps.length - 1 && <ArrowLeft className="step-arrow" />}
    </article>)}</div>
  </div></section>;
}

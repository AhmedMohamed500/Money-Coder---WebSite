import { Quote, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  const cards = [
    ["قصص نجاح موثقة", "سيتم نشر دراسة الحالة بعد اعتماد تفاصيل المشروع ونتائجه من العميل."],
    ["آراء عملاء حقيقية", "نحافظ على هذه المساحة للمراجعات الموثقة فقط، دون أسماء أو تقييمات مختلقة."],
    ["نتائج قابلة للقياس", "نعرض مؤشرات الأداء عندما تتوفر بيانات موثقة وموافقة صريحة على النشر."],
  ];
  return <section className="section testimonials-section"><div className="container">
    <SectionHeading eyebrow="آراء عملائنا" title="شركاء نجاح حقيقيون" description="المصداقية أولاً: لا ننشر أسماء أو مراجعات أو تقييمات قبل التحقق منها." />
    <div className="testimonials-grid">{cards.map(([title, text], index) => <article className="testimonial-card" key={title}><Quote className="quote-icon" /><p>{text}</p><div className="testimonial-meta"><span className={`avatar-placeholder avatar-${index + 1}`}><ShieldCheck /></span><div><strong>{title}</strong><small>محتوى بانتظار الاعتماد</small></div></div></article>)}</div>
  </div></section>;
}

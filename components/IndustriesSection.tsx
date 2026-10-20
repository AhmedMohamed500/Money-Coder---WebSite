import { ArrowLeft } from "lucide-react";
import { industries, siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function IndustriesSection() {
  return <section className="section industries-section section-wave"><div className="container"><div className="industries-layout">
    <div className="industries-main"><SectionHeading eyebrow="القطاعات التي نخدمها" title="حلول مخصصة لمختلف الأنشطة" description="نكيّف التقنية لتناسب طريقة عمل كل قطاع." />
      <div className="industries-grid">{industries.map(({ title, icon: Icon, href }) => <a key={title} href={href}><Icon /><span>{title}</span></a>)}</div>
    </div>
    <aside id="contact" className="consultation-card"><div className="consultation-content"><span className="mini-label">استشارة أولية</span><h2>مش متأكد من الحل المناسب؟</h2><p>ابدأ بطلب تواصل، وسنساعدك في اختيار الحل الأنسب لطبيعة أعمالك دون التزام.</p><a className="button button-primary" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">احجز استشارة مجانية <ArrowLeft size={16} /></a><small>يتم فتح طلب تواصل على مستودع المشروع؛ لا يتم تأكيد حجز تلقائياً.</small></div><div className="consultation-art"><i /><i /><i /></div></aside>
  </div></div></section>;
}

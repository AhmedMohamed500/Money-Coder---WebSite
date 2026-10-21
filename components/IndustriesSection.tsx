import { ArrowLeft } from "lucide-react";
import { industries, siteConfig } from "@/data/site";

export function IndustriesSection() {
  return <section className="industry-universe">
    <div className="container industry-layout">
      <div className="industry-copy"><span>05 / SECTORS</span><h2>لا نفرض النظام على نشاطك.<br /><em>نبنيه من داخله.</em></h2><p>نقرأ حركة العمل كما هي، ثم نعيد تركيبها كتدفق رقمي متماسك.</p></div>
      <div className="industry-orbits"><div className="industry-core"><strong>نشاطك</strong><small>هو نقطة البداية</small></div>{industries.map(({ title, icon: Icon, href }, index) => <a className={`industry-node industry-node-${index + 1}`} href={href} key={title}><Icon /><span>{title}</span></a>)}</div>
    </div>
    <div id="contact" className="contact-tunnel"><div className="container contact-tunnel-inner"><span>READY / WHEN YOU ARE</span><h2>قل لنا أين يتعطل العمل.<br />وسنريك أين يبدأ الحل.</h2><a href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">ابدأ جلسة اكتشاف <ArrowLeft /></a></div></div>
  </section>;
}

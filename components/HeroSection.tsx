import { ArrowLeft, ArrowUpLeft, Binary, CircleDollarSign, Cpu, Workflow } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const orbitNodes = [
  { label: "حسابات", className: "orbit-node node-a", icon: CircleDollarSign },
  { label: "أتمتة", className: "orbit-node node-b", icon: Workflow },
  { label: "برمجة", className: "orbit-node node-c", icon: Binary },
  { label: "بيانات", className: "orbit-node node-d", icon: Cpu },
];

export function HeroSection() {
  return <section id="home" className="hero-v2">
    <div className="hero-grid-noise" />
    <div className="container hero-v2-inner">
      <div className="hero-v2-copy">
        <div className="hero-kicker"><span>MC / 01</span> نظام تشغيل لأعمالك</div>
        <h1>نحوّل <em>الفوضى</em><br />إلى نظامٍ يعمل.</h1>
        <p>Money Coder تجمع المحاسبة والبرمجة والأتمتة في بنية واحدة؛ أوضح في القرار، أسرع في التشغيل، وأسهل في النمو.</p>
        <div className="hero-v2-actions">
          <a className="action-primary" href="#products">شاهد الأنظمة <ArrowLeft /></a>
          <a className="action-ghost" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">ابدأ من احتياجك <ArrowUpLeft /></a>
        </div>
        <div className="hero-proofline">
          <span><b>01</b> نفهم التشغيل</span><span><b>02</b> نبني المنطق</span><span><b>03</b> نسلّم النظام</span>
        </div>
      </div>
      <div className="money-orbit" aria-label="منظومة Money Coder المتكاملة">
        <div className="orbit-halo halo-one" /><div className="orbit-halo halo-two" /><div className="orbit-halo halo-three" />
        <div className="orbit-core"><span className="core-index">MC.OS</span><Image src="/money-coder-mark-transparent.png" alt="Money Coder" width={132} height={132} priority /><strong>كل عملياتك<br />في مدار واحد</strong></div>
        {orbitNodes.map(({ label, className, icon: Icon }) => <div className={className} key={label}><Icon /><span>{label}</span></div>)}
        <div className="orbit-readout readout-a"><small>تدفق العمل</small><strong>متصل</strong><i /></div>
        <div className="orbit-readout readout-b"><small>الرؤية التشغيلية</small><strong>لحظية</strong><i /></div>
      </div>
    </div>
    <div className="signal-strip"><div><span>ACCOUNTING SYSTEMS</span><i />ERP &amp; POS<i />N8N AUTOMATION<i />POWER BI<i />CUSTOM SOFTWARE<i />SMART OPERATIONS</div></div>
  </section>;
}

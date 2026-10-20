import { ArrowLeft, Clock3, Code2, LineChart, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

const benefits = [
  { label: "حلول محاسبية", icon: LineChart }, { label: "تطوير الأنظمة", icon: Code2 },
  { label: "أتمتة الأعمال", icon: Clock3 }, { label: "دعم واستشارات", icon: ShieldCheck },
];

export function HeroSection() {
  return <section id="home" className="hero-section section-wave">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">WHERE MONEY MEETS CODE</p>
        <h1>حلول <span className="text-blue">ذكية</span> للمحاسبة<br />والبرمجة <span className="text-gradient">والأتمتة</span></h1>
        <p className="hero-description">نساعد الشركات على إدارة أعمالها بكفاءة من خلال أنظمة محاسبية حديثة، وبرمجيات مخصصة، وأتمتة توفر الوقت وتحسن الأداء.</p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#services">استكشف خدماتنا <ArrowLeft size={17} /></a>
          <a className="button button-secondary" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">اطلب عرض سعر</a>
        </div>
        <div className="benefit-row">{benefits.map(({ label, icon: Icon }) => <span key={label}><Icon size={17} />{label}</span>)}</div>
      </div>
      <div className="hero-visual" aria-label="معاينة توضيحية للوحة تحكم أعمال">
        <div className="glow glow-one" /><div className="glow glow-two" />
        <div className="laptop-screen">
          <div className="dashboard-topbar"><i /><span /><span /></div>
          <div className="dashboard-layout">
            <aside className="dash-sidebar"><b>MC</b><i /><i /><i /><i /></aside>
            <div className="dash-content">
              <div className="dash-heading"><span>لوحة الأداء</span><small>نظرة عامة</small></div>
              <div className="metric-grid">
                <div><small>المبيعات</small><strong>125,430</strong><em>+12%</em></div>
                <div><small>المصروفات</small><strong>48,200</strong><em>+4%</em></div>
                <div><small>صافي الربح</small><strong>77,230</strong><em>+8%</em></div>
              </div>
              <div className="chart-grid">
                <div className="bar-chart" aria-hidden="true">{[44, 60, 35, 78, 55, 90, 72].map((n, i) => <i key={i} style={{ height: `${n}%` }} />)}</div>
                <div className="donut-chart"><span>68%</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
        <div className="floating-card revenue-card"><small>إجمالي المبيعات</small><strong>EGP 125,430</strong><span>⌁⌁⌁⌁⌁</span></div>
        <div className="floating-card time-card"><Clock3 size={22} /><small>توفير الوقت</small><strong>40%</strong></div>
      </div>
    </div>
  </section>;
}

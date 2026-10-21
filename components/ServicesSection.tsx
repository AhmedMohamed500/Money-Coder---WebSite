import { ArrowUpLeft } from "lucide-react";
import { services } from "@/data/site";

export function ServicesSection() {
  return <section id="services" className="capabilities-section"><div className="container capabilities-shell">
    <header className="editorial-heading"><span>02 / CAPABILITIES</span><div><h2>ست قدرات.<br /><em>نتيجة واحدة.</em></h2><p>نزيل الفواصل بين المال والتقنية والتشغيل، ونبني منظومة تتحرك كوحدة واحدة.</p></div></header>
    <div className="service-lanes">{services.map(({ title, icon: Icon, points }, index) => <article className="service-lane" key={title}>
      <span className="lane-number">0{index + 1}</span><div className="lane-icon"><Icon /></div><h3>{title}</h3><p>{points.join(" · ")}</p><a href="#contact" aria-label={`تفاصيل ${title}`}><ArrowUpLeft /></a>
    </article>)}</div>
  </div></section>;
}

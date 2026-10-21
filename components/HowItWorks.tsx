import { processSteps } from "@/data/site";

export function HowItWorks() {
  return <section id="process" className="process-v2"><div className="container">
    <header className="process-v2-heading"><span>04 / METHOD</span><h2>الفكرة لا تقفز إلى كود.<br /><em>تمر عبر نظام.</em></h2></header>
    <div className="process-rail">{processSteps.map(({ title, text, icon: Icon }, index) => <article className="process-station" key={title}><span className="station-node"><Icon /></span><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

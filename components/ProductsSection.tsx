"use client";

import { useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpLeft, ExternalLink, Gauge, TrendingUp,
} from "lucide-react";
import { products } from "@/data/site";

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex];
  const Icon = active.icon;
  const move = (step: number) => setActiveIndex((current) => (current + step + products.length) % products.length);

  return <section id="products" className={`product-stage tone-${active.tone}`}>
    <div className="container">
      <header className="product-stage-heading">
        <span>03 / PROJECT OBSERVATORY</span>
        <div>
          <h2>كل مشروع له مدار.<br /><em>وأنت تدخل إليه.</em></h2>
          <p>لا نعرض لقطة شاشة جامدة؛ اختر المشروع وشاهد منطق تشغيله، نطاقه، وما الذي صُمّم ليغيّره.</p>
        </div>
      </header>

      <div className="product-theatre">
        <div className="project-signal" aria-hidden="true">
          <span>ACTIVE SYSTEM</span>
          <i><b style={{ width: `${((activeIndex + 1) / products.length) * 100}%` }} /></i>
          <strong>0{activeIndex + 1} / 0{products.length}</strong>
        </div>

        <div className="product-switcher" role="tablist" aria-label="اختر المشروع">
          {products.map((product, index) => {
            const ProjectIcon = product.icon;
            return <button
              role="tab"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              key={product.title}
            >
              <span>0{index + 1}</span>
              <ProjectIcon />
              <strong>{product.title}</strong>
              <small>{product.tags[0]}</small>
            </button>;
          })}
        </div>

        <article className="product-focus" role="tabpanel" aria-live="polite" key={active.title}>
          <span className="project-watermark" aria-hidden="true">0{activeIndex + 1}</span>
          <div className="focus-copy">
            <div className="focus-icon"><Icon /></div>
            <span className="focus-code">SYSTEM DOSSIER / 0{activeIndex + 1}</span>
            <h3>{active.title}</h3>
            <h4>{active.subtitle}</h4>
            <p>{active.description}</p>
            <div className="focus-tags">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="focus-actions">
              <a className="action-primary" href={active.href} target={active.verifiedDemo ? "_blank" : undefined} rel={active.verifiedDemo ? "noreferrer" : undefined}>
                {active.verifiedDemo ? <>افتح النظام <ExternalLink /></> : <>اطلب التفاصيل <ArrowUpLeft /></>}
              </a>
              <a className="text-link" href="#contact">ناقش تطبيقه <ArrowLeft /></a>
            </div>
          </div>

          <div className="project-lens" aria-label={`تصور تشغيلي توضيحي لنظام ${active.title}`}>
            <div className="lens-ring ring-one" /><div className="lens-ring ring-two" />
            <span className="lens-label label-a">{active.tags[0]} / 01</span>
            <span className="lens-label label-b">{active.tags[1]} / 02</span>
            <span className="lens-label label-c">{active.tags[2]} / 03</span>
            <div className="system-canvas">
              <div className="canvas-chrome"><i /><i /><i /><span>{active.title}</span></div>
              <div className="canvas-grid">
                <aside><b>MC</b>{[1, 2, 3, 4, 5].map(item => <i key={item} />)}</aside>
                <main>
                  <div className="canvas-top"><span>نظرة تشغيلية</span><small>LIVE / 24H</small></div>
                  <div className="canvas-metrics"><div><small>العمليات</small><strong>128</strong></div><div><small>الكفاءة</small><strong>94%</strong></div><div><small>الحالة</small><strong>مستقر</strong></div></div>
                  <div className="canvas-visual"><div className="wave-chart"><TrendingUp /></div><div className="radar"><Gauge /><span>84</span></div></div>
                </main>
              </div>
              <div className="canvas-scan" />
            </div>
            <div className="lens-orb orb-a"><span>SYNC</span><b>100%</b></div>
            <div className="lens-orb orb-b"><span>FLOW</span><b>LIVE</b></div>
          </div>
        </article>

        <div className="project-controls">
          <button onClick={() => move(-1)} aria-label="المشروع السابق"><ArrowRight /></button>
          <span>تنقّل بين أنظمة صُممت من منطق العمل، لا من قالب جاهز.</span>
          <button onClick={() => move(1)} aria-label="المشروع التالي"><ArrowLeft /></button>
        </div>
      </div>
    </div>
  </section>;
}

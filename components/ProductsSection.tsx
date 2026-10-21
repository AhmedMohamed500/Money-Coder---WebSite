"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpLeft, ExternalLink, Gauge, TrendingUp } from "lucide-react";
import { products } from "@/data/site";

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex];
  const Icon = active.icon;
  return <section id="products" className={`product-stage tone-${active.tone}`}><div className="container">
    <header className="product-stage-heading"><span>03 / PRODUCTS</span><h2>منتج واحد في الواجهة.<br /><em>منظومة كاملة خلفه.</em></h2></header>
    <div className="product-theatre">
      <div className="product-switcher" role="tablist" aria-label="اختر المنتج">{products.map((product, index) => <button role="tab" aria-selected={activeIndex === index} className={activeIndex === index ? "is-active" : ""} onClick={() => setActiveIndex(index)} key={product.title}><span>0{index + 1}</span><strong>{product.title}</strong><ArrowLeft /></button>)}</div>
      <article className="product-focus" role="tabpanel">
        <div className="focus-copy"><div className="focus-icon"><Icon /></div><span className="focus-code">SYSTEM / 0{activeIndex + 1}</span><h3>{active.title}</h3><h4>{active.subtitle}</h4><p>{active.description}</p><div className="focus-tags">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="focus-actions"><a className="action-primary" href={active.href} target={active.verifiedDemo ? "_blank" : undefined} rel={active.verifiedDemo ? "noreferrer" : undefined}>{active.verifiedDemo ? <>افتح النظام <ExternalLink /></> : <>اطلب التفاصيل <ArrowUpLeft /></>}</a><a className="text-link" href="#contact">ناقش تطبيقه <ArrowLeft /></a></div></div>
        <div className="system-canvas" aria-label={`معاينة توضيحية لنظام ${active.title}`}><div className="canvas-chrome"><i /><i /><i /><span>{active.title}</span></div><div className="canvas-grid"><aside><b>MC</b>{[1,2,3,4,5].map(item => <i key={item} />)}</aside><main><div className="canvas-top"><span>نظرة تشغيلية</span><small>LIVE / 24H</small></div><div className="canvas-metrics"><div><small>العمليات</small><strong>128</strong></div><div><small>الكفاءة</small><strong>94%</strong></div><div><small>الحالة</small><strong>مستقر</strong></div></div><div className="canvas-visual"><div className="wave-chart"><TrendingUp /></div><div className="radar"><Gauge /><span>84</span></div></div></main></div><div className="canvas-scan" /></div>
      </article>
    </div>
  </div></section>;
}

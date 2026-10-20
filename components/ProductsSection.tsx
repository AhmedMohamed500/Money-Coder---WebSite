import { ArrowLeft, ExternalLink, Gauge, TrendingUp } from "lucide-react";
import { products } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

function ProductMockup({ tone, title }: { tone: string; title: string }) {
  return <div className={`product-mockup tone-${tone}`} aria-label={`معاينة توضيحية لواجهة ${title}`}>
    <div className="mock-sidebar"><i /><i /><i /><i /></div>
    <div className="mock-main"><div className="mock-top"><b>{title}</b><span /></div><div className="mock-metrics"><i /><i /><i /></div><div className="mock-body"><div className="mock-chart"><TrendingUp /></div><div className="mock-gauge"><Gauge /></div></div></div>
    <span className="illustrative-label">معاينة توضيحية</span>
  </div>;
}

export function ProductsSection() {
  return <section id="products" className="section products-section section-wave"><div className="container">
    <SectionHeading eyebrow="منتجاتنا" title="أنظمة جاهزة لتشغيل أعمالك بسرعة" description="برامج متخصصة لقطاعات مختلفة، مصممة بعناية لتوفر تجربة سهلة وقيمة حقيقية." />
    <div className="products-grid">{products.map((product) => {
      const Icon = product.icon;
      return <article className="product-card" key={product.title}>
        <ProductMockup tone={product.tone} title={product.title} />
        <div className="product-card-body"><div className={`product-icon tone-${product.tone}`}><Icon /></div><h3>{product.title}</h3><h4>{product.subtitle}</h4><p>{product.description}</p>
          <div className="tag-row">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="product-actions"><a className="button button-secondary" href="#contact">اعرف أكثر <ArrowLeft size={15} /></a><a className="button button-primary" href={product.href} target={product.verifiedDemo ? "_blank" : undefined} rel={product.verifiedDemo ? "noreferrer" : undefined}>{product.verifiedDemo ? <>جرب الآن <ExternalLink size={15} /></> : "اطلب التفاصيل"}</a></div>
        </div>
      </article>;
    })}</div>
  </div></section>;
}

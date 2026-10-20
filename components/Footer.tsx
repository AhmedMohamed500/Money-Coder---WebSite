import { ArrowLeft, Github, MailQuestion } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { navigation, products, services, siteConfig } from "@/data/site";

export function Footer() {
  return <footer id="about" className="site-footer">
    <div className="footer-cta"><div className="container"><div><BrandLogo /><div><h2>جاهز لتطوير أعمالك؟</h2><p>تواصل معنا الآن وابدأ بطلب استشارة مبدئية.</p></div></div><a className="button button-primary" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">ابدأ طلب التواصل <ArrowLeft size={16} /></a></div></div>
    <div className="container footer-grid">
      <div className="footer-brand"><BrandLogo /><p>Money Coder شركة حلول تقنية ومحاسبية تساعد الأعمال على تنظيم عملياتها وبناء أنظمة أكثر وضوحاً وكفاءة.</p><span>{siteConfig.slogan}</span></div>
      <div><h3>روابط سريعة</h3>{navigation.slice(0, 5).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
      <div><h3>خدماتنا</h3>{services.slice(0, 4).map((item) => <a href="#services" key={item.title}>{item.title}</a>)}</div>
      <div><h3>منتجاتنا</h3>{products.map((item) => <a href="#products" key={item.title}>{item.title}</a>)}</div>
      <div><h3>تواصل موثّق</h3><a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><Github />GitHub</a><a href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer"><MailQuestion />طلب تواصل</a><small>يُضاف البريد والهاتف بعد اعتمادهما رسمياً.</small></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Money Coder. جميع الحقوق محفوظة.</span><span>SMART ACCOUNTING & AUTOMATION</span></div>
  </footer>;
}

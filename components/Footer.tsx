import { ArrowUpLeft, Github } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { navigation, siteConfig } from "@/data/site";

export function Footer() {
  return <footer id="about" className="footer-v2"><div className="container footer-v2-grid">
    <div className="footer-v2-brand"><BrandLogo /><h2>WHERE MONEY<br />MEETS CODE.</h2><p>نصمم أنظمة تجعل الأعمال أوضح، أسرع، وقابلة للنمو.</p></div>
    <nav>{navigation.slice(0,6).map(item => <a href={item.href} key={item.href}>{item.label}<ArrowUpLeft /></a>)}</nav>
    <div className="footer-v2-contact"><span>ابدأ المحادثة</span><a className="footer-big-link" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">طلب تواصل <ArrowUpLeft /></a><a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub</a></div>
  </div><div className="container footer-v2-bottom"><span>© {new Date().getFullYear()} Money Coder</span><span>SMART ACCOUNTING &amp; AUTOMATION</span></div></footer>;
}

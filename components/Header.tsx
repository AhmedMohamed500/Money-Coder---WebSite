"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="logo-link" href="#home" aria-label="Money Coder — الرئيسية"><BrandLogo priority /></a>
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">
        {navigation.map((item, index) => <a className={index === 0 ? "active" : ""} href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button search-button" aria-label="البحث في الموقع"><Search size={18} /></button>
        <span className="language-pill" aria-label="اللغة الحالية العربية">AR</span>
        <a className="button button-primary header-cta" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">احجز استشارة مجانية</a>
        <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="فتح القائمة">{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="التنقل على الهاتف">
      {navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a className="button button-primary" href={siteConfig.inquiryUrl} target="_blank" rel="noreferrer">احجز استشارة مجانية</a>
    </nav>
  </header>;
}

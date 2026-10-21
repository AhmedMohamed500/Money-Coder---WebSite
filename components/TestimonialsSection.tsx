import { ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return <section className="proof-section"><div className="container proof-layout">
    <div className="proof-manifesto"><span>06 / PROOF</span><div className="giant-quote">“</div><h2>الثقة لا تُكتب.<br /><em>تُثبت في التشغيل.</em></h2><p>لن نملأ هذه المساحة بأسماء أو أرقام غير موثقة. تُنشر قصص النجاح فقط بعد اعتماد العميل وقياس النتيجة.</p></div>
    <div className="proof-principles">{[["01","نتيجة قابلة للقياس"],["02","مراجعة موثقة"],["03","نشر بموافقة صريحة"]].map(([number,label]) => <div key={number}><span>{number}</span><strong>{label}</strong><ShieldCheck /></div>)}</div>
  </div></section>;
}

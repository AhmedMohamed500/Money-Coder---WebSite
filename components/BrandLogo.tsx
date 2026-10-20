import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return <span className="brand-lockup" aria-label="Money Coder">
    <span className="brand-mark-frame"><Image src="/money-coder-mark.png" alt="" width={64} height={64} priority={priority} /></span>
    <span className="brand-word-frame"><Image src="/money-coder-wordmark.png" alt="Money Coder — Smart Accounting & Automation" width={210} height={70} priority={priority} /></span>
  </span>;
}

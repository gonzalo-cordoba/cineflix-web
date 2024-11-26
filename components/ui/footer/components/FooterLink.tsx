import Link from "next/link";
import { FC } from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="hover:text-[#9667E0] transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

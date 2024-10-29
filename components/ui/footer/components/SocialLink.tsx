import { FC } from "react";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export const SocialLink: FC<SocialLinkProps> = ({
  href,
  ariaLabel,
  children,
}) => (
  <a
    href={href}
    className="text-[#9667E0] hover:text-[#8257D0] transition-colors duration-200"
    aria-label={ariaLabel}
  >
    {children}
    <span className="sr-only">{ariaLabel}</span>
  </a>
);

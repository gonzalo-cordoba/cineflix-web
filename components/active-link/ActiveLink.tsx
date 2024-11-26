"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  className?: string;
}

export const ActiveLink = ({ path, text, className = "" }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      className={`${className} ${
        isActive ? "text-white font-bold" : "text-purple-200"
      } hover:text-white transition-colors duration-200`}
      href={path}
    >
      {text}
    </Link>
  );
};

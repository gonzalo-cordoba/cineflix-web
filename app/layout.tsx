import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cineflix",
  description: "Las mejores peliculas para vos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

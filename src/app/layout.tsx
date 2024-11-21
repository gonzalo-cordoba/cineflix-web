import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import { AuthProvider } from "./auth";
import { Toaster } from "react-hot-toast";

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
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-center" />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

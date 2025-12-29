import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AceternityNavbar from "@/components/AceternityNavbar";
import Footer from "@/components/Footer";
import { ReactLenis as Lenis } from "@/utils/lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saketh Kollipara",
  description: "Personal website of Kollipara Sai Govinda Saketh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Lenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased font-inter`}
          suppressHydrationWarning={true}
        >
          <AceternityNavbar />
          {children}
          <Footer />
        </body>
      </Lenis>
    </html>
  );
}

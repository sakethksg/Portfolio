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
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased font-inter min-h-screen flex flex-col`}
          suppressHydrationWarning={true}
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 5% 40%, rgba(139, 92, 246, 0.15), transparent 67%),
              radial-gradient(ellipse 70% 60% at 45% 45%, rgba(236, 72, 153, 0.12), transparent 67%),
              radial-gradient(ellipse 62% 52% at 83% 76%, rgba(251, 191, 36, 0.10), transparent 63%),
              radial-gradient(ellipse 60% 48% at 75% 20%, rgba(96, 165, 250, 0.11), transparent 66%),
              linear-gradient(45deg, #0a0a0f 0%, #18181b 100%)
            `,
          }}
        >
          <AceternityNavbar />
          {children}
          <Footer />
        </body>
      </Lenis>
    </html>
  );
}

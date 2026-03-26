import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { UIProvider } from "@/lib/context/UIContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen transition-colors duration-500`}>
        <UIProvider>
          <CustomCursor />
          <HeroBackground />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}

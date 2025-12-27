import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paula Sanchez - Frontend Architect & Technical Leader",
  description: "Frontend developer specializing in building scalable, maintainable solutions for enterprise applications. Expert in React, Angular, TypeScript, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Angular", "TypeScript", "Web Development", "UI/UX", "Technical Leadership"],
  authors: [{ name: "Paula Sanchez" }],
  openGraph: {
    title: "Paula Sanchez - Frontend Architect & Technical Leader",
    description: "Building scalable, maintainable solutions for enterprise applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}



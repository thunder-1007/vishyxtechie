import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://vishyxtechie.in"),
  title: {
    default: "Vishyx Techie | Websites, Software & Apps",
    template: "%s | Vishyx Techie",
  },
  description:
    "Vishyx Techie builds and maintains websites, e-commerce, SaaS, custom software, and mobile apps — one team instead of five vendors.",
  keywords: "software development, web development, mobile apps, custom software, digital solutions, Vishyx Techie, e-commerce, SaaS development",
  authors: [{ name: "Vishyx Techie" }],
  creator: "Vishyx Techie",
  publisher: "Vishyx Techie",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vishyx Techie — Software, websites, and apps for your business",
    description: "Vishyx Techie designs, builds, and maintains digital systems — from websites to custom software and mobile apps.",
    url: "https://vishyxtechie.in",
    siteName: "Vishyx Techie",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vishyx Techie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishyx Techie — Software, websites, and apps for your business",
    description: "Vishyx Techie designs, builds, and maintains digital systems — from websites to custom software and mobile apps.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <CustomCursor />
        <Header />
        <PageTransition>
          <main className="w-full">{children}</main>
        </PageTransition>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

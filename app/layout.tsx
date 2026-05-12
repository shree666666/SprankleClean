import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const SITE_URL = process.env.SITE_URL ?? "https://sparkleclean.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SparkleClean — Premium cleaning services in Sydney",
    template: "%s | SparkleClean",
  },
  description:
    "SparkleClean delivers premium residential and commercial cleaning across Sydney, backed by trained pros and eco-friendly products. Book online in 60 seconds.",
  keywords: [
    "cleaning Sydney",
    "house cleaning",
    "office cleaning",
    "end of lease cleaning",
    "bond cleaning Sydney",
    "eco-friendly cleaning",
  ],
  authors: [{ name: "SparkleClean" }],
  creator: "SparkleClean",
  publisher: "SparkleClean",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "SparkleClean",
    title: "SparkleClean — Premium cleaning services in Sydney",
    description:
      "Trained pros, eco-friendly products, and a 100% satisfaction guarantee. Book online in 60 seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SparkleClean — premium cleaning services in Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkleClean — Premium cleaning services in Sydney",
    description:
      "Trained pros, eco-friendly products, and a 100% satisfaction guarantee.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A2E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-foreground">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

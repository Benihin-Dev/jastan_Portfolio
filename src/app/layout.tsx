import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jastanric.com"), // your actual domain
  title: {
    default: "Jastan Ric - Wildlife Enthusiast",
    template: "%s | Jastan Ric",
  },
  description:
    "Explore the portfolio of Jastan Ric — wildlife enthusiast, naturalist, and environmental researcher dedicated to conservation and sustainable ecosystems.",
  keywords: [
    "Jastan Ric",
    "Jastan",
    "Jastanric",
    "JastanRic",
    "wildlife enthusiast",
    "naturalist",
    "environmental researcher",
    "conservation",
    "sustainable ecosystems",
  ],
  authors: [{ name: "Jastan Ric" }],
  creator: "Jastan Ric",
  openGraph: {
    title: "Jastan Ric - Wildlife Enthusiast",
    description:
      "Explore the portfolio of Jastan Ric — wildlife enthusiast, naturalist, and environmental researcher dedicated to conservation and sustainable ecosystems.",
    url: "https://jastanric.com",
    siteName: "Jastan Ric",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jastan Ric - Wildlife Enthusiast",
    description:
      "Explore the portfolio of Jastan Ric — wildlife enthusiast, naturalist, and environmental researcher dedicated to conservation and sustainable ecosystems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "g0sTZgJwNfH18GzQVQfZUHko4I0qhnwo9_O4poDVfiI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="overflow-x-hidden">
          {children}
          <Analytics debug={true} />;
          <Footer />
        </div>
      </body>
    </html>
  );
}

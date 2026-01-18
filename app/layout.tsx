import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deadwesttattoo.com"),
  title: {
    default: "Dead West Studios | Custom Tattoo Studio in Tucson, AZ",
    template: `%s | Dead West Studios`,
  },
  description: "Award-winning custom tattoo studio in Tucson, Arizona. Specializing in black & grey realism, color tattoos, and pet portraits. 15+ years experience. Book your consultation today.",
  keywords: [
    "tattoo studio Tucson",
    "custom tattoos Tucson AZ",
    "tattoo artist Tucson",
    "realism tattoos",
    "black and grey tattoos",
    "color tattoos",
    "pet portrait tattoos",
    "Dead West Studios",
    "professional tattoo artist Arizona",
    "Tucson tattoo shop"
  ],
  authors: [{ name: "Dead West Studios" }],
  creator: "Dead West Studios",
  publisher: "Dead West Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deadwesttattoo.com",
    title: "Dead West Studios - Custom Tattoo Studio in Tucson, AZ",
    description: "Award-winning custom tattoo artistry in Tucson. Specializing in realism, black & grey, and custom designs. Book your consultation today.",
    siteName: "Dead West Studios",
    images: [
      {
        url: "/images/logo-skull.jpeg",
        width: 600,
        height: 600,
        alt: "Dead West Studios Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dead West Studios - Custom Tattoo Studio in Tucson, AZ",
    description: "Award-winning custom tattoo artistry in Tucson. Specializing in realism, black & grey, and custom designs.",
    images: ["/images/logo-skull.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these after setting up in Google Search Console
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://deadwesttattoo.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
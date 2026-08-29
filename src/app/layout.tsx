import type { Metadata } from "next";
import { Anton, Sora } from "next/font/google";

import { AppProvider } from "@/components/providers/app-provider";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const title = "Holy Pav | If it goes with pav, we are making it";
const description =
  "A pav kitchen in Koramangala, Bengaluru. Vada pav, misal, pav bhaji and sides, fried after you order. Sinfully good.";

export const metadata: Metadata = {
  metadataBase: new URL("https://holypav.in"),
  title: {
    default: title,
    template: "%s | Holy Pav",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Holy Pav",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Holy Pav",
  image: "https://holypav.in/holy-pav-hero.svg",
  servesCuisine: ["Indian Street Food", "Mumbai Street Food"],
  areaServed: "Bengaluru",
  url: "https://holypav.in",
  telephone: "+91-90194-94768",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, Krishna Nagar, 13, Hosur Main Road, near Christ University",
    addressLocality: "Koramangala Industrial Layout, Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560029",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9358413,
    longitude: 77.6078696,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${anton.variable}`}>
      <body className="antialiased">
        <AppProvider>
          <SiteShell>{children}</SiteShell>
        </AppProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}

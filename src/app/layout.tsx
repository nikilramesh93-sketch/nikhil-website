import type { Metadata } from "next";

import { AppProvider } from "@/components/providers/app-provider";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const title = "Holy Pav | Bengaluru Pav Kitchen";
const description =
  "Holy Pav serves premium Mumbai-style pav in Bengaluru with menu browsing, cart, wishlist, and checkout experience.";

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
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12, 100 Feet Road",
    addressLocality: "Indiranagar",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

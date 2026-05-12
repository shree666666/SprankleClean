import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "SparkleClean — Premium cleaning services in Sydney",
  description:
    "Trained pros, eco-friendly products, and a 100% satisfaction guarantee. Book your Sydney cleaning online in 60 seconds.",
  openGraph: {
    title: "SparkleClean — Premium cleaning services in Sydney",
    description:
      "Trained pros, eco-friendly products, and a 100% satisfaction guarantee.",
    type: "website",
  },
};

const SITE_URL = process.env.SITE_URL ?? "https://sparkleclean.example";

// JSON-LD: LocalBusiness schema for the homepage.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "CleaningService"],
  "@id": `${SITE_URL}/#business`,
  name: "SparkleClean",
  alternateName: "SparkleClean Pty Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Premium residential and commercial cleaning across Sydney. Trained pros, eco-friendly products, satisfaction guaranteed.",
  telephone: "+61-2-5550-0123",
  email: "hello@sparkleclean.example",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baulkham Hills",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2153",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.7569,
    longitude: 150.9928,
  },
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "AdministrativeArea", name: "New South Wales" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://facebook.com/sparkleclean",
    "https://instagram.com/sparkleclean",
    "https://twitter.com/sparkleclean",
    "https://linkedin.com/company/sparkleclean",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "512",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness JSON-LD for search engines */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <Hero />

      <FadeIn>
        <TrustBar />
      </FadeIn>
      <FadeIn>
        <ServicesOverview />
      </FadeIn>
      <FadeIn>
        <HowItWorks />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <CtaBanner />
      </FadeIn>
    </>
  );
}

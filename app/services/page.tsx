import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Tattoo Services in Tucson, AZ | Dead West Studios",
  description: "Professional tattoo services in Tucson including custom tattoos, cover-ups, reworks, and touch-ups. Expert artists with 15+ years experience.",
  keywords: [
    "tattoo services Tucson",
    "custom tattoos Tucson",
    "tattoo cover-ups",
    "tattoo touch-ups",
    "professional tattoo artist",
    "Tucson tattoo services"
  ],
  openGraph: {
    title: "Tattoo Services | Dead West Studios Tucson",
    description: "Custom tattoos, cover-ups, and touch-ups by professional artists in Tucson, AZ.",
    url: "https://deadwesttattoo.com/services",
    type: "website",
  },
};

const tattooServices = [
  {
    id: 1,
    title: "Custom Tattoos",
    description: "Original artwork designed in collaboration with you. From concept to completion, we work closely to create a piece that reflects your vision and style.",
    features: [
      "One-on-one consultation",
      "Custom design development",
      "Professional execution",
    ],
  },
  {
    id: 2,
    title: "Cover-Ups & Reworks",
    description: "Transform existing tattoos into fresh new pieces. Our artists specialize in creative solutions for outdated or unwanted ink.",
    features: [
      "Creative redesign options",
      "Expert color and placement strategy",
    ],
  },
  {
    id: 3,
    title: "Touch-Ups & Repairs",
    description: "Refresh and restore your existing tattoos. Whether aging or faded, we can bring your ink back to life.",
    features: [
      "Color restoration",
      "Line refinement",
      "Detail enhancement",
      "Complimentary for recent work (conditions apply)",
    ],
  },
];

export default function ServicesPage() {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tattoo Services",
    "provider": {
      "@type": "TattooParlor",
      "name": "Dead West Studios",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2470 W Ruthrauff Rd Suite 100",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "postalCode": "85705",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Tucson"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tattoo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Tattoos",
            "description": "Original artwork designed in collaboration with you"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cover-Ups & Reworks",
            "description": "Transform existing tattoos into fresh new pieces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Touch-Ups & Repairs",
            "description": "Refresh and restore your existing tattoos"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader 
        title="Tattoo Services"
        description="Professional custom tattoo services in Tucson, Arizona"
      />

      {/* Tattoo Services Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tattooServices.map((service) => (
            <Card key={service.id} hover className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-olive-500 mr-2 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-xl font-bold mb-3">Pricing Information</h3>
          <p className="text-neutral-300 mb-4">
            Pricing varies based on many factors, possibly including size, complexity, placement, and artist. During your consultation, we will provide a detailed quote tailored to your specific project.
          </p>
          <p className="text-neutral-400 text-sm">
            All tattoo services require a deposit to secure your appointment. See our policies page for complete details.
          </p>
        </div>
      </Section>

      <CTABand 
        title="Ready to Get Started?"
        description="Contact us to discuss your project and schedule a consultation."
      />
    </>
  );
}
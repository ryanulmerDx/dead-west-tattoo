import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Card } from "@/components/Card";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Tattoo Studio in Tucson, AZ | Dead West Studios",
  description: "Award-winning custom tattoo studio in Tucson, AZ. Specializing in black & grey, color realism, and pet portraits. 15+ years experience. Book your consultation today.",
  keywords: [
    "tattoo studio Tucson",
    "custom tattoos Tucson AZ",
    "tattoo artist Tucson",
    "realism tattoos Tucson",
    "black and grey tattoos",
    "color tattoos Tucson",
    "pet portrait tattoos",
    "professional tattoo artist",
    "Dead West Studios",
    "Jamie Lee tattoo artist"
  ],
  openGraph: {
    title: "Dead West Studios - Custom Tattoo Studio in Tucson, AZ",
    description: "Award-winning custom tattoo artistry in Tucson. Specializing in realism, black & grey, and custom designs. Book your consultation today.",
    url: "https://deadwesttattoo.com",
    siteName: "Dead West Studios",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  // JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Dead West Studios",
    "image": "https://deadwesttattoo.com/images/logo-skull.jpeg",
    "description": "Custom tattoo studio in Tucson, AZ specializing in black & grey, color realism, and pet portraits",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2470 W Ruthrauff Rd Suite 100",
      "addressLocality": "Tucson",
      "addressRegion": "AZ",
      "postalCode": "85705",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.3199,
      "longitude": -111.0271
    },
    "url": "https://deadwesttattoo.com",
    "telephone": "",
    "email": "thedeadwestco@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Announcement Strip */}
      <div className="bg-olive-700 text-white py-3 border-b border-olive-800">
        <Container>
          <p className="text-center text-sm md:text-base font-medium">
            Booking by appointment only— please email us to schedule your consultation.
          </p>
        </Container>
      </div>

      {/* Hero Section with Skull Logo */}
      <Section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          {/* Skull Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-skull.jpeg"
              alt="Dead West Studios Tucson Tattoo Shop Logo"
              width={600}
              height={600}
              className="w-96 h-96 md:w-[30rem] md:h-[30rem] lg:w-[36rem] lg:h-[36rem]"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Custom Tattoo Artistry in Tucson, AZ
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Where craftsmanship meets creativity. Bringing your vision to life with precision and care.
          </p>
          <div className="flex justify-center">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-neutral-950 border-y border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose Dead West Studios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4 olive-glow">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Award-Winning Artists</h3>
            <p className="text-neutral-400">
              Skilled professionals with over 15 years of experience in custom tattoo artistry.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4 olive-glow">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
            <p className="text-neutral-400">
              Unique artwork tailored to your vision. Specializing in realism, black & grey, and color tattoos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4 olive-glow">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Safe & Clean Studio</h3>
            <p className="text-neutral-400">
              Strict health and safety protocols ensuring a sterile environment for every client.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
            Explore Dead West Studios
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/artists" variant="outline" size="lg">
              Meet Our Artists
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABand 
        title="Ready to Start Your Tattoo Journey?"
        description="Get in touch to discuss your ideas and schedule a consultation with one of our award-winning artists."
      />
    </>
  );
}
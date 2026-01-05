import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Card } from "@/components/Card";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  // Featured portfolio images for homepage
  const featuredWork = [
    "/images/portfolio/IMG_0984.jpg",
    "/images/portfolio/IMG_3351.jpg",
    "/images/portfolio/IMG_6942.jpg",
    "/images/portfolio/IMG_0252.jpg",
  ];

  return (
    <>
      {/* Announcement Strip */}
      <div className="bg-olive-700 text-white py-3 border-b border-olive-800">
        <Container>
          <p className="text-center text-sm md:text-base font-medium">
            {siteConfig.announcement}
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
              alt="Dead West Studios"
              width={400}
              height={400}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Custom Tattoo Artistry
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Where craftsmanship meets creativity. Bringing your vision to life with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured Work Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore our portfolio of custom designs and client transformations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {featuredWork.map((image, i) => (
            <Card key={i} hover className="aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Featured tattoo work ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/portfolio" variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-neutral-950 border-y border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Dead West Tattoo
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
            <h3 className="text-xl font-bold mb-2">Expert Artists</h3>
            <p className="text-neutral-400">
              Skilled professionals with years of experience in diverse tattoo styles.
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
              Collaborative process to create unique artwork tailored to your vision.
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
            <h3 className="text-xl font-bold mb-2">Safe & Clean</h3>
            <p className="text-neutral-400">
              Strict health and safety protocols ensuring a sterile environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Comprehensive Tattoo Services
            </h2>
            <p className="text-lg text-neutral-400 mb-6">
              From intricate custom pieces to cover-ups and touch-ups, our studio offers a full range of professional tattoo services.
            </p>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800">
            <Image
              src="/images/portfolio/IMG_9365.jpg"
              alt="Tattoo services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABand 
        title="Ready to Start Your Tattoo Journey?"
        description="Get in touch to discuss your ideas and schedule a consultation with one of our artists."
      />
    </>
  );
}
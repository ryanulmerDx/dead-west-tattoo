import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional tattoo services, lash extensions, and hair styling.",
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

const beautyServices = [
  {
    id: 1,
    title: "Hair Cut",
    description: "Professional hair services are also available at our studio.",
  },
  {
    id: 2,
    title: "Hair Color",
    description: "Professional color services are also available at our studio.",
  },
  {
    id: 3,
    title: "Hair Style",
    description: "Professional hair styling services are also available at our studio.",
  },
  {
    id: 4,
    title: "Lash Extensions",
    description: "Professional lash extension services are also available at our studio.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Services"
        description="Professional tattoo services, lash extensions, and hair styling all under one roof."
      />

      {/* Tattoo Services Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tattoo Services</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive tattoo services tailored to your needs, from custom artwork to expert consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
          <h3 className="text-xl font-bold mb-3">Tattoo Pricing Information</h3>
          <p className="text-neutral-300 mb-4">
            Pricing varies based on many factors, possibly including size, complexity, placement, and artist. During your consultation, we will provide a detailed quote tailored to your specific project.
          </p>
          <p className="text-neutral-400 text-sm">
            All tattoo services require a deposit to secure your appointment. See our policies page for complete details.
          </p>
        </div>
      </Section>

      {/* Beauty Services Section */}
      <Section className="bg-neutral-950 border-y border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beauty Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {beautyServices.map((service) => (
            <Card key={service.id} hover className="p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABand 
        title="Ready to Get Started?"
        description="Contact us to discuss your project and schedule a consultation."
      />
    </>
  );
}
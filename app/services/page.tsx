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
      "Multiple revision rounds",
      "Professional execution",
    ],
  },
  {
    id: 2,
    title: "Flash Tattoos",
    description: "Pre-designed artwork ready to tattoo. Browse our rotating collection of flash designs for quicker booking and completion.",
    features: [
      "Pre-drawn designs",
      "Faster scheduling",
      "Walk-in availability may vary",
      "Catalog updates regularly",
    ],
  },
  {
    id: 3,
    title: "Cover-Ups & Reworks",
    description: "Transform existing tattoos into fresh new pieces. Our artists specialize in creative solutions for outdated or unwanted ink.",
    features: [
      "Assessment consultation",
      "Creative redesign options",
      "Expert color and placement strategy",
      "Before and after documentation",
    ],
  },
  {
    id: 4,
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
    title: "Lash Extensions",
    description: "Professional lash extension services to enhance your natural beauty.",
    features: [
      "Classic lash extensions",
      "Volume lash extensions",
      "Hybrid lash sets",
      "Lash fills and maintenance",
    ],
  },
  {
    id: 2,
    title: "Hair Styling",
    description: "Expert hair styling services for any occasion.",
    features: [
      "Cuts and styling",
      "Color services",
      "Special occasion styling",
      "Consultation available",
    ],
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
            Pricing varies based on size, complexity, placement, and artist. During your consultation, we will provide a detailed quote tailored to your specific project.
          </p>
          <p className="text-neutral-400 text-sm">
            All tattoo services require a deposit to secure your appointment. See our policies page for complete details.
          </p>
        </div>
      </Section>

      {/* Beauty Services Section */}
      <Section className="bg-neutral-950 border-y border-neutral-800">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lash & Hair Services</h2>
          <p className="text-neutral-400 mb-8">
            Professional lash extensions and hair styling services also available at our studio.
          </p>
          <a
            href="[INSERT LINK HERE]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-olive-700 text-white rounded-lg hover:bg-olive-600 transition-colors"
          >
            <span>View Lash & Hair Services</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </Section>

      <CTABand 
        title="Ready to Get Started?"
        description="Contact us to discuss your project and schedule a consultation."
      />
    </>
  );
}
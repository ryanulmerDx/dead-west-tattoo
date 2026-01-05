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
  },
  {
    id: 2,
    title: "Cover-Ups & Reworks",
    description: "Transform existing tattoos into fresh new pieces. Our artists specialize in creative solutions for outdated or unwanted ink.",
  },
  {
    id: 3,
    title: "Touch-Ups & Repairs",
    description: "Refresh and restore your existing tattoos. Whether aging or faded, we can bring your ink back to life. Complimentary for recent work (conditions apply).",
  },
];

const beautyServices = [
  {
    id: 1,
    title: "Hair Services",
    description: "Professional cuts, color, and styling for any occasion.",
  },
  {
    id: 2,
    title: "Lash Extensions",
    description: "Classic sets, volume sets, and lash fills to enhance your natural beauty.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Services"
        description=""
      />

      {/* Tattoo Services Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tattoo Services</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {tattooServices.map((service) => (
            <Card key={service.id} className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-lg">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-neutral-900 rounded-lg border border-neutral-800 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Pricing Information</h3>
          <p className="text-neutral-300 text-lg mb-4">
            Pricing varies based on many factors, possibly including size, complexity, placement, and artist. During your consultation, we will provide a detailed quote tailored to your specific project.
          </p>
          <p className="text-neutral-400">
            All tattoo services require a deposit to secure your appointment. See our policies page for complete details.
          </p>
        </div>
      </Section>

      {/* Beauty Services Section */}
      <Section className="bg-neutral-950 border-y border-neutral-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beauty Services</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {beautyServices.map((service) => (
            <Card key={service.id} className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-lg">
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
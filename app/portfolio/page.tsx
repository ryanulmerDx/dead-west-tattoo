import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our collection of custom tattoo work and client transformations.",
};

// Portfolio items - uniform layout for clean professional look
const portfolioItems = [
  { id: 1, image: "/images/portfolio/IMG_0225.jpg", category: "Black & Grey" },
  { id: 2, image: "/images/portfolio/IMG_0984.jpg", category: "Color" },
  { id: 3, image: "/images/portfolio/IMG_6942.jpg", category: "Color" },
  { id: 4, image: "/images/portfolio/IMG_0252.jpg", category: "Black & Grey" },
  { id: 5, image: "/images/portfolio/IMG_9365.jpg", category: "Black & Grey" },
  { id: 6, image: "/images/portfolio/IMG_3351.jpg", category: "Color" },
  { id: 7, image: "/images/portfolio/IMG_2830.jpg", category: "Black & Grey" },
  { id: 8, image: "/images/portfolio/IMG_9089.jpg", category: "Black & Grey" },
  { id: 9, image: "/images/portfolio/IMG_3894.jpg", category: "Color" },
  { id: 10, image: "/images/portfolio/IMG_7503.jpg", category: "Portraits" },
  { id: 11, image: "/images/portfolio/IMG_0868.jpg", category: "Black & Grey" },
  { id: 12, image: "/images/portfolio/IMG_8584.jpg", category: "Black & Grey" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Portfolio"
        description="Please enjoy a collection of custom tattoos, from our Dead West Studios Artists."
      />

      <Section>
        {/* Jamie Lee Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Jamie Lee's Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square group cursor-pointer bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-olive-500/10 hover:border-olive-500/50"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={`Tattoo work ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABand 
        title="Inspired by What You See?"
        description="Let's create something unique for you."
      />
    </>
  );
}
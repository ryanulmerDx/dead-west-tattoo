import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet our talented team of professional artists.",
};

// Artist data
const artists = [
  {
    id: 1,
    name: "Jamie Lee (Owner/Tattooer)",
    specialties: ["Black & Grey", "Color", "Realism", "Pet Portraits"],
    bio: "Native born Tucsonan Jamie Lee Ulmer has been tattooing for over 15 years. Her award winning career has taken her all around the country and abroad creating incredible realism tattoos for her many clients.",
    bookingNotes: "Jamie Lee is currently accepting new clients. Please contact us to schedule a consultation.",
    photo: "/images/artists/IMG_3810.JPG",
    portfolioLink: "/portfolio",
  },
  {
    id: 2,
    name: "Tait Schneider (Title)",
    specialties: ["Hair Cut", "Color", "Style", "Lash Extensions"],
    bio: "Tait has been working in the beauty industry for over XX years. Training via XXXXX Courses etc.",
    bookingNotes: "Tait is currently accepting new clients. Please contact us to schedule services.",
    photo: "/images/artists/placeholder.jpg", // Update with actual photo path
    portfolioLink: null,
  },
];

export default function ArtistsPage() {
  return (
    <>
      <PageHeader 
        title="Our Artists"
        description="Meet the talented artists behind Dead West Studio."
      />

      <Section>
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {artists.map((artist) => (
            <Card key={artist.id} hover className="p-6 md:p-10 lg:p-12 overflow-hidden">
              <div className="flex flex-col md:grid md:grid-cols-[350px_1fr] lg:grid-cols-[450px_1fr] gap-6 md:gap-10 lg:gap-12">
                {/* Artist Photo and Booking */}
                <div className="w-full md:w-[350px] lg:w-[450px] mx-auto md:mx-0">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-neutral-700 mb-6">
                    <Image
                      src={artist.photo}
                      alt={artist.name}
                      width={450}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="pt-4 border-t border-neutral-800">
                    <h3 className="text-sm md:text-base font-semibold text-neutral-300 uppercase tracking-wide mb-2 md:mb-3">
                      Booking Information
                    </h3>
                    <p className="text-neutral-400 text-base break-words">
                      {artist.bookingNotes}
                    </p>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="min-w-0">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 break-words">
                    {artist.name}
                  </h2>
                  
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-sm md:text-base font-semibold text-olive-500 uppercase tracking-wide mb-3 md:mb-4">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {artist.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 md:px-5 md:py-2.5 bg-olive-700/20 text-olive-500 text-sm md:text-base rounded-full border border-olive-700/30"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <h3 className="text-sm md:text-base font-semibold text-neutral-300 uppercase tracking-wide mb-3 md:mb-4">
                      About
                    </h3>
                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed break-words">
                      {artist.bio}
                    </p>
                  </div>

                  {artist.portfolioLink && (
                    <div className="mb-6 md:mb-8">
                      <Button href={artist.portfolioLink} variant="outline" size="lg" className="w-full">
                        {artist.name.split(' ')[0]} {artist.name.split(' ')[1]}'s Portfolio
                      </Button>
                    </div>
                  )}

                  {artist.id === 2 && (
                    <div className="mb-6 md:mb-8">
                      <Button href="#" variant="outline" size="lg" className="w-full">
                        Book with Tait
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-olive-700/10 border-l-4 border-olive-700 rounded max-w-4xl mx-auto">
          <h3 className="font-semibold text-olive-500 mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-neutral-300">
            Reach out via email to schedule a consultation and discuss your vision with our artists.
          </p>
        </div>
      </Section>

      <CTABand 
        title="Book Your Consultation"
        description="Connect with our talented team to bring your vision to life."
      />
    </>
  );
}
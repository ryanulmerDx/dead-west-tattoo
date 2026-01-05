import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet our talented team of professional tattoo artists.",
};

// Artist data
const artists = [
  {
    id: 1,
    name: "Jamie Ulmer",
    specialties: ["Black & Grey", "Color Work", "Realism", "Pet Portraits"],
    bio: "[Artist bio to be added - describe experience, style, and approach to tattooing]",
    bookingNotes: "Currently accepting new clients. Contact us to schedule a consultation.",
    photo: "/images/artists/IMG_3810.JPG", // Artist photo
  },
];

export default function ArtistsPage() {
  return (
    <>
      <PageHeader 
        title="Our Artists"
        description="Meet the talented artist behind Dead West Tattoo Studio."
      />

      <Section>
        <div className="max-w-5xl mx-auto px-4">
          {artists.map((artist) => (
            <Card key={artist.id} hover className="p-6 md:p-10 lg:p-12 overflow-hidden">
              <div className="flex flex-col md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[350px_1fr] gap-6 md:gap-10 lg:gap-12">
                {/* Artist Photo */}
                <div className="w-full md:w-[280px] lg:w-[350px] mx-auto md:mx-0">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-neutral-700">
                    <Image
                      src={artist.photo}
                      alt={artist.name}
                      width={350}
                      height={350}
                      className="object-cover w-full h-full"
                    />
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

                  <div className="pt-4 md:pt-6 border-t border-neutral-800">
                    <h3 className="text-sm md:text-base font-semibold text-neutral-300 uppercase tracking-wide mb-2 md:mb-3">
                      Booking Information
                    </h3>
                    <p className="text-neutral-400 text-base md:text-lg break-words">
                      {artist.bookingNotes}
                    </p>
                  </div>
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
            Reach out via email to schedule a consultation and discuss your tattoo vision with Jamie.
          </p>
        </div>
      </Section>

      <CTABand 
        title="Book Your Consultation"
        description="Connect with Jamie to bring your tattoo vision to life."
      />
    </>
  );
}
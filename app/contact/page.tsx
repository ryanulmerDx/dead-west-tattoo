import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to book a consultation or inquire about our tattoo services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Get in Touch"
        description="Ready to start your tattoo journey? Reach out to discuss your ideas and schedule a consultation."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Contact Information
            </h2>
            
            <Card className="p-6 mb-6">
              <h3 className="text-sm font-semibold text-olive-500 uppercase tracking-wide mb-3">
                Location
              </h3>
              <address className="text-lg text-white not-italic mb-2">
                2470 W Ruthrauff Rd Suite 100<br />
                Tucson, AZ 85705
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2470+W+Ruthrauff+Rd+suite+100+Tucson+AZ+85705"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-500 hover:text-olive-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
              >
                Get Directions →
              </a>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-sm font-semibold text-olive-500 uppercase tracking-wide mb-3">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg text-white hover:text-olive-500 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-neutral-400 mt-2">
                Primary contact method for booking and inquiries
              </p>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-3">
                What to Include in Your Email
              </h3>
              <ul className="space-y-2 ml-5 list-disc text-neutral-300">
                <li>Brief description of your tattoo idea</li>
                <li>Preferred placement on your body</li>
                <li>Estimated size (small, medium, large, or dimensions)</li>
                <li>Any reference images or inspiration (optional)</li>
                <li>Preferred artist if you have one in mind</li>
                <li>Your availability for consultation/appointments</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-8">
                Response Time
              </h3>
              <p className="text-neutral-300">
                We typically respond to inquiries within 1-3 business days. During busy periods, please allow additional time for a response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 p-6 bg-neutral-900 rounded-lg border border-neutral-800 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-center">
            Before You Reach Out
          </h3>
          <p className="text-neutral-300 text-center mb-4">
            Please review our FAQs and Policies pages for answers to common questions about booking, pricing, deposits, and studio requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/faqs"
              className="text-olive-500 hover:text-olive-300 font-medium focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
            >
              View FAQs →
            </a>
            <a
              href="/policies"
              className="text-olive-500 hover:text-olive-300 font-medium focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
            >
              View Policies →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
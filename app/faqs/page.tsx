import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { FAQItem } from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about our tattoo studio, booking process, and aftercare.",
};

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Contact us via email to discuss your project and schedule a consultation. We'll work with you to find a time that fits your schedule and matches with the right artist for your vision.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer: "Yes, all appointments require a deposit to secure your booking. The deposit amount and payment details will be discussed during the consultation. Deposits are non-refundable and will be applied to your final tattoo cost.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer: "Get a good night's sleep, eat a full meal beforehand, stay hydrated, and avoid alcohol or blood-thinning medications. Wear comfortable clothing that provides easy access to the area being tattooed. Make sure to bring a valid ID. You also may want to bring snacks and drinks for a longer session.\n\n                               *Complimentary refreshments are available for our clients.",
  },
  {
    question: "How long will my tattoo take?",
    answer: "Session length varies based on size, detail, and placement. Small pieces may take an hour or two, while larger custom work might require multiple sessions. Your artist will provide a time estimate during your consultation.",
  },
  {
    question: "Does getting a tattoo hurt?",
    answer: "Pain tolerance varies from person to person and depends on placement. Some areas are more sensitive than others. Most clients describe the sensation as manageable discomfort. Your artist can discuss pain management strategies during your consultation.",
  },
  {
    question: "Can I use numbing cream for my tattoo session?",
    answer: "The use of topical numbing cream can create issues with the healing process. If you intend to use any sort of pre-tattoo product it needs to be discussed in advance with your artist.",
  },
  {
    question: "Can I bring a friend?",
    answer: "You may bring one support person to your appointment. Please note that excessive guests can be distracting and may not be permitted. Children are not allowed in the tattoo area for safety reasons.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer: "We understand that life happens. Please review our cancellation and rescheduling policies for specific timeframes and requirements. Late cancellations may result in deposit forfeiture.",
  },
  {
    question: "How do I care for my new tattoo?",
    answer: "Proper aftercare is crucial for healing and preserving your tattoo. We provide detailed written instructions at your session. Follow these carefully and reach out if you have any questions or concerns during healing.",
  },
  {
    question: "When can I go swimming or exercise after getting tattooed?",
    answer: "Avoid submerging your tattoo in water (pools, hot tubs, lakes, oceans) for at least two weeks. Light exercise is generally fine, but avoid activities that cause excessive sweating or friction on the tattooed area during the initial healing period.",
  },
  {
    question: "Can I get a tattoo if I have a medical condition?",
    answer: "Some medical conditions and medications may affect your eligibility for tattooing. Please disclose any health conditions, medications, or concerns during your consultation so we can make an informed decision together.",
  },
  {
    question: "Do you do touch-ups?",
    answer: "Yes, we offer touch-up services. Recent work done at our studio may qualify for complimentary touch-ups within a specific timeframe, subject to proper aftercare. Contact us to discuss touch-up needs for older or external work.",
  },
  {
    question: "What is your minimum age requirement?",
    answer: "We understand that some states (including AZ) allow minors to be tattooed with proper parental consent. However, we prefer our clients to be 18 years of age or older with valid government-issued photo ID.",
  },
  {
    question: "Can you replicate another artist's work?",
    answer: "We respect the intellectual property and artistry of other tattoo artists. While we can use images as inspiration, we create original designs rather than directly copying another artist's work.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "Payment details including accepted methods will be discussed during your consultation and confirmed when booking your appointment. Cash is always accepted. Please speak with your artist directly regarding any payment questions or concerns.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our studio, booking process, and tattoo care."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-olive-700/10 border-l-4 border-olive-700 rounded max-w-4xl mx-auto">
          <h3 className="font-semibold text-olive-500 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-neutral-300">
            Don't see your question answered here? Reach out via email and we'll be happy to help.
          </p>
        </div>
      </Section>

      <CTABand 
        title="Ready to Get Inked?"
        description="Contact us to start your tattoo journey."
      />
    </>
  );
}
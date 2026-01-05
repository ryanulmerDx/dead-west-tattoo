import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Policies",
  description: "Studio policies including deposits, cancellations, age requirements, and health & safety protocols.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHeader 
        title="Studio Policies"
        description="Please review our policies below."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Deposits */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Deposits
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                All appointments require a non-refundable deposit to secure your booking. The deposit amount can vary by artist.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>Deposits are applied to your final tattoo cost.</li>
                <li>Deposits are non-refundable under any circumstances.</li>
                <li>Deposits may be transferred to a new appointment if rescheduled with proper notice.</li>
                <li>Payment methods and deposit amounts will be discussed during consultation.</li>
              </ul>
            </div>
          </Card>

          {/* Cancellations & Rescheduling */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Cancellations & Rescheduling
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                We understand that unexpected situations arise. To maintain our schedule and respect both artist and client time, we require advance notice for any changes.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>
                  <strong>72-hour notice:</strong> Required for cancellations or rescheduling. Your deposit can be transferred to a new appointment.
                </li>
                <li>
                  <strong>Less than 72-hour notice:</strong> Deposit is forfeited. A new deposit will be required to book another appointment.
                </li>
                <li>
                  <strong>No-shows:</strong> Deposit is forfeited and you may be required to pay the full session cost upfront for future bookings.
                </li>
                <li>Emergency situations will be handled on a case-by-case basis at the artist's discretion.</li>
              </ul>
            </div>
          </Card>

          {/* Late Arrivals */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Late Arrivals
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                Please arrive on time for your scheduled appointment. Late arrival can impact your session and subsequent appointments.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>Arriving more than 15 minutes late may result in rescheduling at the artist's discretion.</li>
                <li>Time lost due to late arrival cannot be made up and may affect the completion of your tattoo within the given session.</li>
                <li>Excessive lateness may be treated as a cancellation with deposit forfeiture.</li>
                <li>If you're running late, please contact us immediately.</li>
              </ul>
            </div>
          </Card>

          {/* Health & Safety */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Health & Safety
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                Your health and safety are our top priorities. We maintain the highest standards of cleanliness and sterilization.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>All equipment is single-use or properly sterilized between uses.</li>
                <li>Artists follow strict hygiene protocols and use barrier protection.</li>
                <li>Studio is regularly cleaned and sanitized.</li>
                <li>We reserve the right to refuse service if you appear intoxicated or under the influence.</li>
                <li>Clients with certain medical conditions may be required to provide physician clearance.</li>
                <li>Disclose all medical conditions, allergies, and anything else you think may affect your healing during your consultation.</li>
                <li>Do not get tattooed if you are currently sick or have a fever.</li>
              </ul>
            </div>
          </Card>

          {/* Studio Conduct */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Studio Conduct
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                We strive to maintain a professional, respectful, and comfortable environment for everyone.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>One guest is permitted to accompany you during your session.</li>
                <li>Children are not allowed in the tattoo area for safety reasons.</li>
                <li>Respectful behavior toward artists and staff is required.</li>
                <li>Harassment, discrimination, or abusive behavior will not be tolerated.</li>
                <li>We reserve the right to refuse service or terminate appointments for inappropriate conduct.</li>
              </ul>
            </div>
          </Card>

          {/* Aftercare Compliance */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Aftercare Compliance
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                Proper aftercare is essential for optimal healing and the longevity of your tattoo.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>You will receive detailed written aftercare instructions at your session.</li>
                <li>Following these instructions is your responsibility.</li>
                <li>Improper aftercare can lead to infection, scarring, or color loss.</li>
                <li>Touch-ups due to improper aftercare may not be complimentary.</li>
                <li>Contact us or your artist immediately if you notice signs of infection or have any questions or concerns.</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
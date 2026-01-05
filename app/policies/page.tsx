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
        description="Please review our policies before booking your appointment."
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
                All appointments require a non-refundable deposit to secure your booking. The deposit amount will be determined based on the scope and estimated length of your session.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>Deposits are applied to your final tattoo cost</li>
                <li>Deposits are non-refundable under any circumstances</li>
                <li>Deposits may be transferred to a new appointment if rescheduled with proper notice</li>
                <li>Payment methods and deposit amounts will be discussed during consultation</li>
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
                  <strong>48-hour notice:</strong> Required for cancellations or rescheduling. Your deposit can be transferred to a new appointment.
                </li>
                <li>
                  <strong>Less than 48-hour notice:</strong> Deposit is forfeited. A new deposit will be required to book another appointment.
                </li>
                <li>
                  <strong>No-shows:</strong> Deposit is forfeited and you may be required to pay the full session cost upfront for future bookings.
                </li>
                <li>Emergency situations will be handled on a case-by-case basis</li>
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
                Please arrive on time for your scheduled appointment. Late arrivals impact your session and subsequent appointments.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>Arriving more than 15 minutes late may result in rescheduling at the artist's discretion</li>
                <li>Time lost due to late arrival cannot be made up and may affect the completion of your tattoo</li>
                <li>Excessive lateness may be treated as a cancellation with deposit forfeiture</li>
                <li>If running late, contact us immediately</li>
              </ul>
            </div>
          </Card>

          {/* Age Requirements */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Age Requirements
            </h2>
            <div className="space-y-3 text-neutral-300">
              <p className="mb-3">
                We strictly adhere to legal age requirements for tattooing.
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>All clients must be 18 years of age or older</li>
                <li>Valid government-issued photo ID is required and will be verified</li>
                <li>No exceptions, including parental consent</li>
                <li>Attempting to falsify age will result in permanent ban from the studio</li>
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
                <li>All equipment is single-use or properly sterilized using autoclave</li>
                <li>Artists follow strict hygiene protocols and use barrier protection</li>
                <li>Studio is regularly cleaned and sanitized</li>
                <li>We reserve the right to refuse service if you appear intoxicated or under the influence</li>
                <li>Clients with certain medical conditions may be required to provide physician clearance</li>
                <li>Disclose all medical conditions, allergies, and medications during consultation</li>
                <li>Do not get tattooed if you are currently sick or have a fever</li>
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
                <li>One guest is permitted to accompany you during your session</li>
                <li>Children are not allowed in the tattoo area for safety reasons</li>
                <li>Respectful behavior toward artists and staff is required</li>
                <li>Harassment, discrimination, or abusive behavior will not be tolerated</li>
                <li>We reserve the right to refuse service or terminate appointments for inappropriate conduct</li>
                <li>Please silence your phone during your session</li>
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
                <li>You will receive detailed written aftercare instructions</li>
                <li>Following these instructions is your responsibility</li>
                <li>Improper aftercare can lead to infection, scarring, or color loss</li>
                <li>Touch-ups due to improper aftercare may not be complimentary</li>
                <li>Contact us immediately if you notice signs of infection or have concerns</li>
              </ul>
            </div>
          </Card>

          {/* Contact for Questions */}
          <div className="p-6 bg-olive-700/10 border-l-4 border-olive-700 rounded">
            <h3 className="font-semibold text-olive-500 mb-2">
              Questions About Our Policies?
            </h3>
            <p className="text-neutral-300">
              If you have questions or need clarification on any of our policies, please contact us before booking your appointment.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

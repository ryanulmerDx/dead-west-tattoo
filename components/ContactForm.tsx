"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
            placeholder="(123) 456-7890"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
            placeholder="e.g., New Tattoo Consultation, Booking Inquiry, Cover-Up"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all resize-y"
            placeholder="Tell us about your tattoo idea, preferred placement, size, and any other details..."
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <p className="text-sm text-green-500 text-center">
            Message sent successfully! We'll get back to you within 3-5 business days.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-sm text-red-500 text-center">
            There was an error sending your message. Please try again or contact us directly at thedeadwestco@gmail.com
          </p>
        )}
      </form>
    </Card>
  );
}
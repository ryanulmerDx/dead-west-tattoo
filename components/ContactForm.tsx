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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder submit - no actual functionality
    alert("Form submission is not yet configured. Please contact us directly via email.");
    console.log("Form data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
          >
            <option value="">Select a subject</option>
            <option value="consultation">New Tattoo Consultation</option>
            <option value="booking">Booking Inquiry</option>
            <option value="coverup">Cover-Up Consultation</option>
            <option value="touchup">Touch-Up Request</option>
            <option value="question">General Question</option>
            <option value="other">Other</option>
          </select>
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
        <Button type="submit" className="w-full" size="lg">
          Send Message
        </Button>

        <p className="text-xs text-neutral-500 text-center">
          This form is a placeholder. For now, please contact us directly at the email address provided.
        </p>
      </form>
    </Card>
  );
}

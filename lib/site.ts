export const siteConfig = {
  name: "Dead West Tattoo",
  domain: "https://deadwesttattoo.com",
  email: "hello@deadwesttattoo.com",
  description: "Professional tattoo studio offering custom artwork and exceptional craftsmanship.",
  announcement: "Booking by inquiry — email us to schedule your consultation.",
  
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Artists", href: "/artists" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Policies", href: "/policies" },
    { name: "FAQs", href: "/faqs" },
  ],
  
  socialLinks: {
    // Add social media links here when available
    instagram: "",
    facebook: "",
  }
} as const;
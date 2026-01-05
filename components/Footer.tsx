import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 md:py-16 border-t border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-horizontal.jpeg"
              alt="Dead West Studios"
              width={360}
              height={108}
              className="h-20 w-auto mb-6"
            />
            <p className="text-sm text-neutral-400 text-center md:text-left mb-6">
              Professional tattoo studio offering custom artwork and exceptional craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 w-full">
              <div>
                <p className="text-xs text-neutral-500 mb-1">Location</p>
                <address className="text-sm text-neutral-300 not-italic">
                  2470 W Ruthrauff Rd Suite 100<br />
                  Tucson, AZ 85705
                </address>
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-olive-500 hover:text-olive-300 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-center">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-olive-500 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-olive-500 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Location
            </h4>
            <div className="w-80 h-80 rounded-lg overflow-hidden border border-neutral-800">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Dead+West+Studios,2470+W+Ruthrauff+Rd+suite+100,Tucson,AZ+85705"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dead West Studios Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/policies" 
              className="hover:text-olive-500 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
            >
              Policies
            </Link>
            <Link 
              href="/faqs" 
              className="hover:text-olive-500 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
            >
              FAQs
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
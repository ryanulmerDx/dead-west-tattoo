"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 focus:ring-offset-black rounded"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/images/logo-horizontal.jpeg"
              alt="Dead West Studios"
              width={320}
              height={96}
              className="h-14 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 focus:ring-offset-black rounded",
                  pathname === item.href 
                    ? "text-olive-500" 
                    : "text-neutral-300"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-neutral-800" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-3 text-base font-medium transition-colors hover:text-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500 rounded",
                  pathname === item.href 
                    ? "text-olive-500" 
                    : "text-neutral-300"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 text-base font-medium text-olive-500 hover:text-olive-400 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
# Dead West Tattoo - Website Starter

A production-ready Next.js starter for Dead West Tattoo, featuring a clean, modern design with subtle western-inspired aesthetics and olive green accents.

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom olive color palette
- ✅ Fully responsive design
- ✅ SEO-optimized with metadata per page
- ✅ Accessible components with ARIA labels and semantic HTML
- ✅ Reusable component library
- ✅ Clean, professional design
- ✅ Email-only contact method (easy to update in one place)

## Pages

1. **Home (/)** - Hero section, featured work preview, why choose us, services preview
2. **Portfolio (/portfolio)** - Grid layout with category filtering (static/placeholder)
3. **Artists (/artists)** - Artist profiles with specialties and booking info
4. **Services (/services)** - Comprehensive service offerings
5. **FAQs (/faqs)** - Accordion-style frequently asked questions
6. **Policies (/policies)** - Deposits, cancellations, age requirements, health & safety
7. **Contact (/contact)** - Email contact info and placeholder form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Customization Guide

### Update Contact Email

All contact email references are centralized in `/lib/site.ts`. Update the `email` field:

```typescript
export const siteConfig = {
  email: "hello@deadwesttattoo.com", // <- Change this
  // ...
}
```

### Update Site Content

- **Site name/brand:** Edit `name` in `/lib/site.ts`
- **Navigation:** Edit `navigation` array in `/lib/site.ts`
- **Homepage content:** Edit `/app/page.tsx`
- **Artist profiles:** Edit `/app/artists/page.tsx`
- **Services:** Edit `/app/services/page.tsx`
- **FAQs:** Edit `/app/faqs/page.tsx`
- **Policies:** Edit `/app/policies/page.tsx`

### Update Colors

Olive green palette is defined in `tailwind.config.ts`. The main color used throughout is `olive-700` (#555c44).

### Add Real Images

Replace placeholder divs with actual images:

```tsx
// Replace this:
<div className="bg-neutral-100 aspect-square">
  <span>Portfolio Image</span>
</div>

// With this:
<Image 
  src="/images/portfolio/image-1.jpg"
  alt="Tattoo description"
  width={800}
  height={800}
  className="aspect-square object-cover"
/>
```

### Connect Contact Form

The contact form in `/components/ContactForm.tsx` is a placeholder. To make it functional:

1. Add a backend endpoint (API route, serverless function, or third-party service)
2. Update the `handleSubmit` function to POST to your endpoint
3. Add loading states and success/error messages

Example with Next.js API route:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

## Project Structure

```
dead-west-tattoo/
├── app/
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── portfolio/
│   │   └── page.tsx
│   ├── artists/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── faqs/
│   │   └── page.tsx
│   ├── policies/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Header.tsx           # Sticky navigation
│   ├── Footer.tsx           # Site footer
│   ├── Container.tsx        # Layout container
│   ├── Section.tsx          # Page section wrapper
│   ├── Button.tsx           # Button with variants
│   ├── Card.tsx            # Card component
│   ├── PageHeader.tsx       # Page title header
│   ├── CTABand.tsx         # Call-to-action section
│   ├── ContactForm.tsx      # Contact form (placeholder)
│   ├── FAQItem.tsx         # FAQ accordion item
│   └── PortfolioCategoryFilter.tsx  # Portfolio filter (static)
├── lib/
│   ├── site.ts             # Site configuration
│   └── utils.ts            # Utility functions
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── next.config.js          # Next.js configuration
```

## Component Library

### Container
Centered max-width wrapper with responsive padding.

### Section
Page section with consistent vertical spacing and optional container.

### Button
Accessible button with variants (primary, secondary, outline) and sizes.

### Card
Card wrapper with optional hover effects.

### PageHeader
Consistent page title section with dark background.

### CTABand
Call-to-action band with title, description, and button.

## Accessibility Features

- Semantic HTML elements (`header`, `nav`, `main`, `footer`, `section`)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Focus states on all interactive elements (ring-olive-500)
- Keyboard navigation support
- Responsive text sizing

## SEO

Each page includes:
- Unique `<title>` tag
- Meta description
- Open Graph tags (for social sharing)
- Semantic HTML structure

## Next Steps

1. Add real artist photos and information
2. Upload portfolio images
3. Connect contact form to email service
4. Add social media links in `/lib/site.ts`
5. Set up analytics (Google Analytics, Plausible, etc.)
6. Configure domain and deploy (Vercel, Netlify, etc.)
7. Add actual business hours, location (if needed)
8. Implement actual portfolio filtering logic
9. Add image optimization with next/image

## Deployment

This project is optimized for deployment on Vercel (recommended) but works with any Node.js hosting:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Support

For questions about Dead West Tattoo, contact: hello@deadwesttattoo.com

## License

Private - All Rights Reserved

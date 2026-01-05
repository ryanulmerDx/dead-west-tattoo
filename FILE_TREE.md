# Dead West Tattoo - Complete File Tree

```
dead-west-tattoo/
│
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   │
│   ├── artists/
│   │   └── page.tsx            # Artists page with profiles
│   │
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   │
│   ├── faqs/
│   │   └── page.tsx            # FAQs with accordion
│   │
│   ├── policies/
│   │   └── page.tsx            # Studio policies
│   │
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio grid with filter
│   │
│   └── services/
│       └── page.tsx            # Services page
│
├── components/                   # Reusable UI components
│   ├── Button.tsx               # Button with variants (primary, secondary, outline)
│   ├── CTABand.tsx             # Call-to-action section
│   ├── Card.tsx                # Card wrapper component
│   ├── ContactForm.tsx          # Contact form (placeholder)
│   ├── Container.tsx            # Layout container
│   ├── FAQItem.tsx             # FAQ accordion item
│   ├── Footer.tsx              # Site footer
│   ├── Header.tsx              # Sticky navigation header
│   ├── PageHeader.tsx           # Page title section
│   ├── PortfolioCategoryFilter.tsx  # Portfolio filter (static UI)
│   └── Section.tsx             # Section wrapper
│
├── lib/                          # Utility functions & config
│   ├── site.ts                 # Site configuration (EDIT HERE for email, nav, etc.)
│   └── utils.ts                # Utility functions (cn for className merging)
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration (olive colors)
└── tsconfig.json                # TypeScript configuration

```

## Key Files to Edit

### 1. Site Configuration
**`/lib/site.ts`** - Update email, site name, navigation

### 2. Content Pages
- `/app/page.tsx` - Homepage
- `/app/artists/page.tsx` - Artist profiles
- `/app/services/page.tsx` - Services list
- `/app/faqs/page.tsx` - FAQ content
- `/app/policies/page.tsx` - Studio policies

### 3. Styling
- `/tailwind.config.ts` - Colors and theme
- `/app/globals.css` - Global styles

### 4. Components (Ready to Use)
All components in `/components/` are production-ready and reusable across pages.

## Total Files: 29

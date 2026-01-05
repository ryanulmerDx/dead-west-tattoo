# Dead West Tattoo - Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd dead-west-tattoo
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

---

## ✏️ First Customizations

### Change Contact Email
Edit `/lib/site.ts`:
```typescript
email: "your-real-email@deadwesttattoo.com"
```

### Update Site Content
- Homepage: `/app/page.tsx`
- Artists: `/app/artists/page.tsx` (replace `[Artist Name]` placeholders)
- Services: `/app/services/page.tsx`
- FAQs: `/app/faqs/page.tsx`
- Policies: `/app/policies/page.tsx`

### Add Portfolio Images
Replace placeholder divs in `/app/portfolio/page.tsx` with real images.

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

---

## 🎨 Design Notes

- **Primary Color:** Olive Green (#555c44) - `olive-700`
- **Accent:** Used sparingly for buttons, borders, hover states
- **Typography:** Clean, bold headings with Inter font
- **Style:** Modern, minimal, professional with subtle western inspiration

---

## 📞 Support

Questions about the website? Contact your developer.
Questions about Dead West Tattoo? Email: hello@deadwesttattoo.com

---

## ✅ What's Included

✅ 7 fully responsive pages  
✅ Reusable component library  
✅ SEO optimization  
✅ Accessibility features  
✅ Mobile-first design  
✅ TypeScript + Tailwind CSS  
✅ Production-ready code  

---

**Built with Next.js 14+ | Ready for deployment**

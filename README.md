# Applied Technologies - Corporate Website

A fully responsive, SEO-optimized multi-page marketing website for Applied Technologies built with Next.js 15, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 15, React, TypeScript, Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ✅ **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt, JSON-LD schema
- ✅ **Accessibility**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- ✅ **Performance**: Optimized images, lazy loading, minimal bundle size
- ✅ **7 Complete Pages**: Home, About, Services, Technologies, Machines, Clients, Contact
- ✅ **Reusable Components**: Header, Footer, Button, Card components
- ✅ **Modern Design**: Industrial brand aesthetic with deep blues and amber accents

## 📁 Project Structure

```
applied-tech-website/
├── app/
│   ├── about/page.tsx
│   ├── clients/page.tsx
│   ├── contact/page.tsx
│   ├── machines/page.tsx
│   ├── services/page.tsx
│   ├── technologies/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── JsonLd.tsx
├── public/
│   └── applied_tech_presentation.pdf
└── package.json
```

## 🎨 Design System

### Color Palette

```css
--brand-900: #0a2b45;   /* Deep navy blue */
--brand-700: #1b4f72;   /* Secondary industrial blue */
--brand-red: #e74c3c;   /* Primary red accent */
--accent: #d79a2b;      /* Amber/golden highlight */
--muted: #6b7280;       /* Subdued grey */
```

### Typography

- **Headings**: Inter (Google Fonts)
- **Body**: Roboto (Google Fonts)
- **Base Size**: 16px

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd applied-tech-website

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

### Deploy to Netlify

```bash
npm run build
npx netlify-cli deploy --prod
```

## 📄 Pages

- **Home** (`/`) - Hero, stats, services preview, clients
- **About** (`/about`) - Mission, vision, certifications
- **Services** (`/services`) - Complete service offerings
- **Technologies** (`/technologies`) - Equipment and capabilities
- **Machines** (`/machines`) - Detailed machine inventory
- **Clients** (`/clients`) - Brand showcases and testimonials
- **Contact** (`/contact`) - Contact form and information

## 🎯 SEO Features

- Meta tags and Open Graph
- Auto-generated sitemap.xml
- Robots.txt configuration
- JSON-LD structured data
- Semantic HTML
- Image optimization

### Testing

Run Lighthouse audit in Chrome DevTools for scores of 90+

## ♿ Accessibility

- Semantic HTML5
- ARIA labels
- Keyboard navigation
- WCAG 2.1 AA compliant

## 📱 Mobile Features

- Sticky "Call Now" button
- Responsive navigation
- Touch-friendly interface
- Optimized images

## 🔧 Customization

### Update Content

Edit the following files:
- `components/Footer.tsx` - Contact details
- `components/Header.tsx` - Phone numbers
- `app/contact/page.tsx` - Contact information
- `components/JsonLd.tsx` - Structured data

### Replace Images

1. Add images to `/public/images/`
2. Update paths in page components
3. Use WebP format for optimization

### Update Colors

Edit `app/globals.css` to modify colors

## 📞 Contact

**Applied Technologies**
- Website: www.appliedtek.co.in
- Email: appliedtek@gmail.com
- Phone: +91 9922 83 7133
- Address: Plot No.29/4, D1 Block, MIDC AKUDI, Pune - 411 019

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS 4**

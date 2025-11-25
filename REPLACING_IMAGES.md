# How to Replace Temporary Images with Real Manufacturing Images

## Current Status

All placeholder images have been updated from `placehold.co` to **Lorem Picsum** (`picsum.photos`), which provides temporary, high-quality placeholder images. However, for a professional manufacturing website, you should replace these with **real, industry-specific images**.

## Why Replace Lorem Picsum Images?

Lorem Picsum provides random stock photos that are NOT related to manufacturing, CNC machines, or industrial equipment. They're just generic placeholder images. To make your website professional and credible, you need actual manufacturing/industrial images.

---

## Quick Start Guide

### Option 1: Download Images Manually (Recommended for Quality)

1. **Visit Free Image Sources:**
   - **Unsplash**: [Manufacturing Images](https://unsplash.com/s/photos/manufacturing)
   - **Pexels**: [Industrial Machinery](https://www.pexels.com/search/industrial%20machinery/)
   - **Pixabay**: [Industrial Equipment](https://pixabay.com/images/search/industrial%20equipment/)

2. **Download high-resolution images** (1920px width recommended)

3. **Optimize images** using:
   - [TinyPNG](https://tinypng.com/) - Compress PNG/JPEG
   - [Squoosh](https://squoosh.app/) - Google's image optimizer
   - Target: <500KB per image for best performance

4. **Save images** in the appropriate `public/images/` folders

5. **Update the code** to reference local images

### Option 2: Use the Provided Guide

See `IMAGE_SOURCES.md` for a complete list of:
- Recommended search terms for each machine/service
- Suggested file names
- Directory structure
- Direct links to relevant image searches

---

## Image Inventory

### Summary of Images to Replace

| Category | Count | Dimensions | Current Source |
|----------|-------|------------|----------------|
| **Machines** | 12 images | 800×600 | Lorem Picsum |
| **Technologies** | 11 images | 800×600 | Lorem Picsum |
| **Services** | 12 images | 600×400 | Lorem Picsum |
| **Client Logos** | 10 images | 280×80 | Lorem Picsum |
| **About** | 2 images | 600×400 | Lorem Picsum |
| **Home/Hero** | 1 image | 600×400 | Lorem Picsum |
| **TOTAL** | **48 images** | - | - |

---

## Step-by-Step Replacement Process

### Step 1: Set Up Image Directories

The directories are already created. Verify they exist:

```bash
public/images/
├── machines/
├── services/
├── clients/
├── about/
└── hero/
```

### Step 2: Download Specific Images

Use the search terms below to find appropriate images:

#### **Machines (12 images)**

| Machine | Search Term | Filename | Dimensions |
|---------|-------------|----------|------------|
| VMC - HASS | "CNC milling machine", "vertical machining center" | `vmc-hass.jpg` | 800×600 |
| CNC Turning - Jyoti | "CNC lathe", "turning center" | `cnc-jyoti.jpg` | 800×600 |
| CNC Turning - Huron | "precision CNC lathe" | `cnc-huron.jpg` | 800×600 |
| Tsugami CNC | "swiss type CNC", "precision lathe" | `tsugami-cnc.jpg` | 800×600 |
| DU-FOUR Milling | "universal milling machine" | `milling-dufour.jpg` | 800×600 |
| Jig Boring | "boring machine", "precision drilling" | `jig-boring.jpg` | 800×600 |
| Norton Lathe | "industrial lathe", "metal lathe" | `norton-lathe.jpg` | 800×600 |
| Radial Drill | "radial drilling machine" | `radial-drill.jpg` | 800×600 |
| Hydraulic Press | "hydraulic press machine" | `press-machine.jpg` | 800×600 |
| MIG Welding | "MIG welding", "industrial welding" | `mig-welding.jpg` | 800×600 |
| Band Saw | "industrial band saw", "metal cutting" | `band-saw.jpg` | 800×600 |
| Compressor | "screw compressor", "air compressor" | `compressor.jpg` | 800×600 |

#### **Services (12 images)**

| Service | Search Term | Filename | Dimensions |
|---------|-------------|----------|------------|
| OEM Supplier | "construction equipment", "heavy machinery" | `oem-supplier.jpg` | 600×400 |
| CNC Machining | "CNC machining", "precision manufacturing" | `cnc-machining.jpg` | 600×400 |
| Jigs & Fixtures | "manufacturing fixture", "precision tools" | `jigs-fixtures.jpg` | 600×400 |
| Precision Parts | "precision metal parts", "machined components" | `precision-parts.jpg` | 600×400 |
| Automation | "industrial automation", "robotic assembly" | `automation.jpg` | 600×400 |
| Boom Pump Parts | "concrete pump", "boom pump" | `boom-pump.jpg` | 600×400 |
| Tower Crane | "tower crane", "construction crane" | `tower-crane.jpg` | 600×400 |
| Slipform Pavers | "road paving equipment", "concrete paver" | `slipform-pavers.jpg` | 600×400 |
| Chassis Drilling | "heavy equipment manufacturing" | `chassis-drilling.jpg` | 600×400 |
| Aerospace Parts | "aerospace manufacturing", "precision engineering" | `aerospace-parts.jpg` | 600×400 |
| CU Tips | "copper electrode", "industrial copper" | `cu-tips.jpg` | 600×400 |
| Engineering Design | "engineering design", "CAD modeling" | `engineering-design.jpg` | 600×400 |

#### **About & Hero (3 images)**

| Page | Purpose | Search Term | Filename | Dimensions |
|------|---------|-------------|----------|------------|
| Home | Hero Image | "modern factory", "manufacturing facility" | `hero-manufacturing.jpg` | 600×400 |
| About | Mission | "engineering team", "industrial workspace" | `our-mission.jpg` | 600×400 |
| About | Vision | "innovation", "modern manufacturing" | `our-vision.jpg` | 600×400 |

#### **Client Logos (10 images)**

For client logos, you have two options:

**Option A: Get Official Logos**
- Visit each company's official website
- Look for "Press Kit", "Media Resources", or "Brand Assets" pages
- Download official logos in PNG format (with transparent backgrounds)
- Respect trademark guidelines

**Option B: Create Text-Based Logos**
- Use a simple design tool (Canva, Figma)
- Create clean, text-based logo representations
- Keep them simple and professional
- Dimensions: 280×80px

Companies to search for:
1. Tata Motors
2. SIMEM
3. Mercedes-Benz
4. Liebherr
5. Putzmeister
6. Sandvik
7. Linnhoff Technologies
8. Mahindra
9. Forbes Marshall
10. Aquarius Engineers

---

## Step 3: Update the Code

### For Machine Images

**File:** `app/machines/page.tsx` (around line 22)

Change from:
```typescript
image: 'https://picsum.photos/seed/machine-vmc-hass/800/600',
```

To:
```typescript
image: '/images/machines/vmc-hass.jpg',
```

Repeat for all 12 machines using the filenames from the table above.

### For Technology Images

**File:** `app/technologies/page.tsx` (around line 16)

Same pattern - update all 11 technology images.

### For Service Images

**File:** `app/services/page.tsx` (around line 15)

Same pattern - update all 12 service images.

### For Client Logos

**File:** `app/clients/page.tsx` (around line 16)

Change from:
```typescript
logo: 'https://picsum.photos/seed/client-tata/280/80',
```

To:
```typescript
logo: '/images/clients/tata-motors-logo.png',
```

**File:** `app/page.tsx` (around line 172)

Change the dynamic client logo URL from:
```typescript
src={`https://picsum.photos/seed/home-${client.toLowerCase().replace(/\s+/g, '-')}/200/80`}
```

To:
```typescript
src={`/images/clients/${client.toLowerCase().replace(/\s+/g, '-')}-logo.png`}
```

### For About & Hero Images

**File:** `app/about/page.tsx`
```typescript
// Line 40
src="https://picsum.photos/seed/about-mission/600/400"
// Change to:
src="/images/about/our-mission.jpg"

// Line 57
src="https://picsum.photos/seed/about-vision/600/400"
// Change to:
src="/images/about/our-vision.jpg"
```

**File:** `app/page.tsx`
```typescript
// Line 75
src="https://picsum.photos/seed/hero-manufacturing/600/400"
// Change to:
src="/images/hero/hero-manufacturing.jpg"
```

---

## Step 4: Remove Lorem Picsum from next.config.ts

Once all images are local, update `next.config.ts`:

**Before:**
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    },
  ],
},
```

**After:**
```typescript
images: {
  // No remote patterns needed if all images are local
  remotePatterns: [],
},
```

---

## Recommended Tools & Resources

### Free Image Sources
- **Unsplash** (https://unsplash.com) - Free for commercial use, no attribution required
- **Pexels** (https://pexels.com) - Free for commercial use, no attribution required
- **Pixabay** (https://pixabay.com) - Free for commercial use, must download first

### Image Optimization Tools
- **TinyPNG** (https://tinypng.com) - Compress PNG & JPEG
- **Squoosh** (https://squoosh.app) - Advanced compression
- **ImageOptim** (Mac) - Batch optimization
- **ImageMagick** (CLI) - Command-line batch processing

### Image Editing (if needed)
- **Photopea** (https://photopea.com) - Free online Photoshop alternative
- **GIMP** - Free desktop image editor
- **Canva** - For creating simple graphics/logos

---

## Image Licensing & Attribution

### Unsplash
- ✅ Free for commercial use
- ✅ No attribution required
- ✅ No permission needed
- ❌ Don't use in logo/trademark
- ❌ Don't sell unmodified photos

### Pexels
- ✅ Free for commercial and personal use
- ✅ No attribution required
- ✅ Modify as needed
- ❌ Don't sell unmodified photos
- ❌ Don't imply endorsement

### Pixabay
- ✅ Free under Pixabay License
- ✅ Commercial use allowed
- ⚠️ Must download (no hotlinking)
- ✅ No attribution required

---

## Quick Reference: File Structure

```
public/images/
├── machines/
│   ├── vmc-hass.jpg
│   ├── cnc-jyoti.jpg
│   ├── cnc-huron.jpg
│   ├── tsugami-cnc.jpg
│   ├── milling-dufour.jpg
│   ├── jig-boring.jpg
│   ├── norton-lathe.jpg
│   ├── radial-drill.jpg
│   ├── press-machine.jpg
│   ├── mig-welding.jpg
│   ├── band-saw.jpg
│   └── compressor.jpg
├── services/
│   ├── oem-supplier.jpg
│   ├── cnc-machining.jpg
│   ├── jigs-fixtures.jpg
│   ├── precision-parts.jpg
│   ├── automation.jpg
│   ├── boom-pump.jpg
│   ├── tower-crane.jpg
│   ├── slipform-pavers.jpg
│   ├── chassis-drilling.jpg
│   ├── aerospace-parts.jpg
│   ├── cu-tips.jpg
│   └── engineering-design.jpg
├── clients/
│   ├── tata-motors-logo.png
│   ├── simem-logo.png
│   ├── mercedes-benz-logo.png
│   ├── liebherr-logo.png
│   ├── putzmeister-logo.png
│   ├── sandvik-logo.png
│   ├── linnhoff-technologies-logo.png
│   ├── mahindra-logo.png
│   ├── forbes-marshall-logo.png
│   └── aquarius-engineers-logo.png
├── about/
│   ├── our-mission.jpg
│   └── our-vision.jpg
└── hero/
    └── hero-manufacturing.jpg
```

---

## Performance Tips

1. **Optimize images before uploading**
   - Target: <500KB per image
   - Use modern formats: WebP > JPEG > PNG

2. **Use appropriate dimensions**
   - Don't upload 4K images for 800px display
   - Match or slightly exceed display size

3. **Consider WebP format**
   - Better compression than JPEG
   - Supported by Next.js Image component
   - Fallback to JPEG for older browsers

4. **Use lazy loading** (already enabled in Next.js Image component)

---

## Checklist

- [ ] Create all required image directories
- [ ] Download 12 machine images
- [ ] Download 12 service images
- [ ] Download 10 client logos (or create text-based ones)
- [ ] Download 3 about/hero images
- [ ] Optimize all images (<500KB each)
- [ ] Place images in correct directories
- [ ] Update `app/machines/page.tsx`
- [ ] Update `app/technologies/page.tsx`
- [ ] Update `app/services/page.tsx`
- [ ] Update `app/clients/page.tsx`
- [ ] Update `app/page.tsx`
- [ ] Update `app/about/page.tsx`
- [ ] Update `next.config.ts` (remove picsum.photos)
- [ ] Test website locally
- [ ] Verify all images load correctly
- [ ] Check image quality and relevance
- [ ] Deploy updated website

---

## Need Help?

- **Can't find specific images?** Try alternative search terms or use similar equipment photos
- **Images too large?** Use TinyPNG or Squoosh to compress
- **Need specific dimensions?** Use online image resizers or Photopea
- **Client logos unavailable?** Create simple text-based representations or leave as placeholder until you get official assets

---

## Alternative: Hire a Professional

If you prefer professional, custom photography:
- Hire a local industrial photographer
- Schedule a photoshoot at your facility
- Capture your actual machines and equipment
- Cost: Typically $500-$2000 for a full shoot
- Result: Authentic, unique images that showcase YOUR facility

This would be the BEST option for maximum credibility and brand authenticity.

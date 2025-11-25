import { notFound } from 'next/navigation';
import CategoryPageClient from './CategoryPageClient';

// Product data structure
const categoryData: Record<string, {
  title: string;
  description: string;
  products: Array<{
    id: string;
    name: string;
    type: string;
    description: string;
    image: string;
    specifications: string[];
    features: string[];
    applications: string[];
    has360View?: boolean;
  }>;
}> = {
  agriculture: {
    title: 'Agriculture',
    description: 'Parking and wheel jacks designed specifically for agricultural machines and trailers, built to withstand harsh farming conditions.',
    products: [
      {
        id: 'type-a',
        name: 'Agricultural Jack Type A',
        type: 'Type A',
        description: 'Heavy-duty parking jack with reinforced base for agricultural trailers',
        image: 'https://picsum.photos/seed/jack-ag-a/600/400',
        specifications: [
          'Load capacity: 5,000 kg',
          'Lift height: 400-600mm',
          'Material: High-strength steel',
          'Surface: Hot-dip galvanized',
        ],
        features: [
          'Corrosion-resistant coating',
          'Easy crank operation',
          'Self-locking mechanism',
          'All-weather performance',
        ],
        applications: [
          'Agricultural trailers',
          'Farm equipment',
          'Grain carts',
        ],
        has360View: true,
      },
      {
        id: 'type-br',
        name: 'Agricultural Jack Type BR',
        type: 'Type BR',
        description: 'Brake-assisted jack system for heavy agricultural equipment',
        image: 'https://picsum.photos/seed/jack-ag-br/600/400',
        specifications: [
          'Load capacity: 7,500 kg',
          'Lift height: 500-750mm',
          'Brake system: Integrated',
          'Material: Alloy steel',
        ],
        features: [
          'Integrated parking brake',
          'Heavy-duty construction',
          'Dual safety locks',
          'Maintenance-free design',
        ],
        applications: [
          'Heavy trailers',
          'Harvesting equipment',
          'Transport vehicles',
        ],
        has360View: true,
      },
      {
        id: 'type-dg',
        name: 'Agricultural Jack Type DG',
        type: 'Type DG',
        description: 'Double-gear jack for maximum stability and load distribution',
        image: 'https://picsum.photos/seed/jack-ag-dg/600/400',
        specifications: [
          'Load capacity: 10,000 kg',
          'Lift height: 600-900mm',
          'Gear ratio: 2:1',
          'Material: Carbon steel',
        ],
        features: [
          'Double-gear system',
          'Extra-wide base',
          'Anti-slip footplate',
          'Weather-resistant seals',
        ],
        applications: [
          'Heavy-duty trailers',
          'Agricultural implements',
          'Large transport equipment',
        ],
      },
    ],
  },
  'car-trailers': {
    title: 'Car-Trailers',
    description: 'Reliable jacking solutions for caravans and car trailers, ensuring safe and stable parking.',
    products: [
      {
        id: 'type-ct1',
        name: 'Caravan Jack Type CT1',
        type: 'Type CT1',
        description: 'Lightweight jack designed for caravans and small trailers',
        image: 'https://picsum.photos/seed/jack-ct-1/600/400',
        specifications: [
          'Load capacity: 2,000 kg',
          'Lift height: 300-450mm',
          'Weight: 8 kg',
          'Material: Aluminum alloy',
        ],
        features: [
          'Lightweight construction',
          'Quick-release handle',
          'Compact storage',
          'Rust-proof finish',
        ],
        applications: [
          'Caravans',
          'Small trailers',
          'RVs',
        ],
        has360View: true,
      },
      {
        id: 'type-ct2',
        name: 'Car Trailer Jack Type CT2',
        type: 'Type CT2',
        description: 'Standard jack for car trailers with swivel mounting',
        image: 'https://picsum.photos/seed/jack-ct-2/600/400',
        specifications: [
          'Load capacity: 3,500 kg',
          'Lift height: 350-550mm',
          'Swivel range: 360°',
          'Material: Steel',
        ],
        features: [
          '360° swivel capability',
          'Drop-leg design',
          'Easy bolt-on mounting',
          'Powder-coated finish',
        ],
        applications: [
          'Car trailers',
          'Boat trailers',
          'Equipment trailers',
        ],
      },
    ],
  },
  'heavy-duty': {
    title: 'Heavy-duty',
    description: 'Industrial-grade landing gears and jacks for semi-trailers and heavy commercial vehicles.',
    products: [
      {
        id: 'type-hd1',
        name: 'Heavy-Duty Landing Gear HD1',
        type: 'Type HD1',
        description: 'Two-speed landing gear for semi-trailers',
        image: 'https://picsum.photos/seed/jack-hd-1/600/400',
        specifications: [
          'Load capacity: 25,000 kg',
          'Lift height: 800-1200mm',
          'Gear ratio: High/Low speed',
          'Material: High-tensile steel',
        ],
        features: [
          'Two-speed operation',
          'Heavy-duty construction',
          'Sand shoes included',
          'Grease fittings for easy maintenance',
        ],
        applications: [
          'Semi-trailers',
          'Commercial trailers',
          'Container chassis',
        ],
        has360View: true,
      },
      {
        id: 'type-hd2',
        name: 'Heavy-Duty Jack HD2',
        type: 'Type HD2',
        description: 'Single-speed landing gear for medium-duty applications',
        image: 'https://picsum.photos/seed/jack-hd-2/600/400',
        specifications: [
          'Load capacity: 15,000 kg',
          'Lift height: 700-1000mm',
          'Material: Forged steel',
          'Surface: Zinc-plated',
        ],
        features: [
          'Single-speed operation',
          'Robust construction',
          'Wide footplate',
          'Corrosion-resistant',
        ],
        applications: [
          'Medium-duty trailers',
          'Flatbed trailers',
          'Tanker trailers',
        ],
      },
    ],
  },
  construction: {
    title: 'Construction',
    description: 'Specialized jacking solutions for construction machinery and building equipment.',
    products: [
      {
        id: 'type-cn1',
        name: 'Construction Jack Type CN1',
        type: 'Type CN1',
        description: 'Heavy-duty jack for construction equipment stabilization',
        image: 'https://picsum.photos/seed/jack-cn-1/600/400',
        specifications: [
          'Load capacity: 12,000 kg',
          'Lift height: 600-900mm',
          'Base diameter: 300mm',
          'Material: Reinforced steel',
        ],
        features: [
          'Extra-wide stabilizer base',
          'High-visibility color',
          'Safety lock pins',
          'Heavy-duty construction',
        ],
        applications: [
          'Construction machinery',
          'Concrete equipment',
          'Building trailers',
        ],
      },
    ],
  },
  maintenance: {
    title: 'Maintenance',
    description: 'Durable jacks for road maintenance and snow removal equipment.',
    products: [
      {
        id: 'type-mn1',
        name: 'Maintenance Jack Type MN1',
        type: 'Type MN1',
        description: 'All-weather jack for maintenance vehicles',
        image: 'https://picsum.photos/seed/jack-mn-1/600/400',
        specifications: [
          'Load capacity: 8,000 kg',
          'Lift height: 500-750mm',
          'Temperature range: -40°C to +60°C',
          'Material: Cold-resistant steel',
        ],
        features: [
          'Cold-weather operation',
          'Anti-freeze grease',
          'Reflective markings',
          'All-terrain footplate',
        ],
        applications: [
          'Snow plows',
          'Road maintenance vehicles',
          'Municipal equipment',
        ],
      },
    ],
  },
  docking: {
    title: 'Docking',
    description: 'Precision jacking systems for aircraft docking and ground support equipment.',
    products: [
      {
        id: 'type-dk1',
        name: 'Aircraft Docking Jack DK1',
        type: 'Type DK1',
        description: 'Precision jack for aircraft ground support equipment',
        image: 'https://picsum.photos/seed/jack-dk-1/600/400',
        specifications: [
          'Load capacity: 20,000 kg',
          'Lift height: 1000-1500mm',
          'Precision: ±2mm',
          'Material: Aerospace-grade steel',
        ],
        features: [
          'High-precision operation',
          'Safety overload protection',
          'Non-marking wheels',
          'Aviation-grade materials',
        ],
        applications: [
          'Aircraft docking',
          'Ground support equipment',
          'Hangar operations',
        ],
        has360View: true,
      },
    ],
  },
  containers: {
    title: 'Containers',
    description: 'ISO-compatible jacking systems for shipping containers and intermodal applications.',
    products: [
      {
        id: 'type-co1',
        name: 'Container Jack Type CO1',
        type: 'Type CO1',
        description: 'ISO corner-compatible jack for container handling',
        image: 'https://picsum.photos/seed/jack-co-1/600/400',
        specifications: [
          'Load capacity: 30,000 kg',
          'Lift height: 400-600mm',
          'ISO corner compatible',
          'Material: High-strength steel',
        ],
        features: [
          'ISO corner fitting',
          'Heavy-duty construction',
          'Quick-lock system',
          'Marine-grade coating',
        ],
        applications: [
          'Shipping containers',
          'Intermodal chassis',
          'Container yards',
        ],
      },
    ],
  },
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categoryData[categorySlug];

  if (!category) {
    notFound();
  }

  return <CategoryPageClient category={category} categoryTitle={categorySlug} />;
}

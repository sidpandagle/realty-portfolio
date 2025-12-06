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
    has360View?: boolean;
  }>;
  applications: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}> = {
  construction: {
    title: 'Construction',
    description: 'LIFTTEK provides innovative screw jack solutions for fast lifting applications in construction and building industry machines.',
    products: [
      {
        id: 'lifttek-ts-1',
        name: 'LIFTTEK Telescopic Screw Jack TS-1',
        type: 'Telescopic Series',
        description: 'Compact telescopic design for construction equipment stabilization with maximum stroke in minimum closed length',
        image: '/jacksol_assets/0.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Material: High-strength steel',
          'Safety factor: 4:1 or higher',
        ],
        features: [
          'Telescopic design saves valuable space',
          'Integrated high-efficiency reduction gearbox',
          'Modular construction for easy maintenance',
          'Corrosion-resistant coatings available',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-ts-2',
        name: 'LIFTTEK Telescopic Screw Jack TS-2',
        type: 'Telescopic Series',
        description: 'Heavy-duty telescopic jack with reinforced base for extreme construction environments',
        image: '/jacksol_assets/1.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Efficiency: 40% higher than worm-only designs',
          'Material: Carbon steel with protective coating',
        ],
        features: [
          'Smooth, precise extension under full load',
          'Lower input torque requirements',
          'Standard tools only for maintenance',
          'Withstands shock loads',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-sb-1',
        name: 'LIFTTEK Square Base Jack SB-1',
        type: 'Square Base Series',
        description: 'Rectangular base design for enhanced stability on construction sites',
        image: '/jacksol_assets/5.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Base dimensions: 300mm x 200mm',
          'Material: Reinforced steel',
          'Surface: Hot-dip galvanized',
        ],
        features: [
          'Extra-wide stabilizer base',
          'Anti-slip footplate',
          'High-visibility color options',
          'Weather-resistant seals',
        ],
      },
    ],
    applications: [
      {
        id: 'concrete-pump',
        title: 'Concrete Pumps & Building Machinery',
        description: 'Stabilization jacks for concrete pump trailers and mobile construction equipment ensuring safe operation during concrete delivery',
        image: '/jacksol_assets/10.jpg',
      },
    ],
  },
  agriculture: {
    title: 'Agriculture',
    description: 'Parking and wheel jacks designed specifically for agricultural machines and trailers, built to withstand harsh farming conditions.',
    products: [
      {
        id: 'lifttek-ag-1',
        name: 'LIFTTEK Agricultural Jack AG-1',
        type: 'Agricultural Series',
        description: 'Heavy-duty parking jack with reinforced base for agricultural trailers and harvesting equipment',
        image: '/jacksol_assets/2.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Material: High-strength steel',
          'Surface: Corrosion-resistant coating',
        ],
        features: [
          'Compact when retracted',
          'Easy crank operation',
          'Self-locking mechanism',
          'All-weather performance',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-ag-2',
        name: 'LIFTTEK Agricultural Jack AG-2',
        type: 'Agricultural Series',
        description: 'Telescopic jack system for heavy agricultural equipment with smooth operation',
        image: '/jacksol_assets/3.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Lift height: 400-600mm',
          'Efficiency: Up to 40% higher than standard designs',
          'Material: Alloy steel',
        ],
        features: [
          'Integrated high-efficiency gearbox',
          'Minimal downtime maintenance',
          'Dual safety locks',
          'Grease fittings easily accessible',
        ],
        has360View: true,
      },
    ],
    applications: [
      {
        id: 'harvesting',
        title: 'Harvesting Equipment & Agricultural Trailers',
        description: 'Reliable parking jacks for combine harvesters, grain headers, and agricultural transport trailers providing stable support during loading and maintenance',
        image: '/jacksol_assets/13.jpg',
      },
    ],
  },
  trailers: {
    title: 'Trailers',
    description: 'LIFTTEK provides innovative screw jack solutions for trailers and semi-trailers across various industries.',
    products: [
      {
        id: 'lifttek-tr-1',
        name: 'LIFTTEK Trailer Jack TR-1',
        type: 'Trailer Series',
        description: 'Telescopic screw jack for tank trailers and semi-trailers with high load capacity',
        image: '/jacksol_assets/6.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Material: High-strength steel',
          'Surface: Corrosion-resistant coating',
        ],
        features: [
          'Compact telescopic design',
          'Integrated high-efficiency gearbox',
          'Easy maintenance with standard tools',
          'Withstands harsh road conditions',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-tr-2',
        name: 'LIFTTEK Trailer Jack TR-2',
        type: 'Trailer Series',
        description: 'Heavy-duty jack for commercial trailers and transport equipment',
        image: '/jacksol_assets/7.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Efficiency: 40% higher than worm-only designs',
          'Safety factor: 4:1 or higher',
          'Material: Alloy steel',
        ],
        features: [
          'Lower input torque requirements',
          'Minimal downtime for maximum productivity',
          'Grease fittings easily accessible',
          'Weather-resistant seals',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-tr-3',
        name: 'LIFTTEK Trailer Jack TR-3',
        type: 'Trailer Series',
        description: 'Standard parking jack for medium-duty trailer applications',
        image: '/jacksol_assets/8.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Lift height: 400-600mm',
          'Material: Carbon steel',
          'Surface: Hot-dip galvanized',
        ],
        features: [
          'Modular construction',
          'Quick part replacement',
          'Self-locking mechanism',
          'All-weather performance',
        ],
      },
    ],
    applications: [
      {
        id: 'tank-trailers',
        title: 'Tank Trailers & Liquid Transport',
        description: 'Heavy-duty stabilization jacks for tank trailers and liquid transport vehicles ensuring safe parking and loading operations',
        image: '/jacksol_assets/14.jpg',
      },
      {
        id: 'utility-trailers',
        title: 'Utility & Equipment Trailers',
        description: 'Parking jacks for utility trailers, equipment transport, and general cargo applications with reliable support',
        image: '/jacksol_assets/18.jpg',
      },
    ],
  },
  'lightening-compressor': {
    title: 'Lightening & Compressor Trolleys',
    description: 'Specialized screw jack solutions for lighting towers and compressor trolleys used in various industrial applications.',
    products: [
      {
        id: 'lifttek-lc-1',
        name: 'LIFTTEK Stabilization Jack SJ-1',
        type: 'Stabilization Series',
        description: 'Multi-purpose stabilization jacks for mobile equipment with excellent stability',
        image: '/jacksol_assets/0.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Material: Reinforced steel',
          'Safety factor: 4:1 or higher',
        ],
        features: [
          'Four-point stabilization system',
          'Telescopic space-saving design',
          'Quick deployment mechanism',
          'All-terrain footplates',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-lc-2',
        name: 'LIFTTEK Heavy-Duty Jack HD-1',
        type: 'Heavy-Duty Series',
        description: 'Heavy-duty jack system for portable equipment units',
        image: '/jacksol_assets/1.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Efficiency: 40% higher than standard',
          'Material: High-strength steel',
          'Surface: Corrosion-resistant coating',
        ],
        features: [
          'Integrated high-efficiency gearbox',
          'Vibration-resistant design',
          'Easy maintenance access',
          'Weather-proof construction',
        ],
      },
    ],
    applications: [
      {
        id: 'cable-reel',
        title: 'Cable Reel & Hose Reel Trolleys',
        description: 'Stabilization jacks for cable and hose reel trolleys ensuring stable operation during cable laying and maintenance work',
        image: '/jacksol_assets/11.jpg',
      },
      {
        id: 'compressor',
        title: 'Portable Compressors & Power Units',
        description: 'Heavy-duty support jacks for portable compressors and mobile power units providing stable base for vibration-heavy equipment',
        image: '/jacksol_assets/12.jpg',
      },
      {
        id: 'lighting-tower',
        title: 'Mobile Lighting Towers',
        description: 'Four-point stabilization system for mobile lighting towers used in construction sites, events, and emergency response operations',
        image: '/jacksol_assets/15.jpg',
      },
      {
        id: 'lighting-real',
        title: 'Industrial Lighting Systems',
        description: 'Reliable stabilization for industrial-grade mobile lighting systems ensuring safe operation in all weather conditions',
        image: '/jacksol_assets/19.jpg',
      },
    ],
  },
  'transit-mixer': {
    title: 'Transit Mixer Chute Support',
    description: 'Specialized screw jack solutions for concrete mixer truck chute support systems ensuring safe and efficient concrete delivery.',
    products: [
      {
        id: 'lifttek-tm-1',
        name: 'LIFTTEK Chute Support Jack CS-1',
        type: 'Chute Support Series',
        description: 'Precision screw jack for transit mixer chute positioning and support',
        image: '/jacksol_assets/5.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Stroke: 0 to 400mm',
          'Material: High-strength steel',
          'Safety factor: 4:1 or higher',
        ],
        features: [
          'Smooth precise extension control',
          'Integrated safety mechanisms',
          'Easy to operate manual crank',
          'Corrosion-resistant for concrete exposure',
        ],
        has360View: true,
      },
      {
        id: 'lifttek-tm-2',
        name: 'LIFTTEK Mixer Support Jack MS-1',
        type: 'Mixer Support Series',
        description: 'Heavy-duty support jack for concrete mixer stabilization',
        image: '/jacksol_assets/4.jpg',
        specifications: [
          'Load capacity: Up to 15 kN',
          'Efficiency: 40% higher mechanical efficiency',
          'Material: Reinforced steel',
          'Surface: Protective coating',
        ],
        features: [
          'High-efficiency reduction gearbox',
          'Lower input torque requirements',
          'Minimal maintenance downtime',
          'Withstands concrete environment',
        ],
      },
    ],
    applications: [
      {
        id: 'chute-support-diagram',
        title: 'Transit Mixer Chute Support System',
        description: 'Specialized chute support jacks for concrete mixer trucks enabling precise positioning and safe concrete delivery operations',
        image: '/jacksol_assets/16.jpg',
      },
      {
        id: 'chute-support-real',
        title: 'Mixer Chute Positioning',
        description: 'Reliable support system for transit mixer chutes providing smooth operation and safety during concrete pouring',
        image: '/jacksol_assets/17.jpg',
      },
      {
        id: 'concrete-mixer',
        title: 'Concrete Mixer Truck Stabilization',
        description: 'Heavy-duty stabilization jacks for concrete mixer trucks ensuring safe operation during loading and delivery',
        image: '/jacksol_assets/20.jpg',
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

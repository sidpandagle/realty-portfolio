import Card from '@/components/Card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Machines - Applied Technologies',
  description: 'Explore our state-of-the-art manufacturing equipment including VMC HASS, CNC turning centers, milling machines, and precision tools for world-class engineering solutions.',
};

export default function Machines() {
  const machines = [
    {
      name: 'VMC - HASS',
      origin: 'Made in USA',
      specs: [
        'Travel: X-40", Y-20", Z-25"',
        'Spindle Speed: 8,100 RPM',
        '24-Position Tool Changer',
        'Rigid tapping capability'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-vmc-hass/800/600',
      category: 'CNC Machining',
    },
    {
      name: 'CNC Turning Centre - Jyoti',
      origin: 'India',
      specs: [
        'Max turning diameter: 320mm',
        'Max turning length: 500mm',
        '12-position turret',
        'Fanuc/Siemens control'
      ],
      quantity: 2,
      image: 'https://picsum.photos/seed/machine-jyoti/800/600',
      category: 'CNC Turning',
    },
    {
      name: 'CNC Turning Centre - Huron',
      origin: 'Europe',
      specs: [
        'High-precision turning',
        'Live tooling capability',
        'Sub-spindle available',
        'Bar feeder compatible'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-huron/800/600',
      category: 'CNC Turning',
    },
    {
      name: 'Tsugami CNC',
      origin: 'Japan',
      specs: [
        'Swiss-type precision',
        'Sliding headstock',
        'Multiple axis control',
        'Excellent for small parts'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-tsugami/800/600',
      category: 'Swiss-Type CNC',
    },
    {
      name: 'Universal Milling Machine - DU-FOUR',
      origin: 'Made in France',
      specs: [
        'Table size: 1600 x 400mm',
        'Vertical and horizontal milling',
        'Digital readout system',
        'High precision grinding'
      ],
      quantity: 4,
      image: 'https://picsum.photos/seed/machine-dufour/800/600',
      category: 'Milling',
    },
    {
      name: 'Jig Boring Machine',
      origin: 'Taiwan',
      specs: [
        'Precision hole positioning',
        'Coordinate measurement',
        'Fine boring capability',
        'Essential for jig making'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-jig-boring/800/600',
      category: 'Precision Tools',
    },
    {
      name: 'Lathe Machine - Norton',
      origin: 'USA',
      specs: [
        'Swing over bed: 400mm',
        'Between centers: 1500mm',
        'Heavy-duty construction',
        'Variable speed drive'
      ],
      quantity: 2,
      image: 'https://picsum.photos/seed/machine-norton/800/600',
      category: 'Conventional Machines',
    },
    {
      name: 'Radial Drilling Machine',
      origin: 'India',
      specs: [
        'Drilling capacity: 50mm',
        'Radial arm: 1500mm',
        'Multiple spindle speeds',
        'Tilting table available'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-radial-drill/800/600',
      category: 'Drilling',
    },
    {
      name: 'Hydraulic Press Machine',
      origin: 'India',
      specs: [
        'Pressing capacity: 100 Ton',
        'Hydraulic operation',
        'Adjustable stroke',
        'Safety features included'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-press/800/600',
      category: 'Forming',
    },
    {
      name: 'MIG Welding Machine',
      origin: 'India',
      specs: [
        'Current: 200-400A',
        'MIG/MAG capability',
        'Wire feed system',
        'Multiple metal compatibility'
      ],
      quantity: 2,
      image: 'https://picsum.photos/seed/machine-mig-welder/800/600',
      category: 'Welding',
    },
    {
      name: 'Band Saw Machine',
      origin: 'India',
      specs: [
        'Cutting capacity: 300mm',
        'Variable cutting speed',
        'Automatic feed',
        'Coolant system'
      ],
      quantity: 2,
      image: 'https://picsum.photos/seed/machine-bandsaw/800/600',
      category: 'Cutting',
    },
    {
      name: '8 HP Screw Compressor',
      origin: 'India',
      specs: [
        'Capacity: 8 HP',
        'Oil-injected screw type',
        'Continuous operation',
        'Energy efficient'
      ],
      quantity: 1,
      image: 'https://picsum.photos/seed/machine-compressor/800/600',
      category: 'Support Equipment',
    },
  ];

  const categories = Array.from(new Set(machines.map(m => m.category)));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Our Machine Shop</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              State-of-the-art equipment from world-renowned manufacturers for precision engineering
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">{machines.length}+</div>
              <div className="text-muted">Machines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">{categories.length}+</div>
              <div className="text-muted">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">24</div>
              <div className="text-muted">Skilled Workers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">100%</div>
              <div className="text-muted">Quality Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {machines.map((machine, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="mb-4">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-900 mb-1">{machine.name}</h3>
                    <p className="text-sm text-muted">Origin: {machine.origin}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">
                    Qty: {machine.quantity}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-900 text-white rounded text-xs">
                    {machine.category}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900 mb-2 text-sm">Specifications:</h4>
                  <ul className="space-y-1">
                    {machine.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted">
                        <svg className="w-4 h-4 mr-2 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Want to See Our Machines in Action?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a facility tour to witness our manufacturing capabilities firsthand
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-accent text-white rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Request a Tour
          </a>
        </div>
      </section>
    </div>
  );
}

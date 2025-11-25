import Card from '@/components/Card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Technologies & Capabilities - Applied Technologies',
  description: 'Advanced manufacturing technologies including VMC HASS, CNC turning centers, universal milling machines, and precision equipment for construction and industrial applications.',
};

export default function Technologies() {
  const technologies = [
    {
      name: 'VMC - HASS (USA)',
      description: 'Vertical Machining Center from HASS, USA. State-of-the-art 3-axis CNC machining with high precision and repeatability for complex component manufacturing.',
      specs: ['High-speed machining', 'Rigid construction', 'Precision ball screws'],
      image: 'https://picsum.photos/seed/vmc-hass/800/600',
      quantity: '1 Unit',
    },
    {
      name: 'CNC Turning Centre - Jyoti & Huron',
      description: 'Advanced CNC turning centers from Jyoti and Huron for precision turning operations with excellent surface finish and tight tolerances.',
      specs: ['Multi-axis capability', 'Live tooling', 'High rigidity'],
      image: 'https://picsum.photos/seed/cnc-turning/800/600',
      quantity: 'Multiple Units',
    },
    {
      name: 'Tsugami CNC',
      description: 'Swiss-type automatic lathe from Tsugami for high-precision small diameter parts with excellent concentricity and surface finish.',
      specs: ['Swiss-type precision', 'Automatic operation', 'High productivity'],
      image: 'https://picsum.photos/seed/tsugami-cnc/800/600',
      quantity: '1 Unit',
    },
    {
      name: 'Universal Milling Machine - DU-FOUR (France)',
      description: 'High-quality universal milling machines from DU-FOUR, France. Versatile machines capable of various milling operations with exceptional accuracy.',
      specs: ['Versatile operations', 'Robust construction', 'Precision grinding'],
      image: 'https://picsum.photos/seed/dufour-milling/800/600',
      quantity: '4 Units',
    },
    {
      name: 'Jig Boring Machine',
      description: 'Precision jig boring machine from Taiwan for accurate hole positioning and boring operations essential for jig and fixture manufacturing.',
      specs: ['High accuracy', 'Precise positioning', 'Fine boring capability'],
      image: 'https://picsum.photos/seed/jig-boring/800/600',
      quantity: '1 Unit',
    },
    {
      name: 'Lathe - Norton',
      description: 'Heavy-duty lathes from Norton for general turning operations, capable of handling large diameter and long workpieces.',
      specs: ['Heavy-duty construction', 'Variable speed', 'Large capacity'],
      image: 'https://picsum.photos/seed/norton-lathe/800/600',
      quantity: '2 Units',
    },
    {
      name: 'Radial Drilling Machine',
      description: 'Radial drilling machine for drilling operations on large workpieces with excellent flexibility and reach.',
      specs: ['Radial arm movement', 'Multiple spindle speeds', 'Large work envelope'],
      image: 'https://picsum.photos/seed/radial-drill/800/600',
      quantity: '1 Unit',
    },
    {
      name: 'Press Machine',
      description: 'Hydraulic press machine for forming, bending, and assembly operations with precise force control.',
      specs: ['Hydraulic operation', 'Adjustable pressure', 'Safety features'],
      image: 'https://picsum.photos/seed/press-machine/800/600',
      quantity: '1 Unit',
    },
    {
      name: 'MIG Welding Machines',
      description: 'Professional MIG welding equipment for high-quality weld joints in various materials and thicknesses.',
      specs: ['MIG/MAG capability', 'Consistent welds', 'Multiple materials'],
      image: 'https://picsum.photos/seed/mig-welding/800/600',
      quantity: '2 Units',
    },
    {
      name: 'Band Saw Machines',
      description: 'Precision band saw machines for accurate cutting of various materials with minimal material waste.',
      specs: ['Precision cutting', 'Variable speed', 'Material efficiency'],
      image: 'https://picsum.photos/seed/band-saw/800/600',
      quantity: '2 Units',
    },
    {
      name: '8 HP Screw Compressor',
      description: 'Industrial screw compressor providing reliable compressed air supply for pneumatic tools and equipment.',
      specs: ['Continuous operation', 'Energy efficient', 'Low maintenance'],
      image: 'https://picsum.photos/seed/compressor/800/600',
      quantity: '1 Unit',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Our Technologies</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Advanced manufacturing equipment and capabilities for precision engineering
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={800}
                      height={600}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-brand-900">{tech.name}</h3>
                      <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">
                        {tech.quantity}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed mb-4">{tech.description}</p>
                    <div>
                      <h4 className="font-semibold text-brand-900 mb-2">Key Specifications:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {tech.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center text-muted">
                            <svg className="w-5 h-5 mr-2 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-muted">
              Comprehensive solutions for all your precision engineering needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="text-lg font-bold mb-2">CNC Machining</h3>
              <p className="text-sm text-muted">3-axis, 4-axis, and 5-axis capabilities</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Precision Turning</h3>
              <p className="text-sm text-muted">Swiss-type and conventional turning</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-bold mb-2">Milling Operations</h3>
              <p className="text-sm text-muted">Universal and vertical milling</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-bold mb-2">Fabrication</h3>
              <p className="text-sm text-muted">Welding, cutting, and assembly</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Explore Our Manufacturing Capabilities</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our facility to see our state-of-the-art equipment in action
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-accent text-white rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}

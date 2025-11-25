import Card from '@/components/Card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services - Applied Technologies',
  description: 'Comprehensive engineering and manufacturing services including CNC machining, precision parts, jigs & fixtures, automation solutions for construction equipment, automotive, and industrial applications.',
};

export default function Services() {
  const services = [
    {
      title: 'OEM Supplier for Construction Equipment Manufacturers',
      description: 'We serve as a reliable OEM supplier providing high-quality components and assemblies for leading construction equipment manufacturers worldwide. Our expertise ensures precision, durability, and performance.',
      image: '/images/product-services-images/Mixer_Arm.jpeg',
      icon: '🏗️',
    },
    {
      title: 'CNC Turning & Milling',
      description: 'State-of-the-art CNC machining capabilities with HASS VMC (USA), Jyoti, Huron, and Tsugami CNC machines. We deliver precision-engineered components with tight tolerances and superior surface finish.',
      image: '/images/product-services-images/End_Shaft.jpeg',
      icon: '⚙️',
    },
    {
      title: 'Jigs & Fixtures - Design & Manufacturing',
      description: 'Custom-designed jigs and fixtures to enhance your production efficiency. From concept to completion, we provide innovative fixturing solutions that improve accuracy and reduce manufacturing time.',
      image: '/images/product-services-images/Clamp.jpg',
      icon: '🔧',
    },
    {
      title: 'Precision Machined Parts',
      description: 'High-precision machined parts in SS304, SS316, and special alloys. Ideal for demanding applications in aerospace, defense, pharmaceutical, and industrial sectors requiring exceptional quality and reliability.',
      image: '/images/product-services-images/Spacer_Flange.jpeg',
      icon: '🎯',
    },
    {
      title: 'Automation Solutions',
      description: 'Cutting-edge automation solutions for automobile, food processing, and pharmaceutical industries. We design and manufacture automated systems that improve productivity, consistency, and safety.',
      image: '/images/product-services-images/dghy-0060-02.jpg',
      icon: '🤖',
    },
    {
      title: 'Concrete Boom Pump Parts',
      description: 'Specialized manufacturing of concrete boom pump components including pistons, cylinders, and hydraulic parts designed for high-pressure applications and extended service life.',
      image: '/images/product-services-images/Water box.jpeg',
      icon: '🚧',
    },
    {
      title: 'Tower Crane Parts',
      description: 'Precision-engineered tower crane components including pins, bushings, and structural elements manufactured to meet strict safety and performance standards.',
      image: '/images/product-services-images/Crane Pins.jpg',
      icon: '🏗️',
    },
    {
      title: 'Slipform Pavers Parts',
      description: 'Custom manufacturing of slipform paver components ensuring smooth operation and durability in road construction applications.',
      image: '/images/product-services-images/Chute Apron.jpg',
      icon: '🛣️',
    },
    {
      title: 'Chassis Drilling Machines for Transit Mixers',
      description: 'Specialized drilling equipment designed for precision hole-making in transit mixer chassis, ensuring perfect alignment and structural integrity.',
      image: '/images/product-services-images/Chasi Drilling machine.jpg',
      icon: '🚛',
    },
    {
      title: 'Aerospace Parts Manufacturing',
      description: 'High-precision aerospace components manufactured to exacting standards with full traceability and certification. Specialized in complex geometries and exotic materials.',
      image: '/images/product-services-images/Hinge_pin.jpeg',
      icon: '✈️',
    },
    {
      title: 'CU Tips & Dressing Inserts',
      description: 'Precision copper electrode tips and dressing inserts for welding and machining applications, offering superior conductivity and wear resistance.',
      image: '/images/product-services-images/Sheet metal parts.jpeg',
      icon: '⚡',
    },
    {
      title: 'Engineering Design & Consultation',
      description: 'Comprehensive engineering design services from initial concept to production readiness. Our team provides expert consultation for product development, optimization, and manufacturing process improvement.',
      image: '/images/product-services-images/wear plate.jpeg',
      icon: '📐',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive engineering and manufacturing solutions tailored to your industry needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className="mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-900">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-xl text-muted">
              Advanced manufacturing technologies and processes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-bold mb-2">Precision Machining</h3>
              <p className="text-sm text-muted">Tolerances up to ±0.001mm</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-bold mb-2">Mass Production</h3>
              <p className="text-sm text-muted">High-volume capabilities</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold mb-2">Quality Control</h3>
              <p className="text-sm text-muted">100% inspection available</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-bold mb-2">Timely Delivery</h3>
              <p className="text-sm text-muted">On-time performance</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to discuss your specific requirements and develop tailored solutions
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-accent text-white rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

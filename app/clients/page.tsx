import Card from '@/components/Card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Clients - Applied Technologies',
  description: 'Trusted by industry leaders including Tata Motors, Mercedes-Benz, Liebherr, Mahindra, and more. See the brands that rely on Applied Technologies for precision engineering.',
};

export default function Clients() {
  const clients = [
    {
      name: 'Tata Motors',
      industry: 'Automotive',
      description: 'Leading automotive manufacturer',
      logo: '/logos/tata-motors.svg',
    },
    {
      name: 'SIMEM',
      industry: 'Construction Equipment',
      description: 'Concrete equipment manufacturer',
      logo: '/logos/simem.png',
    },
    {
      name: 'Mercedes-Benz',
      industry: 'Automotive',
      description: 'Luxury vehicle manufacturer',
      logo: '/logos/mercedes-benz.svg',
    },
    {
      name: 'Liebherr',
      industry: 'Construction Equipment',
      description: 'Construction machinery leader',
      logo: '/logos/liebherr.svg',
    },
    {
      name: 'Putzmeister',
      industry: 'Construction Equipment',
      description: 'Concrete pumping equipment',
      logo: '/logos/putzmeister.svg',
    },
    {
      name: 'Sandvik',
      industry: 'Industrial Equipment',
      description: 'Engineering group specializing in metal cutting',
      logo: '/logos/sandvik.svg',
    },
    {
      name: 'Linnhoff Technologies',
      industry: 'Construction Equipment',
      description: 'Asphalt plant manufacturer',
      logo: '/logos/linnhoff.png',
    },
    {
      name: 'Mahindra',
      industry: 'Automotive & Construction',
      description: 'Multinational conglomerate',
      logo: '/logos/mahindra.webp',
    },
    {
      name: 'Forbes Marshall',
      industry: 'Industrial Equipment',
      description: 'Steam engineering and control instrumentation',
      logo: '/logos/forbes-marshall.webp',
    },
    {
      name: 'Aquarius Engineers',
      industry: 'Construction Equipment',
      description: 'Concrete equipment specialists',
      logo: '/logos/aquarius-engineers.png',
    },
  ];

  const industries = [
    {
      name: 'Automotive',
      icon: '🚗',
      count: clients.filter(c => c.industry === 'Automotive' || c.industry.includes('Automotive')).length,
    },
    {
      name: 'Construction Equipment',
      icon: '🏗️',
      count: clients.filter(c => c.industry === 'Construction Equipment' || c.industry.includes('Construction')).length,
    },
    {
      name: 'Industrial Equipment',
      icon: '🏭',
      count: clients.filter(c => c.industry === 'Industrial Equipment').length,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Our Valued Clients</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide for precision engineering and manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-muted">{industry.count} Leading Brands</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Brands We Work With</h2>
            <p className="text-xl text-muted">
              Building lasting partnerships through quality and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Card key={index} hover className="text-center">
                <div className="logo-container mb-6">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={280}
                    height={80}
                    className="mx-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-900">{client.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{client.industry}</p>
                <p className="text-muted text-sm">{client.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Leading Brands Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Fast Turnaround</h3>
              <p className="text-sm text-muted">Quick delivery without compromising quality</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Precision Quality</h3>
              <p className="text-sm text-muted">Tight tolerances and superior finish</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold mb-2">Cost Effective</h3>
              <p className="text-sm text-muted">Competitive pricing for all volumes</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold mb-2">Reliable Partner</h3>
              <p className="text-sm text-muted">Long-term partnerships built on trust</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Growing List of Partners</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the Applied Technologies difference. Let&apos;s discuss how we can support your manufacturing needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-accent text-white rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
}

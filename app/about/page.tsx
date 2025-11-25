import Card from '@/components/Card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Applied Technologies',
  description: 'Learn about Applied Technologies, our mission, vision, and commitment to engineering excellence. ISO and ZED certified manufacturing solutions provider in Pune.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">About Applied Technologies</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in precision engineering and manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Mission</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Applied Technologies is supporting manufacturing companies in engineering to help for creating Innovative Products, Reduce Costs, and Shorten Development Cycles.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                From initial concept to rapid production readiness, Applied Technologies provides Engineering Manufacturing & Design services for Defense, Automotive, Construction Equipment&apos;s manufactures, Sugar Plants, Industrial Equipment&apos;s and Machine Tool OEM&apos;s and suppliers.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://picsum.photos/seed/about-mission/600/400"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 lg:order-1">
              <Image
                src="https://picsum.photos/seed/about-vision/600/400"
                alt="Our Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Company Vision</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Our vision is to emerge as a global leader in the construction equipment industry by combining innovation, reliability, and sustainability. We are committed to delivering high-performance, technology-driven solutions that enhance productivity, safety, and efficiency for our customers worldwide.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                With a focus on continuous improvement and engineering excellence, we aim to empower infrastructure development and contribute to a more sustainable future. Through strong partnerships, superior service, and a passion for innovation, we strive to create lasting value for our customers, employees, and communities, positioning our brand as a trusted name in modern construction technology and equipment manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-muted">
              Committed to the highest standards of quality and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card hover>
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">ISO Certified</h3>
                <p className="text-muted mb-4">Quality Management System</p>
                <p className="text-brand-900 font-semibold">Certificate No: 305023082137Q</p>
              </div>
            </Card>
            <Card hover>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">ZED Certified</h3>
                <p className="text-muted mb-4">Zero Defect Zero Effect</p>
                <p className="text-brand-900 font-semibold">Certificate No: 13052025_470695</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Company Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Proprietor</h3>
              <p className="text-xl text-gray-300 font-bold">Abhijeet Londhe</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Annual Turnover</h3>
              <p className="text-xl text-gray-300 font-bold">6-8 Crore</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Facility Size</h3>
              <p className="text-xl text-gray-300 font-bold">5,500 Sq.ft R.C.C. Construction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Power Capacity</h3>
              <p className="text-xl text-gray-300 font-bold">60 HP</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Banking Partner</h3>
              <p className="text-xl text-gray-300 font-bold">Union Bank / HDFC Bank</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">GST Number</h3>
              <p className="text-xl text-gray-300 font-bold">ABKPL8329C1ZK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Workforce</h2>
            <p className="text-xl text-muted">
              Skilled professionals dedicated to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { role: 'Engineers', count: 5 },
              { role: 'Machinists', count: 7 },
              { role: 'Millers', count: 6 },
              { role: 'Welders', count: 7 },
              { role: 'Fitters', count: 7 },
              { role: 'Helpers', count: 8 },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl font-bold text-brand-red mb-2">{item.count}</div>
                <div className="text-muted">{item.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

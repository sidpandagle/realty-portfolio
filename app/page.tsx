'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import { Building2, Settings, Wrench, Target, Bot, Ruler, TrendingUp, Factory, Zap, Award, Users, Quote, ArrowRight, CheckCircle2, Lightbulb, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'OEM Supplier',
      description: 'Trusted OEM supplier for construction equipment manufacturers with precision-engineered components.',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'CNC Machining',
      description: 'State-of-the-art CNC turning and milling services with HASS VMC and Tsugami machines.',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Jigs & Fixtures',
      description: 'Custom design and manufacturing of jigs and fixtures for enhanced production efficiency.',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Precision Parts',
      description: 'High-precision machined parts in SS304, SS316, and special alloys for demanding applications.',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Automation Solutions',
      description: 'Cutting-edge automation solutions for automotive, food processing, and pharmaceutical industries.',
      icon: Bot,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Engineering Design',
      description: 'Comprehensive engineering and design services from concept to production readiness.',
      icon: Ruler,
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  const clients = [
    { name: 'Tata Motors', logo: '/logos/tata-motors.svg' },
    { name: 'Mercedes-Benz', logo: '/logos/mercedes-benz.svg' },
    { name: 'Liebherr', logo: '/logos/liebherr.svg' },
    { name: 'Putzmeister', logo: '/logos/putzmeister.svg' },
    { name: 'Sandvik', logo: '/logos/sandvik.svg' },
    { name: 'Mahindra', logo: '/logos/mahindra.webp' },
    { name: 'Forbes Marshall', logo: '/logos/forbes-marshall.webp' },
    { name: 'Aquarius Engineers', logo: '/logos/aquarius-engineers.png' },
    { name: 'SIMEM', logo: '/logos/simem.png' },
    { name: 'Linnhoff Technologies', logo: '/logos/linnhoff.png' }
  ];

  const stats = [
    { value: '6-8 Crore', label: 'Annual Turnover', icon: TrendingUp },
    { value: '5,500 Sq.ft', label: 'R.C.C. Construction', icon: Factory },
    { value: '60 HP', label: 'Power Capacity', icon: Zap },
  ];

  const testimonials = [
    {
      quote: 'Applied Technologies has consistently delivered high-quality precision parts that meet our exacting standards. Their attention to detail and commitment to deadlines is exceptional.',
      author: 'Engineering Manager',
      company: 'Major Construction Equipment Manufacturer',
    },
    {
      quote: 'The automation solutions provided have significantly improved our production efficiency. Their technical expertise and support throughout the implementation was outstanding.',
      author: 'Production Director',
      company: 'Automotive Component Supplier',
    },
    {
      quote: 'Working with Applied Technologies for our CNC machining needs has been a game-changer. Their state-of-the-art equipment and skilled team ensure perfect results every time.',
      author: 'Chief Engineer',
      company: 'Industrial Equipment OEM',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your requirements and technical specifications',
      icon: Users,
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Creating detailed engineering designs and production plans',
      icon: Lightbulb,
    },
    {
      step: '03',
      title: 'Manufacturing',
      description: 'Precision machining and assembly with quality controls',
      icon: Cog,
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'On-time delivery with complete documentation and support',
      icon: CheckCircle2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">ISO & ZED Certified</span>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Engineering Excellence for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                  Modern Manufacturing
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                From concept to production, we deliver precision-engineered solutions for Defense, Automotive, Construction Equipment, and Industrial OEMs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/services" variant="primary" size="lg" className="group">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-brand-900">
                  Get a Quote
                </Button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {['Innovative Products', 'Reduced Costs', 'Faster Cycles'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[500px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand-red/20 rounded-2xl blur-2xl" />
              <div className="relative h-full flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/hero/hero.jpg"
                    alt="Manufacturing Excellence"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl ring-1 ring-white/10"
                    priority
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Quality Assured</div>
                        <div className="text-xs text-gray-300">ISO Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="p-8 bg-card-bg rounded-2xl border border-border hover:border-brand-red transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-text-primary mb-2 group-hover:text-brand-red transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive engineering and manufacturing solutions tailored to your industry needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="group h-full p-8 bg-card-bg rounded-2xl border border-border hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="mb-6">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/services" className="px-6 py-4 bg-brand-red hover:bg-accent text-white rounded-lg font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" size="lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A streamlined approach from consultation to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-brand-red to-transparent" />
                  )}
                  <div className="relative bg-card-bg rounded-2xl p-6 border border-border hover:border-brand-red transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div className="text-5xl font-bold text-brand-red/20">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-text-primary">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Quality Certified</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are committed to maintaining the highest standards of quality and excellence in all our operations.
              </p>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-gray-300">Industry-leading certifications</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Award className="w-10 h-10 text-accent mb-4" />
                <div className="text-accent text-xl font-bold mb-2">ISO Certified</div>
                <div className="text-sm text-gray-300">Certificate No: 305023082137Q</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Award className="w-10 h-10 text-accent mb-4" />
                <div className="text-accent text-xl font-bold mb-2">ZED Certified</div>
                <div className="text-sm text-gray-300">Certificate No: 13052025_470695</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Trusted by industry leaders across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card-bg p-8 rounded-2xl border border-border hover:border-brand-red transition-all duration-300 hover:shadow-xl"
              >
                <Quote className="w-10 h-10 text-brand-red mb-6" />
                <p className="text-text-secondary mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-text-primary">{testimonial.author}</div>
                  <div className="text-sm text-text-tertiary">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-text-secondary">
              Proud to serve some of the world&apos;s most renowned brands
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center p-6 bg-card-bg rounded-xl border border-border hover:border-brand-red transition-all duration-300 hover:shadow-lg"
              >
                <div className="logo-container text-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={200}
                    height={80}
                    className="object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/clients" variant="outline">
              View All Clients
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-brand-red via-brand-red-dark to-brand-red py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to discuss how we can help bring your engineering vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="!text-white !border-white !bg-white/10 hover:!bg-white hover:!text-brand-red backdrop-blur-sm"
              >
                Contact Us
              </Button>
              <Button
                href="/about"
                variant="outline"
                className="!text-white !border-white !bg-white/10 hover:!bg-white hover:!text-brand-red backdrop-blur-sm"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

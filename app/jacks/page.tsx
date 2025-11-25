'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Tractor, Truck, TruckIcon, HardHat, Wrench, Plane, Container, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JackSolutions() {
  const categories = [
    {
      id: 'agriculture',
      title: 'Agriculture',
      description: 'Agricultural machines and trailers',
      icon: Tractor,
      color: 'from-green-500 to-emerald-600',
      image: '/images/jacks/agriculture.svg',
      productCount: 15,
    },
    {
      id: 'car-trailers',
      title: 'Car-Trailers',
      description: 'Caravans and car trailers',
      icon: Truck,
      color: 'from-blue-500 to-cyan-600',
      image: '/images/jacks/car-trailers.svg',
      productCount: 12,
    },
    {
      id: 'heavy-duty',
      title: 'Heavy-duty',
      description: 'Trailers and semi-trailers',
      icon: TruckIcon,
      color: 'from-red-500 to-orange-600',
      image: '/images/jacks/heavy-duty.svg',
      productCount: 18,
    },
    {
      id: 'construction',
      title: 'Construction',
      description: 'Machines for building industry',
      icon: HardHat,
      color: 'from-amber-500 to-yellow-600',
      image: '/images/jacks/construction.svg',
      productCount: 10,
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Road maintenance and snow',
      icon: Wrench,
      color: 'from-purple-500 to-pink-600',
      image: '/images/jacks/maintenance.svg',
      productCount: 8,
    },
    {
      id: 'docking',
      title: 'Docking',
      description: 'Aircraft docking systems',
      icon: Plane,
      color: 'from-indigo-500 to-blue-600',
      image: '/images/jacks/docking.svg',
      productCount: 6,
    },
    {
      id: 'containers',
      title: 'Containers',
      description: 'Containers with Iso Corners',
      icon: Container,
      color: 'from-teal-500 to-cyan-600',
      image: '/images/jacks/containers.svg',
      productCount: 7,
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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-sm uppercase tracking-wider mb-4 font-semibold"
            >
              choose the category
            </motion.p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Jacks Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Parking and wheel jacks for every application. Our jacks are chosen by the best international manufacturers for their resistance, reliability, and low maintenance requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.id} variants={itemVariants}>
                  <Link href={`/jacks/${category.id}`}>
                    <div className="group h-full p-8 bg-card-bg rounded-2xl border border-border hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                      {/* Icon Circle */}
                      <div className="mb-6 flex justify-center">
                        <div className={`relative w-24 h-24 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-brand-red transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-brand-red text-sm font-medium">
                          <span>{category.productCount} Products</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Our Jacks?</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Industry-leading quality and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Resistance',
                description: 'Built to withstand demanding conditions and heavy loads',
                icon: '💪',
              },
              {
                title: 'Low Maintenance',
                description: 'Designed for longevity with minimal upkeep requirements',
                icon: '🔧',
              },
              {
                title: 'Trusted Worldwide',
                description: 'Chosen by leading manufacturers across the globe',
                icon: '🌍',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card-bg p-8 rounded-2xl border border-border hover:border-brand-red transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              Need a Custom Jack Solution?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our engineering team can design and manufacture custom jacking solutions tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="!text-white !border-white !bg-white/10 hover:!bg-white hover:!text-brand-red backdrop-blur-sm "
              >
                Contact Engineering Team
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="!text-white !border-white !bg-white/10 hover:!bg-white hover:!text-brand-red backdrop-blur-sm"
                size="lg"
              >
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

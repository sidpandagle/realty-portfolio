'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  has360View?: boolean;
};

type Application = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type CategoryData = {
  title: string;
  description: string;
  products: Product[];
  applications: Application[];
};

export default function CategoryPageClient({
  category,
  categoryTitle
}: {
  category: CategoryData;
  categoryTitle: string;
}) {
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

  const handleDownloadCatalog = () => {
    const link = document.createElement('a');
    link.href = '/applied-tech-20251206.pdf';
    link.download = 'applied-tech-20251206.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/jacks" className="hover:text-accent transition-colors">Jacks Solutions</Link>
            <span>/</span>
            <span className="text-accent">{category.title}</span>
          </div>

          {/* Back Button */}
          <Link
            href="/jacks"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Categories</span>
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              {category.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {category.products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card hover className="h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg group aspect-[292/606]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={292}
                      height={606}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold mb-2">
                        {product.type}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {product.name}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary text-sm mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4 text-brand-red" />
                        Specifications
                      </h4>
                      <ul className="space-y-1">
                        {product.specifications.slice(0, 3).map((spec, idx) => (
                          <li key={idx} className="text-xs text-text-secondary flex items-start">
                            <span className="text-brand-red mr-2">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex gap-2">
                      <Button
                        href={`/contact?product=${product.id}`}
                        variant="primary"
                        className="flex-1 text-sm px-6 py-4 bg-brand-red text-white rounded-lg font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Request Quote
                      </Button>
                      {/* 
                      <button className="px-4 py-2 border border-border rounded-lg hover:border-brand-red transition-colors">
                        <Download className="w-4 h-4 text-text-secondary" />
                      </button>
                       */}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Applications</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Real-world uses of LIFTTEK screw jacks in {category.title.toLowerCase()} industry
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {category.applications.map((application) => (
              <motion.div key={application.id} variants={itemVariants}>
                <Card hover className="h-full">
                  {/* Application Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg group">
                    <Image
                      src={application.image}
                      alt={application.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Application Info */}
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {application.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {application.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Technical Specifications?</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Download our complete product catalog or contact our engineering team for custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className=' bg-brand-red transition-colors duration-300' variant="primary" size="lg">
              Contact Engineering Team
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCatalog}>
              <Download className="w-4 h-4 mr-2" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

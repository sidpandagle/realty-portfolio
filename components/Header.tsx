'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Machines', href: '/machines' },
    { name: 'Jacks Solutions', href: '/jacks' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-24 h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Applied Technologies Logo"
                width={200}
                height={100}
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            {/* <div className="text-xl font-bold">
              <span className="text-brand-red group-hover:text-brand-red-dark transition-colors">
                applied
              </span>
              <span className="block text-xs text-text-tertiary font-medium tracking-[0.2em] uppercase">
                TECHNOLOGIES
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-red transition-all duration-200 rounded-lg hover:bg-card-bg-hover group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919922837133"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-red transition-colors rounded-lg hover:bg-card-bg-hover"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9922 83 7133</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-primary hover:text-brand-red hover:bg-card-bg-hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <Menu className="w-6 h-6" strokeWidth={2} />
              ) : (
                <X className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-text-primary hover:text-brand-red hover:bg-card-bg-hover transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-border mt-2 pt-2 space-y-2">
                <a href="tel:+919922837133" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 9922 83 7133</span>
                </a>
                <a href="tel:+919766269444" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 9766 26 9444</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky Mobile Call Button */}
      {/* <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <a
          href="tel:+919922837133"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-red to-brand-red-dark text-white rounded-full shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" strokeWidth={2} />
        </a>
      </div> */}
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Download, Linkedin, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/applied-technologies', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/appliedtek', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/appliedtek', icon: Instagram },
    { name: 'Twitter', href: 'https://www.twitter.com/appliedtek', icon: Twitter },
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 rounded-lg p-4 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Applied Technologies Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              {/* <div>
                <h3 className="text-xl font-bold text-white">
                  <span className="text-brand-red">applied</span>
                </h3>
                <span className="text-xs text-gray-400 font-medium tracking-[0.2em] uppercase">TECHNOLOGIES</span>
              </div> */}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Supporting manufacturing companies in engineering to help create Innovative Products, Reduce Costs, and Shorten Development Cycles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs font-semibold text-accent">ISO</span>
                <span className="text-xs text-gray-300">305023082137Q</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs font-semibold text-accent">ZED</span>
                <span className="text-xs text-gray-300">13052025_470695</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Machines
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-300 hover:text-accent transition-all text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" strokeWidth={2} />
                <span className="group-hover:text-white transition-colors">
                  Plot No.29/4, D1 Block, M.I.D.C. AKUDI INDUSTRIAL ESTATE, AKURDI, Pune- 411 019
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" strokeWidth={2} />
                <div className="space-y-1">
                  <a href="tel:+919922837133" className="hover:text-accent transition-colors block">
                    +91 9922 83 7133
                  </a>
                  <a href="tel:+919766269444" className="hover:text-accent transition-colors block">
                    +91 9766 26 9444
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" strokeWidth={2} />
                <a href="mailto:appliedtek@gmail.com" className="hover:text-accent transition-colors">
                  appliedtek@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>

            {/* Social Media Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors" strokeWidth={2} />
                </a>
              ))}
            </div>

            {/* Download Brochure */}
            <a
              href="/applied_tech_presentation.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-accent hover:to-accent-light text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" strokeWidth={2} />
              Download Brochure
            </a>

            {/* Proprietor */}
            <div className="mt-6 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 mb-1">Proprietor</p>
              <p className="text-sm text-white font-semibold">Abhijeet Londhe</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Applied Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.appliedtek.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
              >
                <span>www.appliedtek.co.in</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

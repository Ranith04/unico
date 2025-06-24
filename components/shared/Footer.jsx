"use client";

import React from 'react';
import Link from 'next/link';
    import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
    import { Separator } from '@/components/ui/separator';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact Us', path: '/contact' },
      ];

      const socialLinks = [
        { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/unico-international-pvt-ltd/', label: 'LinkedIn' },
        { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/unicointernational?utm_source=qr&igsh=MXF4aWk3ZWhleTlyag==', label: 'Instagram' },
      ];

      return (
        <footer className="bg-card text-card-foreground border-t border-border">
          <div className="container py-12 mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className='mx-auto'>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <img src="/assets/logo.avif" alt="Unico International UI Monogram Logo" className="h-20 w-80 filter invert-[5%] sepia-[7%] saturate-[2155%] hue-rotate[178deg] brightness-[95%] contrast-[90%]" />
                </Link>
              </div>
              <div className='mx-auto'>
                <p className="font-semibold text-primary text-2xl mb-4">Quick Links</p>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.path} className="text-lg text-muted-foreground hover:text-primary transition-colors hover:underline hover:text-blue-400">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mx-auto'>
                <p className="font-semibold text-primary mb-4">Contact</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:support@unico-international.com" className="text-muted-foreground hover:text-primary transition-colors">support@unico-international.com</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:08041489479" className="text-muted-foreground hover:text-primary transition-colors">08041489479</a>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="my-8 bg-border" />
            <div className="text-center text-md text-muted-foreground">
              <p>Copyright <span className='text-blue-400'>@{currentYear}</span> Unico. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
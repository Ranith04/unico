'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const NavLinkItem = ({ to, label, isActiveOverride = false }) => {
    const isActive = isActiveOverride || pathname === to || pathname?.startsWith(to);
    return (
      <Link href={to}>
        <span
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            isActive ? 'text-orange-500' : 'text-gray-700'
          } hover:text-orange-500`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-white text-gray-700 shadow-sm border-b border-gray-200"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/logo.avif"
            alt="Unico International Logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-medium text-base transition-colors ${
              pathname === '/' ? 'text-orange-500' : 'text-gray-700'
            } hover:text-orange-500`}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`font-medium text-base transition-colors ${
              pathname === '/about' ? 'text-orange-500' : 'text-gray-700'
            } hover:text-orange-500`}
          >
            About Us
          </Link>

          <div className="relative group">
            <div className={`flex items-center space-x-1 cursor-pointer font-medium text-base transition-colors ${
              pathname?.startsWith('/services') || pathname?.startsWith('/portfolio') ? 'text-orange-500' : 'text-gray-700'
            } hover:text-orange-500`}>
              <span>Products</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </div>
            <div className="absolute hidden group-hover:flex flex-col top-full mt-2 left-0 bg-white text-gray-700 shadow-lg rounded-lg border border-gray-200 py-2 min-w-[220px] z-50">
              <Link 
                href="/services/software" 
                className="px-4 py-2 hover:bg-gray-50 hover:text-orange-500 transition-colors font-medium"
              >
                Software Development
              </Link>
              <Link 
                href="/services/design" 
                className="px-4 py-2 hover:bg-gray-50 hover:text-orange-500 transition-colors font-medium"
              >
                Interior Design
              </Link>
              <Link 
                href="/portfolio" 
                className="px-4 py-2 hover:bg-gray-50 hover:text-orange-500 transition-colors font-medium"
              >
                Portfolio Management
              </Link>
            </div>
          </div>

          <Link 
            href="/contact" 
            className={`font-medium text-base transition-colors ${
              pathname === '/contact' ? 'text-orange-500' : 'text-gray-700'
            } hover:text-orange-500`}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-10 bg-white text-gray-700">
              <div className="flex flex-col space-y-4 px-4">
                <NavLinkItem to="/" label="Home" isActiveOverride={pathname === '/'} />
                <NavLinkItem to="/about" label="About Us" />
                <div className="border-b border-gray-200 pb-2">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Products</span>
                  <div className="mt-2 ml-4 space-y-2">
                    <NavLinkItem to="/services/software" label="Software Development" />
                    <NavLinkItem to="/services/design" label="Interior Design" />
                    <NavLinkItem to="/portfolio" label="Portfolio Management" />
                  </div>
                </div>
                <NavLinkItem to="/contact" label="Contact" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
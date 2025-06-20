'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MoveUpRight, Briefcase, Users, Phone, Home as HomeIconLucide, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const NavLinkItem = ({ to, label, isActiveOverride = false }) => {
    const isActive = isActiveOverride || pathname === to || pathname?.startsWith(to);
    return (
      <Link href={to}>
        <span
          className={`px-4 py-2 text-sm font-semibold transition-colors ${
            isActive ? 'text-white' : 'text-gray-400'
          } hover:text-white`}
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
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0E0F10] to-[#283593] text-white shadow-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">Unico</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`font-semibold text-lg hover:text-blue-400 transition-colors ${pathname === '/' ? 'text-blue-400' : 'text-white'}`}>
            Home
          </Link>
          <Link href="/about" className={`font-semibold text-lg hover:text-blue-400 transition-colors ${pathname === '/about' ? 'text-blue-400' : 'text-white'}`}>
            About
          </Link>
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 text-white font-semibold text-lg transition-colors">
              <span>Products</span>
              <ChevronDown size={16} />
            </div>
            <div className="absolute hidden group-hover:flex flex-col top-4 mt-2 -left-[60%] bg-[#011627] text-white shadow-lg rounded-2xl py-2 min-w-[200px] z-50">
              <Link href="/services/software" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Software Development</Link>
              <Link href="/services/design" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Interior Design</Link>
              <Link href="/portfolio" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Portfolio Management</Link>
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 text-white font-semibold text-lg transition-colors">
              <span>Industries</span>
              <ChevronDown size={16} />
            </div>
            <div className="absolute hidden group-hover:flex flex-col top-4 mt-2 -left-[60%] bg-[#011627] text-white shadow-lg rounded-2xl py-2 min-w-[200px] z-50">
              <Link href="/services" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Financial Services</Link>
              <Link href="/services" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Technology</Link>
              <Link href="/services" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Education</Link>
              <Link href="/services" className="px-4 py-2 hover:bg-[#022b44] transition-colors font-medium">Interior Design</Link>
            </div>
          </div>
        </nav>
        <Link href="/contact">
          <Button className="bg-[#2196F3] text-white hover:bg-white hover:text-[#2196F3] text-lg font-semibold px-5 py-2 rounded-md transition-all duration-300">
            Contact
            <MoveUpRight strokeWidth={3} className='h-5 w-5 font-bold' />
          </Button>
        </Link>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] pt-10 bg-[#121212] text-white">
              <div className="flex flex-col space-y-4 px-4">
                <NavLinkItem to="/" label="Home" isActiveOverride={pathname === '/'} />
                <NavLinkItem to="/about" label="About" />
                <NavLinkItem to="/services" label="Products" />
                <NavLinkItem to="/services" label="Industries" />
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
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => (
    <Link href={href} passHref>
      <Button
        variant="link"
        className={`font-light uppercase tracking-widest text-foreground hover:text-foreground/70 hover:no-underline ${isMobile ? 'text-lg py-4 w-full justify-start' : 'text-sm'}`}
        onClick={() => isMobile && setIsSheetOpen(false)}
      >
        {label}
      </Button>
    </Link>
  );
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-xl font-light uppercase tracking-widest cursor-pointer">
            Camila Tessio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[300px] bg-background p-0">
                <div className="flex flex-col h-full">
                    <div className="p-6 flex justify-end">
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <div className="flex flex-col items-start px-6 space-y-2">
                        {navLinks.map((link) => <NavLink key={link.href} {...link} isMobile />)}
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

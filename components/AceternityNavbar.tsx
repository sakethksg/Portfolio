'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiGithub } from 'react-icons/si';
import { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '@/components/ui/resizable-navbar';

export default function AceternityNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <Navbar className="top-8">
      {/* Desktop Navigation */}
      <NavBody className="border border-border/40 bg-background/95 backdrop-blur-md">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 flex items-center px-6 py-3 text-lg font-bold text-foreground"
        >
          Saketh Kollipara
        </Link>

        {/* Nav Items */}
        <NavItems items={navItems} />

        {/* GitHub Link */}
        <div className="relative z-20 flex items-center space-x-2">
          <a
            href="https://github.com/sakethksg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full p-3 text-foreground/60 transition hover:bg-muted hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <SiGithub className="h-6 w-6" />
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="border border-border/40 bg-background/95 backdrop-blur-md">
        <MobileNavHeader>
          <Link
            href="/"
            className="flex items-center px-3 py-2 text-base font-bold text-foreground"
          >
            Saketh Kollipara
          </Link>
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className={`w-full rounded-lg px-5 py-3 text-left text-base transition-colors ${
                pathname === item.link
                  ? 'bg-primary/10 font-medium text-foreground'
                  : 'text-foreground/60 hover:bg-muted hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://github.com/sakethksg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-2 rounded-lg px-5 py-3 text-base text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
          >
            <SiGithub className="h-6 w-6" />
            GitHub
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

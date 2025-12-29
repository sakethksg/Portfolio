'use client'
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'
import { SiGithub } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border'>
        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Saketh Kollipara | Portfolio
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className='text-foreground/60 hover:text-foreground'>Home</Link>
                    <span className='text-muted-foreground/30'>|</span>
                    <Link href="/about" className='text-foreground/60 hover:text-foreground'>About</Link>
                    <span className='text-muted-foreground/30'>|</span>
                    <Link href="/projects" className='text-foreground/60 hover:text-foreground'>Projects</Link>
                    <span className='text-muted-foreground/30'>|</span>
                    <Link href="/contact" className='text-foreground/60 hover:text-foreground'>Contact</Link>
                    <span className='text-muted-foreground/30'>|</span>
                    <a href="https://github.com/sakethksg" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><SiGithub className="w-6 h-6" /></a>
                </div>
                <button 
                  onClick={toggleMenu} 
                  className="md:hidden p-2"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-white" />
                  )}
                </button>
            </div>
            {isMenuOpen && (
              <div className="md:hidden py-4">
                  <div className="flex flex-col space-y-4">
                    <Link href="/" className='text-foreground/60 hover:text-foreground'>Home</Link>
                    <Link href="/about" className='text-foreground/60 hover:text-foreground'>About</Link>
                    <Link href="/projects" className='text-foreground/60 hover:text-foreground'>Projects</Link>
                    <Link href="/contact" className='text-foreground/60 hover:text-foreground'>Contact</Link>
                    <a href="https://github.com/sakethksg" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><SiGithub className="w-6 h-6" /></a>
                  </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
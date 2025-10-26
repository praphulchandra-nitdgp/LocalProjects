'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Diamond, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <header className="border-b border-divider px-4 sm:px-8 lg:px-10 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
          <Diamond className="w-6 h-6" />
          <h2 className="text-lg font-bold leading-tight tracking-tight">
            Praphul's Portfolio
          </h2>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-normal transition-colors hover:text-accent ${
                  pathname === item.href ? 'text-accent' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="ghost" 
              className="bg-secondary hover:bg-secondary/80 text-white p-2.5"
              asChild
            >
              <a href="https://github.com/praphulchandra-nitdgp" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="bg-secondary hover:bg-secondary/80 text-white p-2.5"
              asChild
            >
              <a href="https://www.linkedin.com/in/praphul-chandra-ganapathri" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="bg-secondary hover:bg-secondary/80 text-white p-2.5"
              asChild
            >
              <a href="https://www.instagram.com/praphul_chandra_370/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
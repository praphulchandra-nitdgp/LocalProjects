import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="max-w-6xl flex-1">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted text-base font-normal leading-normal">
            © 2025 G Praphul Chandra. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
}
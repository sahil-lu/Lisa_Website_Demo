import React from "react";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-3">About Lisa</h3>
          <p className="text-sm text-muted-foreground">
            LISA is an AI-powered learning ecosystem helping enterprises and institutions create personalized, adaptive learning at scale.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#products" className="hover:text-foreground">Products</a></li>
            <li><a href="#nexi" className="hover:text-foreground">Nexi Agents</a></li>
            <li><a href="#workshops" className="hover:text-foreground">Workshops</a></li>
            <li><a href="#reports" className="hover:text-foreground">Reports</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@lisa.ai</li>
            <li>Mumbai, IN • Remote-first</li>
          </ul>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={18} /></a>
            <a href="#" aria-label="Email" className="hover:text-foreground"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© 2025 LISA. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

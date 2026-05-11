import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 py-20 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 text-center md:text-right">
          <div>
            <Logo />
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-4">
              جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-bold text-zinc-400">
            <Link href="/#services" className="hover:text-primary transition-colors">المواصفات الفنية</Link>
            <Link href="/#heritage" className="hover:text-primary transition-colors">عنا</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">المشاريع</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import Link from 'next/link';
import { GiEgyptianTemple } from 'react-icons/gi';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shrink-0 shadow-lg shadow-primary/20">
        <GiEgyptianTemple className="text-2xl" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-zinc-900 leading-none">الصنعة</span>
        <span className="text-[10px] font-bold text-primary uppercase tracking-tight mt-1.5 leading-tight">
          خبراء الجبس وواجهات GRB و GRC
        </span>
      </div>
    </Link>
  );
};

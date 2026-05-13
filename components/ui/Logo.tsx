
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <img 
        src="/imgs/logo.PNG" 
        alt="لمسة ديكور" 
        className="h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
      />
    </Link>
  );
};


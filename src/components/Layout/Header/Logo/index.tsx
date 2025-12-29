import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className="text-2xl font-bold text-midnight_text dark:text-white hover:text-primary transition-colors duration-300">
      Hashir
    </Link>
  );
};

export default Logo;

import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  // Determine if this link is active
  const isActive = path === item.href || (path.startsWith("/portfolio") && item.href === "/portfolio");

  return (
    <Link href={item.href} className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-md focus:outline-none transition-colors ${
          isActive
            ? 'bg-primary text-white dark:text-white'
            : 'text-black dark:text-grey dark:text-opacity-70 hover:bg-gray-100 dark:hover:bg-darklight'
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-darklight p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block py-2 px-2 rounded text-sm transition-colors ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-midnight_text'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default MobileHeaderLink;

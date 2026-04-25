import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              CareSupport NGO
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex sm:space-x-8 mr-4">
              <Link
                href="/"
                className="border-transparent text-gray-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-slate-700 hover:text-gray-700 dark:hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/form"
                className="border-transparent text-gray-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-slate-700 hover:text-gray-700 dark:hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Request Support
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

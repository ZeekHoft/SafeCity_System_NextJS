import Link from 'next/link';

// Define the Header component
export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 sticky top-0 z-50">
      {/* Header container */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Website title */}
        <h1 className="text-xl font-semibold">SafeCity</h1>
        
        {/* Navigation menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            {/* Navigation links */}
            <li>
              <Link href="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/reports" className="hover:text-gray-300">
                Report An Incident
              </Link>
            </li>
            <li>
              <Link href="/hotspots" className="hover:text-gray-300">
                Safety Hotspots
              </Link>
            </li>
            <li>
              <Link href="/notifications" className="hover:text-gray-300">
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/reportsummary" className="hover:text-gray-300">
                Reports
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Social media icons */}
        <div className="hidden md:block">
          {/* Add icons here */}
        </div>

        {/* Add Mobile Navigation Toggle Here */}
      </div>
    </header>
  );
}
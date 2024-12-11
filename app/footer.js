import Link from 'next/link';

// Define the Footer component
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 sticky top-0 z-50 text-center">
      {/* First section of the footer */}
      <div>
        {/* Display your name and the current year */}
        <p>SafeCity &copy; {new Date().getFullYear()}</p>
      </div>
      {/* Second section of the footer */}
      <div>
        {/* Provide a link to your Twitter profile */}
        <a href="https://www.facebook.com/francisvince.jaca" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
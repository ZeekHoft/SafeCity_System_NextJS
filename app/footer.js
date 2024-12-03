import Link from 'next/link';

// Define the Footer component
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 sticky top-0 z-50">
      {/* First section of the footer */}
      <div>
        {/* Display your name and the current year */}
        <p>SafeCity &copy; {new Date().getFullYear()}</p>
      </div>
      {/* Second section of the footer */}
      <div>
        {/* Provide a link to your Twitter profile */}
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
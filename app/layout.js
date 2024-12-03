// app/layout.js

// Import global styles
import './globals.css';

// Import the Inter font from Google Fonts
import { Inter } from 'next/font/google';

// Import the Header and Footer components
import Header from './header';
import Footer from './footer';

// Initialize the Inter font with a Latin subset
const inter = Inter({ subsets: ['latin'] });

// Define metadata for the website (no type annotation in JS)
export const metadata = {
  title: "SafeCity",
  description: "Incident Reporting and Emergency Response System",
};

// Define the RootLayout component, which will be used to wrap pages
export default function RootLayout({ children }) {
  return (
    // Start of the HTML document
    <html lang="en">
      {/* Set the body class to apply the Inter font */}
      <body className={inter.className}>
        {/* Include the Header component */}
        <Header />

        {/* Render the child components within the layout */}
        {children}

        {/* Include the Footer component */}
        <Footer />
      </body>
    </html>
    // End of the HTML document
  );
}
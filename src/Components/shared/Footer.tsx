import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white">Simple</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Your one-stop destination for Phones, Laptops & Gadgets.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/allproduct" className="hover:text-red-400">All Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p>Email: shawon505214@gmail.com</p>
          <p>Phone: +880 1883717078</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Simple. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

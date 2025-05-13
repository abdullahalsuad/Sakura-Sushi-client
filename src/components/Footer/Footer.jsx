import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#0b2b2b] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[#03fa7e] to-[#06c0c0] text-transparent bg-clip-text cursor-pointer">
            Sakura Sushi
          </span>
          <p className="text-gray-400 mt-4">
            Crafting fresh sushi with love. Taste the elegance of Japanese
            cuisine in every bite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#169976] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-[#169976] transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#169976] transition">
                About Us
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ info@sakurasushi.com</li>
            <li>📍 456 Sakura Lane, Kyoto, Japan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-[#169976] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#169976] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#169976] transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Sakura Sushi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

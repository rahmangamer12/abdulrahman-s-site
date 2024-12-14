import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing Facebook instead of Twitter

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: WhatsApp Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://wa.me/+923174720280" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-green-500 hover:text-green-400 transition duration-300" />
          </a>
          <span className="text-sm">Contact us on WhatsApp</span>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61554083063522" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-blue-600 hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/rahmangamer122/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-500 hover:text-pink-400 transition duration-300" />
          </a>
          {/* Add more social icons if needed */}
        </div>
      </div>

      {/* Bottom Text: Copyright */}
      <div className="container mx-auto text-center mt-4">
        <p>© Abdulrahman 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

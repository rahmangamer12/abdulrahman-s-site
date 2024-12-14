import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <FaWhatsapp className="text-3xl" />
            <span className="text-xl font-semibold">MyWebsite</span>
          </div>
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/form" className="hover:underline">
            Form
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

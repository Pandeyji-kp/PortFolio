import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icon library

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <nav className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white sticky top-0 z-50 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {dark ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {dark ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

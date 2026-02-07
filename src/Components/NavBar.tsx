import { useState } from "react";
interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
];

export default function NavBar() {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/iconlogo.png" alt="Logo" className="h-10 w-32" />
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-white font-medium gap-12">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Desktop Button */}
        <button className="hidden md:block bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
           BOOK A CALL
        </button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <ul className="flex flex-col items-center font-bold space-y-4 py-5 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}

            <button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
              BOOK A CALL
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}


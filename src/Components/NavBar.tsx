import { useState } from "react";

interface NavItem {
  name: string;
  link?: string;
  dropdown?: { name: string; link: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  {
    name: "Work",
    dropdown: [
      { name: "Worked Categories", link: "/work-categories" },
       { name: "coffee works", link: "/coffee-works" },
      { name: "Portfolio", link: "/portfolio" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/GoLive_LoGo_Light.svg" alt="Logo" className="h-10 w-32" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium gap-12 relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <li
                key={item.name}
                className="relative cursor-pointer hover:text-blue-600 transition flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                {item.name}

                {/* Dropdown Arrow */}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>

                {/* Desktop Dropdown - No Space Below Navbar */}
                {openDropdown && (
                  <ul className="absolute left-0 top-full bg-black shadow-lg rounded-lg py-3 w-40 border border-gray-700">
                    {item.dropdown.map((drop) => (
                      <li
                        key={drop.name}
                        className="px-4 py-2 hover:bg-gray-800 hover:text-blue-600 transition"
                      >
                        <a href={drop.link}>{drop.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={item.name}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            )
          )}
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
            
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="text-center">
                  <button
                    className="flex items-center gap-2 hover:text-blue-600 transition"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    {item.name}

                    {/* Mobile Dropdown Arrow */}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Mobile Dropdown - No Top Spacing */}
                  {openDropdown && (
                    <ul className="space-y-2 mt-1">
                      {item.dropdown.map((drop) => (
                        <li
                          key={drop.name}
                          className="hover:text-blue-600 transition"
                        >
                          <a href={drop.link}>{drop.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={item.name}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            )}

            <button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
              BOOK A CALL
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

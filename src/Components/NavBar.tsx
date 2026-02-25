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

  // WORK DROPDOWN
  {
    name: "Work",
    dropdown: [
      { name: "Worked Categories", link: "/work-categories" },
      { name: "Coffee Works", link: "/coffee-works" },
      { name: "Portfolio", link: "/portfolio" },
    ],
  },

  // GET A DEMO DROPDOWN
  {
    name: "Get A Demo",
    dropdown: [
      { name: "Start Free Demo", link: "/start-demo" },
      { name: "Send a Brief", link: "/send-brief" },
      { name: "Demo Pricing", link: "/demo-pricing" },
    ],
  },

  { name: "Contact", link: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/GoLive_LoGo_Light.svg" alt="Logo" className="h-10 w-32" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium gap-6 relative">
          
          {navItems.map((item) =>
            item.dropdown ? (
              <li
                key={item.name}
                className="relative cursor-pointer hover:text-blue-500 transition flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.name}

                {/* Dropdown Arrow */}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === item.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>

                {/* Desktop Dropdown */}
                {openDropdown === item.name && (
                  <ul className="absolute left-0 top-full bg-black border border-gray-800 shadow-lg rounded-lg py-3 w-48">
                    {item.dropdown.map((drop) => (
                      <li
                        key={drop.name}
                        className="px-4 py-2 hover:bg-gray-800 hover:text-blue-500 transition"
                      >
                        <a href={drop.link}>{drop.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.name} className="hover:text-blue-500 transition">
                <a href={item.link}>{item.name}</a>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition">
          BOOK A CALL
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-5 text-white font-medium">
            
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="text-center w-full">
                  <button
                    className="w-full flex justify-center items-center gap-2 hover:text-blue-400 transition"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name}

                    {/* Arrow */}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openDropdown === item.name && (
                    <ul className="space-y-2 mt-2">
                      {item.dropdown.map((drop) => (
                        <li
                          key={drop.name}
                          className="hover:text-blue-400 transition"
                        >
                          <a href={drop.link}>{drop.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.name} className="hover:text-blue-400 transition">
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            )}

            {/* Mobile CTA */}
            <button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition">
              BOOK A CALL
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
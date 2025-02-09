import { useState } from "react";

export default function DropdownNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Tombol Hamburger (Hanya di Mobile) */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none lg:hidden">
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#19B8ED]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Product
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

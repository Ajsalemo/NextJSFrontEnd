import { useState } from "react";
import Link from "next/link";

export default function Dropdown() {
  const [isOpen, isOpenFunction] = useState(false);
  return (
    <div className="h-16 pr-6 relative">
      <button
        className="absolute right-0 m-4 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white sm:hidden"
        onClick={() => isOpenFunction(!isOpen)}
        onBlur={() => isOpenFunction(!isOpen)}
        aria-label="Dropdown button"
      >
        <span className="text-blue-300 font-black">/</span>
        <span className="text-purple-700 font-black">/</span>
        <span className="text-red-600 font-black">/</span>{" "}
      </button>
      {isOpen ? (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl top-12">
          <Link href="/">
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/allmodels">
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              ///BMW Performance Models
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

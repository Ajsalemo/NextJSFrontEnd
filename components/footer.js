import Link from "next/link";

export default function Footer() {
  return (
    <nav className="inset-x-0 bottom-0 h-16 fixed bg-gray-900 flex justify-center sm:justify-between sm:flex-col md:flex-row">
      <Link href="/allmodels">
        <a className="h-screen w-fit-content bg-black ml-6 pt-3 md:pt-0 md:text-4xl sm:text-2xl text-1xl">
          <span className="text-white">BMW </span>
          <span className="text-blue-300 font-black">/</span>
          <span className="text-purple-700 font-black">/</span>
          <span className="text-red-600 font-black">/</span>
          <span className="text-white">M Performance Models</span>
        </a>
      </Link>
    </nav>
  );
}

import { Fragment } from "react";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="inset-x-0 top-0 h-16 bg-gray-900">
        <div className="h-16 w-2/4 justify-evenly items-center hidden sm:flex">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/allmodels">
            <a>
              <span className="text-blue-300 font-black">/</span>
              <span className="text-purple-700 font-black">/</span>
              <span className="text-red-600 font-black">/</span>
              <span className="text-white">M Performance Models</span>
            </a>
          </Link>
        </div>
        <Dropdown />
      </nav>
    </Fragment>
  );
}

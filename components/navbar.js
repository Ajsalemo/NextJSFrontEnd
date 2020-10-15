import { Fragment } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="inset-x-0 top-0 h-16 bg-gray-900">
        <div className="h-16 w-2/4 justify-evenly items-center hidden sm:flex">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/models">
            <a>///M Performance Models</a>
          </Link>
        </div>
        <Dropdown />
      </nav>
    </Fragment>
  );
}

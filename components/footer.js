import Link from "next/link";

const Footer = () => (
  <nav className="inset-x-0 bottom-0 h-16 fixed bg-gray-900 flex justify-between sm:flex-col md:flex-row">
    <Link href="/">
      <a className="h-screen w-fit-content bg-black ml-6 pt-3 md:pt-0 md:text-4xl text-2xl">
        BMW M Performance Models.
      </a>
    </Link>
  </nav>
);

export default Footer;

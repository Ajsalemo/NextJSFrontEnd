import { Fragment } from "react";

const Navbar = () => (
  <Fragment>
    <nav className="inset-x-0 top-0 h-16 flex">
      <div className="bg-black w-1/4 h-24 relative div-blocks"></div>
      <div className="bg-gray-700 w-1/4 h-24 relative div-blocks"></div>
      <div className="bg-gray-500 w-1/4 h-24 relative div-blocks"></div>
      <div className="bg-gray-700 w-1/4 h-24 relative div-blocks"></div>
      <div className="bg-black w-1/4 h-24 relative div-blocks"></div>
    </nav>
    {/* Styling used for the navbar blocks */}
    <style jsx>{`
       .div-blocks:before {
        content: "";
        position: absolute;
        background: black;
        top: 0;
        left: -25px;
        bottom: 0;
        width: 50px;
        -webkit-transform: skew(-20deg);
        -moz-transform: skew(-20deg);
        -ms-transform: skew(-20deg);
        transform: skew(-20deg);
      }
    `}</style>
  </Fragment>
);

export default Navbar;

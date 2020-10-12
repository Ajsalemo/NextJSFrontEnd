import Head from "next/head";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import HeroImage from "../components/hero-image"

const Navbar = dynamic(() => import("../components/navbar"));

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto">
        <Head>
          <title>BMW //M Models</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroImage path="bmwm4home.jpg" />
      </div>
    </Fragment>
  );
}

import Head from "next/head";
import { Fragment } from "react";
import HeroImage from "../components/hero-image";
import Navbar from "../components/navbar"


const Home = () => (
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

export default Home;

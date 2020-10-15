import Head from "next/head";
import { Fragment } from "react";
import HeroImage from "../components/hero-image"

const BMWM4Home = require(`images/bmwm4home.jpg?jpg`);

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>BMW ///M Models</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImage path={BMWM4Home} />
    </Fragment>
  );
}

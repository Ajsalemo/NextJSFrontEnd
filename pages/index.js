import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BMWM4Home = require(`images/bmwm4home.jpg?jpg`)

const Home = () => (
  <Fragment>
    <Head>
      <title>BMW //M Models</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="-top-16 h-screen" style={{
      backgroundImage: `url(${BMWM4Home})`,
      backgroundPosition: `center`
    }}>
      <Navbar />
      <Footer />
    </div>
  </Fragment>
);

export default Home;

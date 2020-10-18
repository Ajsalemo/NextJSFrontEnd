import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import CarTemplate from "../../components/car-template";
import { getAllCarMarkdown, getAllCarMarkdownIds } from "../../lib/cars";

export default function Cars({ carData }) {
  const getCarDataImageOne = require(`images/${carData.imageOne}.jpg?jpg`);
  const getCarDataImageTwo = require(`images/${carData.imageTwo}.jpg?jpg`);
  return (
    <Fragment>
      <Head>
        <title>{carData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CarTemplate
        getCarDataImageOne={getCarDataImageOne}
        getCarDataImageTwo={getCarDataImageTwo}
        carData={carData}
      />
      <Footer />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = getAllCarMarkdownIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const carData = getAllCarMarkdown(params.id);
  return {
    props: {
      carData,
    },
  };
}

import { getAllCarMarkdown, getAllCarMarkdownIds } from "../../lib/cars";
import Head from "next/head";
import { Fragment } from "react";
import HeroImage from "../../components/hero-image";

export default function Cars({ carData }) {
  const getCarDataImage = require(`images/${carData.images}.jpg?jpg`);
  return (
    <Fragment>
      <Head>
        <title>{carData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImage path={getCarDataImage} />
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

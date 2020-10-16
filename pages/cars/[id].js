import { getAllCarMarkdown, getAllCarMarkdownIds } from "../../lib/cars";
import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
      <div className="bg-gray-800">
        <img src={getCarDataImageOne} alt={carData.type} />
        <h1 className="sm:text-6xl bg-black text-white text-3xl">
          {carData.title}
        </h1>
        <div className="pb-24 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">CLASS:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.class}
          </h3>
        </div>
        <div className="pt-24 pb-16 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">PRODUCTION:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Years:</span> {carData.production}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Type:</span> {carData.type}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Model:</span> {carData.model}
          </h3>
        </div>
        <div className="pb-24 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">TRANSMISSION:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.transmission}
          </h3>
        </div>
        <div className="h-16 bg-black"></div>
        <img src={getCarDataImageTwo} alt={carData.type} />
        <div className="h-16 bg-black"></div>
        <div className="pb-24 pb-16 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">ENGINE:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.engine_drivetrain_layout}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.engine}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.horsepower}
          </h3>
        </div>
        <div className="pb-24 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">BODY:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Designer:</span> {carData.designer}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.body_style}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Length:</span> {carData.length}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Width:</span> {carData.width}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Height:</span> {carData.height}
          </h3>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            <span className="text-red-600">Weight:</span> {carData.curb_weight}
          </h3>
        </div>
        <div className="pb-24 text-center w-fit-content my-0 mx-auto border-l-2 border-black">
          <h2 className="sm:text-4xl text-2xl text-white">ASSEMBLY:</h2>
          <h3 className="sm:text-3xl text-1xl bg-black text-white">
            {carData.assembly}
          </h3>
        </div>
      </div>
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

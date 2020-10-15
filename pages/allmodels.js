import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Fragment } from "react";
import { allModels } from "../api/api";
import Link from "next/link";

export default function allModelsPage() {
  return (
    <Fragment>
      <Head>
        <title>BMW ///M Models</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-800 h-auto sm:h-screen text-white">
        <Navbar />
        <div className="grid gap-4 grid-cols-2 gap-3 sm:grid-cols-3 text-center pt-16">
          {allModels.map((model, i) => (
            <Link
              href={`/cars/${model.type}`}
              className="inline-block text-lg"
              key={i}
            >
              <a key={i}>
                {model.type} {model.model}
              </a>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

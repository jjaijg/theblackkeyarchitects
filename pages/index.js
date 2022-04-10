import { Layout } from "@components";
import Head from "next/head";
import { AboutUs, Banner, WhatWeDo, Services, Projects } from "@sections";

import {
  useGetCategoriesWithProjects,
  getCategoriesWithProjects,
} from "services";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ categories }) {
  return (
    <div className="flex flex-col  justify-center min-h-screen pb-2">
      <Head>
        <title>TheBlackkeyArchitects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <AboutUs />
        <WhatWeDo />
        <Services />
        <Projects categories={categories} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // const res = await fetch(`${API_URL}api/project-categories?populate=*`);
  // const categories = await res.json();
  const categories = null;
  if (!categories) {
    return {
      props: {
        categories: [],
      },
    };
  }

  return {
    props: {
      categories: categories.data,
    },
  };
}

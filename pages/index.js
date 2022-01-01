import { Layout } from "@components";
import Head from "next/head";
import { Banner } from "sections";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center min-h-screen pb-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            <img src="/images/logo.png" className="bg-black inline-block" />
          </a>
        </h1>
      </Layout>
    </div>
  );
}

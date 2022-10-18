import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
// https://www.freecodecamp.org/news/nextjs-tutorial/
// https://api.sorare.com/graphql/playground

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Viszual &#128147; Sorare</title>
        <meta name="description" content="Viszual &#128147; Sorare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href={{
          pathname: "/player/[slug]",
          query: { slug: "danilo-pereira-da-silva" },
        }}
      >
        <h3>Danilo</h3>
      </Link>
      <Link
        href={{
          pathname: "/player/[slug]",
          query: { slug: "xavi-simons" },
        }}
      >
        <h3>Xavi Simons</h3>
      </Link>
    </>
  );
};

export default Home;

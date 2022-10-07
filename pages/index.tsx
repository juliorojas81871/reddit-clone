import type { NextPage } from "next";
import Head from "next/head";
import { PostBox, Feed } from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto my-7 max-w-5xl">
        <PostBox />
        <div className="flex">
          <Feed />
          <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
            <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          </div>
          {/* List subreddits */}
        </div>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next'
import Head from 'next/head'
import {PostBox} from '../components/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PostBox */}
      <PostBox />
      {/* Feed */}
    </div>
  )
}

export default Home

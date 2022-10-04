import type { NextPage } from 'next'
import Head from 'next/head'
import {PostBox, Feed} from '../components/index'

const Home: NextPage = () => {
  return (
    <div className='max-w-5xl my-7 mx-auto'>
      <Head>
        <title>Reddit clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className='flex'>
        <Feed />
      </div>
      
    </div>
  )
}

export default Home

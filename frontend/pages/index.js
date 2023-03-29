import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutS from '../components/AboutS'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>SONBOL</title>
        <meta name="description" content="Sonbol's Portfolio / Blog. Web Developer." />
        <link rel="icon" href="/sonbol.ico" />
      </Head>

      {/* Introduction About Me */}
      <AboutS />

      {/* Blog */}
      <Posts />
    </div>
  )
}

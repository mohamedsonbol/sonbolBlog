import Head from 'next/head'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'


export default function Home() {
  return (
    <div>
      <Head>
        <title>NEXT PRO</title>
        <meta name="description" content="NEXTPRO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='NEXTPRO' message='A simple portfolio built with Next.js and Tailwaind CSS framework.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}

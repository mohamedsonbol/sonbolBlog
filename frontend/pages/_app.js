import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/Nikumaru.otf', variable: '--font-Nikumaru' })

function MyApp({ Component, pageProps }) {
  return (
    <main lang="en" className={`${myFont.variable} font-sans`} >
      <Component {...pageProps} />
    </main>

  )
}

export default MyApp

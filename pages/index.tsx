import Hero from '../components/index/Hero'
import Publications from '../components/index/Publications'
import Head from 'next/head'
import About from '../components/index/About'

export default function Index() {
  return (
    <>
      <Head>
        <title>Jens Krumsieck, M.Sc.</title>
        <meta name="description" content="Jens Krumsieck is a german chemist passionate about porphyrinoids and related compounds. 
Jens Krumsieck is currently a research associate at TU Braunschweig in Martin Brörings Group working on Metalcomplexes of Isoporphyrins. He developed PorphyStruct a digital tool for the investigation of non-planar distortion modes of a variety of porphyrinoids."/>
        <meta name="keywords" content="PorphyStruct, Jens Krumsieck, ChemSharp, Isoporphyrin, CHN-Tool, Porphyrin, Corrole, Conformation, Norcorrole, Analysis, NSD, normal-coordinate structural decomposition" />
        <meta name="author" content="Jens Krumsieck" />
        <meta name="robots" content="index,follow" />
        <meta name="subject" content="Chemistry" />
        <meta name="copyright" content="Jens Krumsieck" />
        <meta name="url" content="https://jenskrumsieck.de" />
        <meta name="canonical" content="https://jenskrumsieck.de" />

        <meta property="og:title" content="Jens Krumsieck, M.Sc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jenskrumsieck.de" />
        <meta property="og:image" content="https://jenskrumsieck.de/og_image.png" />
        <meta property="og:description" content="Jens Krumsieck is currently a research associate at TU Braunschweig in Martin Brörings Group working on Metalcomplexes of Isoporphyrins. He developed PorphyStruct a digital tool for the investigation of non-planar distortion modes of a variety of porphyrinoids." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jens_ation" />
        <meta name="twitter:creator" content="@jens_ation" />
        <meta name="twitter:url" content="https://jenskrumsieck.de" />
        <meta name="twitter:title" content="Jens Krumsieck M.Sc." />
        <meta name="twitter:description" content="Jens Krumsieck is currently a research associate at TU Braunschweig in Martin Brörings Group working on Metalcomplexes of Isoporphyrins. He developed PorphyStruct a digital tool for the investigation of non-planar distortion modes of a variety of porphyrinoids." />
        <meta name="twitter:image" content="https://jenskrumsieck.de/og_image.png" />
      </Head>
      <Hero />
      <Publications />
      <About/>
    </>
  )
}

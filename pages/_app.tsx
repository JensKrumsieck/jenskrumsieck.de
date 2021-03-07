import type { AppProps } from 'next/app'
import {library} from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout'
import '../styles/global.sass'
import { faTwitter, faFacebookSquare, faGithub, faInstagram, faOrcid, faResearchgate, faXing } from '@fortawesome/free-brands-svg-icons'
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }: AppProps) {
  library.add(faTwitter, faFacebookSquare, faInstagram, faGithub, faOrcid, faResearchgate, faXing)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default appWithTranslation(MyApp)

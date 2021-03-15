import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import readData from '../cms/readData'

import PublicationList from '../components/publications/PublicationList'
import PosterList from '../components/publications/PosterList'
import Meta from '../components/Meta'
import { Publication } from '../lib/publication'
import { Poster } from '../lib/poster'

export default function Publications(props) {
    const { t } = useTranslation('common')
    return (
        <>       
            <Meta title={t('publications') + " | Jens Krumsieck"}
                desc={t('publication-description')} img="img/og_image.png" />     
            <section className="hero">
                <div className="container is-fluid">
                    <div className="hero-body">
                        <h1 className="title mt-6">{t('publications')}</h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is-fluid">
                    <PublicationList publications={props.publications} />
                </div>
            </section>

            <section className="section">
                <div className="container is-fluid">
                    <h2 className="title is-3 my-5">{t('publications-other')}</h2>
                    <PosterList posters={props.posters} />
                </div>
            </section>
        </>
    )
}

export const getStaticProps = async ({ locale }) => {

    let publications = readData<Publication>('publications')
    let posters = readData<Poster>('posters')

    publications = publications.sort((a: any, b: any) => Date.parse(a.date) - Date.parse(b.date)).reverse()
    posters = posters.sort((a, b) => Date.parse(a.conferences[0].startDate) - Date.parse((b.conferences[0].startDate))).reverse()
    return {

        props: {
            ...await serverSideTranslations(locale, ['common']),
            publications,
            posters
        }
    }
}


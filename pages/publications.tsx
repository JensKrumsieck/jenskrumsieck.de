import matter from 'gray-matter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import yaml from 'js-yaml'
import { useTranslation } from 'next-i18next'

import PublicationList from '../components/publications/PublicationList'
import PosterList from '../components/publications/PosterList'

export default function Publications(props) {
    const { t } = useTranslation('common')
    return (
        <>
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

    let publications = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const value: any = values[index]
            const { data, content } = matter(value.default, {
                engines: {
                    yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
                }
            })
            return {
                ...data,
                abstract: content
            }
        })
        return data
    })(require.context('../content/publications', true, /\.md$/))

    let posters = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const value: any = values[index]
            const { data, content } = matter(value.default, {
                engines: {
                    yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
                }
            })
            return {
                ...data
            }
        })
        return data
    })(require.context('../content/posters', true, /\.md$/))

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


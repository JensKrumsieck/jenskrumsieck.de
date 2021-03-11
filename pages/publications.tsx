import matter from 'gray-matter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PublicationList from '../components/publications/PublicationList'
import yaml from 'js-yaml'
import { useTranslation } from 'next-i18next'


export default function Publications(props) {
    const { t } = useTranslation('common')
    return (
        <>
            <section className="hero">
                <div className="container is-fluid">
                    <div className="hero-body">
                        <h1 className="title my-5">{t('publications')}</h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is-fluid">
                    <PublicationList publications={props.publications} />
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

    publications = publications.sort((s: any) => s.date).reverse()
    return {

        props: {
            ...await serverSideTranslations(locale, ['common']),
            publications
        }
    }
}


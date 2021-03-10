import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PublicationList from '../components/publications/PublicationList'


export default function Publications({ publications }) {
    return (
        <div>
            <PublicationList publications={publications} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

    const publications = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const value = values[index]
            const document = matter(value.default)
            console.log(document)
            return {
                frontmatter: document.data,
                markdownBody: document.content
            }
        })
        return data
    })(require.context('../content/publications', true, /\.md$/))

    return {

        props: {
            ...await serverSideTranslations(locale, ['common']),
            publications
        }
    }
}
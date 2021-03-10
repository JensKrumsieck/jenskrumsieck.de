import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useEffect } from "react"
import config from '../cms/config'

export default function Admin() {
    useEffect(() => {
        (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init({config})
            CMS.registerPreviewStyle()
        })()
     },[])
     return (
        <div/>
     )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})
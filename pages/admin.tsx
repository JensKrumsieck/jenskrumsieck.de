import { useEffect } from "react"
import config from '../cms/config'
import PublicationTemplate from "../components/admin/PublicationTemplate"
import PosterTemplate from "../components/admin/PosterTemplate"


export default function Admin() {
    useEffect(() => {
        (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init({ config })
            CMS.registerPreviewTemplate("publications", PublicationTemplate)
            CMS.registerPreviewTemplate("posters", PosterTemplate)
            //fetch bulma from cdn for previews
            CMS.registerPreviewStyle('https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css')
        })()
    }, [])
    return (
        <div />
    )
}
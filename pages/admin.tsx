import { useEffect } from "react"
import config from '../cms/config'

export default function Admin() {
    useEffect(() => {
        (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init({ config })
        })()
    }, [])
    return (
        <div />
    )
}
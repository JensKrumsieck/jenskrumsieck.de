import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import readData from "../cms/readData"

export default function Projects(props) {
    return (
        <div>
            {props.projects}
        </div>
    )
}

export const getStaticProps = async ({ locale }) => {

    let projects = readData('projects', locale)

    projects = projects.sort((a: any, b: any) => a.priority - b.priority).reverse()
    return {

        props: {
            ...await serverSideTranslations(locale, ['common']),
            projects
        }
    }
}
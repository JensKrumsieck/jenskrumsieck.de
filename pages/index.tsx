import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'

import Projects from '../components/index/Projects'

import PorphyStruct from "../assets/svg/porphystruct.svg"
import CHN from "../assets/svg/chn.svg"
import SPC from "../assets/svg/spc.svg"
import ChemSharp from "../assets/svg/chemsharp.svg"

import styles from "../styles/Index.module.sass"

export default function Index() {
    const { t } = useTranslation('common')
    return (
        <>
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <div className="is-half">
                            <h2 className="subtitle line-subheading my-5">Jens Krumsieck</h2>
                            <h1 className="title my-5">{t('hero-title')}</h1>
                            <div className="buttons">
                                <Link href="/projects/">
                                    <a className="button is-primary">{t('view-projects')}</a>
                                </Link>
                                <Link href="/publications/">
                                    <a className="button is-primary is-outlined">{t('read-publications')}</a>
                                </Link>
                            </div>
                            <ul className={[styles.products, "my-5"].join(' ')}>
                                <li>
                                    <Link href="/projects/porphystruct">
                                        <a title="PorphyStruct"><PorphyStruct /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/chn">
                                        <a title="CHN Tool"><CHN /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/spc">
                                        <a title="SPCViewer"><SPC /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/chemsharp">
                                        <a title="ChemSharp"><ChemSharp /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.heroafter}>
                    <Image src="/img/laptop.png" alt="laptop" layout="fill" objectFit="contain" />
                </div>
            </section>
            <Projects />

        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})
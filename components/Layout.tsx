import { useTranslation } from 'next-i18next'
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import Navbar from "../components/_Navbar"
import Social from "../components/_Social"
import HeroCircles from '../assets/svg/herocircle.svg'

export default function Layout({ children }: { children: React.ReactNode; }) {
    const { t } = useTranslation('common')
    const router = useRouter()
    const locale = router.locale
    const locales = router.locales
    var otherLocale = locales.filter((current) => current != locale)[0]
    return (
        <>            
            <header>
                <HeroCircles className="layout-circle" />
                <Navbar />
                <aside className="languageSelect">
                    <Link href={"/" + otherLocale + router.pathname} locale={false}>
                        <a title={t('change-lang')}>
                            <Image src={"/img/" + otherLocale + ".svg"} alt={otherLocale} width={18} height={18} />
                        </a>
                    </Link>
                </aside>
                <aside className="social">
                    <Social />
                </aside>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
import { useTranslation } from 'next-i18next'
import Link from "./Link";
import Logo from "../assets/svg/logo.svg"

const toggleNav = (event) => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
};

export default function Navbar() {
    const { t } = useTranslation('common')
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container is-semifluid">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <Logo /><span>Jens Krumsieck</span>
                        </a>
                    </Link>
                    <a id="burger" role="button" className="navbar-burger burger"
                        onClick={toggleNav}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarmenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarmenu" className="navbar-menu">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">{t('home')}</a>
                        </Link>
                        <Link href="/projects">
                            <a className="navbar-item">{t('projects')}</a>
                        </Link>
                        <Link href="/publications">
                            <a className="navbar-item">{t('publications')}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
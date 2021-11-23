import Link from 'next/link'
import Logo from '../assets/svg/logo.svg'
import Social from './_Social'

export default function _Footer() {
    return (
        <div className="container">
            <div className="mgrid">
                <div className="left logo">
                    <Logo />
                    <h2>Jens Krumsieck</h2>
                </div>
                <div className="right social">
                    <Social />
                </div>
            </div>
            <div className="footerNav">
                <ul>
                    <li><Link href="/imprint">Impressum</Link></li>
                    <li><Link href="/privacy">Datenschutzerklärung</Link></li>
                </ul>
            </div>
            <div className="copyright">
                2021 Jens Krumsieck - Made in Germany
            </div>
        </div>
    )
}

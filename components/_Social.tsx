import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faOrcid, faResearchgate, faTwitter, faXing, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function _Social() {
    return (
        <div className="social">
            <ul className="nav-links">
                <li>
                    <a href="https://github.com/jenskrumsieck" title="GitHub: JensKrumsieck">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.researchgate.net/profile/Jens-Krumsieck" title="Researchgate: Jens-Krumsieck">
                        <FontAwesomeIcon icon={faResearchgate} />
                    </a>
                </li>
                <li>
                    <a href="https://orcid.org/0000-0001-6242-5846" title="ORCID: 0000-0001-6242-5846">
                        <FontAwesomeIcon icon={faOrcid} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/jens_ation" title="Twitter: @jens_ation">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/jens.krumsieck/" title="Facebook: Jens.Krumsieck">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jens.ation/" title="Instagram: @jens.ation">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/JensKrumsieck" title="Jens Krumsieck on YouTube">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </li>
                <li>
                    <a href="https://www.xing.com/profile/Jens_Krumsieck" title="Xing: Jens_Krumsieck">
                        <FontAwesomeIcon icon={faXing} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jens-krumsieck-849445211/" title="LinkedIn: jens-krumsieck-849445211">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function _Social() {
    return (
        <>
            <ul>
                <li className="hint">Links for Stalking</li>
                <li className="line">–––––––––––––––</li>
                <li>
                    <a href="https://www.facebook.com/jens.krumsieck" title="Facebook">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jens.ation/" title="Instagram">
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/jens_ation" title="Twitter">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JensKrumsieck" title="GitHub">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://orcid.org/0000-0001-6242-5846" title="ORC-ID">
                        <FontAwesomeIcon icon={["fab", "orcid"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.researchgate.net/profile/Jens_Krumsieck" title="Researchgate">
                        <FontAwesomeIcon icon={["fab", "researchgate"]} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.xing.com/profile/Jens_Krumsieck" title="Xing">
                        <FontAwesomeIcon icon={["fab", "xing"]} size="2x" />
                    </a>
                </li>
            </ul>
        </>
    )
}

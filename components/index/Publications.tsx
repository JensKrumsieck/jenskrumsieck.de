import Image from 'next/image'
import IsoCoverPic from '../../public/img/iso_cover.jpg';
import PSCoverPic from '../../public/img/ps_cover.jpg';
import GradTalk from '../../public/img/grad-talk.png';
import ICPP from '../../public/img/icpp.png';
import JCF from '../../public/img/poster_jcf.png';
import ThreeMolecule from '../ThreeMolecule'

export default function Publications() {
    return (
        <section className="publications">
            <div className="wrapper">
                <ThreeMolecule file="oriluy.cif" zoom={12} />
            </div>
            <div className="container">
                <h2>Publications</h2>
                <div className="mobile-grid publication">
                    <div className="left">
                        <a href="https://doi.org/10.1002/chem.202101554"><Image src={PSCoverPic} alt="PorphyStruct Cover Picture" /></a>
                    </div>
                    <div className="right">
                        <h3>PorphyStruct – A Digital Tool for the Quantitative Assignment
                            of Non-Planar Distortion Modes in Four-Membered Porphyrinoids
                        </h3>
                        <p>
                            J. Krumsieck, M. Bröring, <span className="italic">Chem. Eur J.</span>, <span className="bold">2021</span>, <span className="italic">27</span>, 11580-11588,
                            DOI: <a href="https://doi.org/10.1002/chem.202101243">10.1002/chem.202101243</a>.
                        </p>
                        <strong>VIP Paper</strong> - <a href="http://doi.org/10.1002/chem.202101992">Front Cover</a> - <a href="http://doi.org/10.1002/chem.202101993">Cover Profile</a>
                        <br /><br />
                        Featured in:
                        <ul className="indent">
                            <li><a href="https://www.chemistryviews.org/details/ezine/11308216/PorphyStruct_Conformational_Analysis_of_Porphyrinoids.html">Chemistry Views</a></li>
                            <li>
                                <a href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/">TU Braunschweig Magazine</a>
                                (<a href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/">EN</a> | <a href="https://magazin.tu-braunschweig.de/pi-post/digitale-helfer-zur-beobachtung-von-molekuel-gymnastik/">DE</a>)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-grid publication">
                    <div className="left">
                        <a href="https://doi.org/10.1002/chem.202101554"><Image src={IsoCoverPic} alt="Isoporphyrin Cover Picture" /></a>
                    </div>
                    <div className="right">
                        <h3>Zinc- and Cadmium meso-Aryl-Isoporphyrins: Non-Aromatic NIR Dyes with Distinct Conformational Features</h3>
                        <p>Ç. Baş, J. Krumsieck, W.-D. Möller, D. Körner, M. Bröring, <span className="italic">Chem. Eur. J.</span>, <span className="bold">2021</span>, <span className="italic">27</span>, 8021 – 8029,
                            DOI: <a href="https://doi.org/10.1002/chem.202100686">10.1002/chem.202100686</a>.
                        </p>
                        <a href="https://doi.org/10.1002/chem.202101554">Cover Feature</a>
                    </div>
                </div>
                <div className="publication">
                    <h3>Metal‐Assisted One‐Pot Synthesis of Isoporphyrin Complexes</h3>
                    <p>P. Schweyen, M. Hoffmann, J. Krumsieck, B. Wolfram, X. Xie, M. Bröring, <span className="italic">Angew. Chem. Int. Ed.</span>, <span className="bold">2016</span>, <span className="italic">55</span>, 10118,
                        DOI: <a href="https://doi.org/10.1002/anie.201604297">10.1002/anie.201604297</a>.
                    </p>
                    <br />
                    Featured in:
                    <ul className="indent">
                        <li><a href="http://atlasofscience.org/isoporphyrins-bioinspired-nir-dyes/">Atlas Of Science</a></li>
                    </ul>
                </div>
                <h3>Misc</h3>
                <div className="mobile-grid publication">
                    <div className="left">
                        <Image src={JCF} alt="Conference Poster" />
                    </div>
                    <div className="right">
                        <h3>Metallkomplexe von Isoporphyrin-Liganden <span className="badge">Conference Poster</span></h3>
                        <p>J. Krumsieck, C. Bas, M. Bröring, <span className="italic">JCF Jungchemiker Tagung</span>, <span className="bold">10. Oct, 2019</span>, Braunschweig, Germany.
                        </p>
                    </div>
                </div>
                <div className="mobile-grid publication">
                    <div className="left">
                        <Image src={GradTalk} alt="Oral Presentation" />
                    </div>
                    <div className="right">
                        <h3>Isoporphyrine - Von der Natur inspirierte NIR-Farbstoffe <span className="badge">Graduation Talk</span></h3>
                        <p>J. Krumsieck, <span className="italic">Absolventenfeier TU Braunschweig</span> (Graduation Celebration), <span className="bold">23 Nov. 2018</span>, Braunschweig, Germany.
                        </p>
                    </div>
                </div>
                <div className="mobile-grid publication">
                    <div className="left">
                        <Image src={ICPP} alt="Conference Poster" />
                    </div>
                    <div className="right">
                        <h3>Cobalt Isoporphyrins <span className="badge">Conference Poster</span></h3>
                        <p>J. Krumsieck, C. Bas, P.Schweyen, M. Bröring,
                            <br />
                            <span className="italic">ICPP 10</span>, <span className="bold">01. Jul. 2018 -  06. Jul. 2018</span>, Munich, Germany,
                            <br />
                            <span className="italic">NDDK</span>, <span className="bold">03. Sep. 2018 - 04. Sep. 2018</span>, Braunschweig, Germany,
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

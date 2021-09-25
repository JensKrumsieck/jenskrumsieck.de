
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PsLogo from '../../assets/svg/ps_logo.svg'
import CHNLogo from '../../assets/svg/CHN.svg'
import CSLogo from '../../assets/svg/cs_icon.svg'
import React from 'react'
import HeroImg from '../../assets/svg/hero.svg';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalculator, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-left">
                    <div className="project">
                        <h2 className="headline-icon">
                            <PsLogo className="svg-inline--fa fa-w-14 fa-lg" />
                            <span>PorphyStruct</span>
                        </h2>
                        <p><strong>PorphyStruct</strong>, a new digital tool for the analysis of non-planar distortion modes of different porphyrinoids - The program makes use of the <strong>normal-coordinate structure decomposition</strong> technique (NSD) and employs sets of normal modes equivalent to those established for porphyrins in order to describe the out-of-plane dislocation pattern of perimeter atoms from corroles, norcorroles, porphycenes and other porphyrinoids quantitatively and in analogy to the established terminology.</p>
                        <div className="buttons">
                            <a href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest" className="button primary">
                                <FontAwesomeIcon icon={faDownload} />
                                <span>Download</span>
                            </a>
                            <a href="https://github.com/JensKrumsieck/PorphyStruct" className="button primary">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <h2 className="headline-icon">
                            <CHNLogo className="svg-inline--fa fa-w-14 fa-lg" />
                            <span>CHN-Tool</span>
                        </h2>
                        <p>The CHN-Tool recalculates the composition of elemental analysis (CHN) by taking possible impurities or solvents into account. Organic solvents are often found in the unit cell after crystallization. These can be easily included in the molecular formula with this tool and adjusted to the experimental elemental analysis data.</p>
                        <div className="buttons">
                            <a href="https://chn.jenskrumsieck.de" className="button primary">
                                <FontAwesomeIcon icon={faCalculator} />
                                <span>CHN-Tool</span>
                            </a>
                            <a href="https://github.com/JensKrumsieck/CHN-Tool" className="button primary">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <h2 className="headline-icon">
                            <CSLogo className="svg-inline--fa fa-w-14 fa-lg" />
                            <span>ChemSharp</span>
                        </h2>
                        <p>A Library for processing of chemistry related files (aiming at spectroscopy and structural files) - To give multiple projects a single codebase</p>
                        <div className="buttons">
                            <a href="https://github.com/JensKrumsieck/ChemSharp" className="button primary">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <HeroImg />
                </div>
            </div>
        </section>
    )
}

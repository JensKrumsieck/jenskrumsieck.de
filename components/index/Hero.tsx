import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Social from '../_Social'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-left">
                    <h2 className="hero-subheadline upper light stretch">Jens Krumsieck, M.Sc.</h2>
                    <div className="headline-block">
                        <h1>Chemist &amp; Developer</h1>
                        <h2>PhD Student at TU Braunschweig</h2>
                    </div>
                    <p>
                        Passionate about Porphyrinoids and related compounds.
                        Working on Synthesis of <strong>Isoporphyrin</strong>-Complexes and <strong>PorphyStruct</strong> a digital tool for the investigation of non-planar distortion modes of a variety of porphyrinoids.
                    </p>
                    <a href="/" className="button primary">
                        <FontAwesomeIcon icon={faBook} />
                        <span>Read Publications</span>
                    </a>
                    <Social />
                </div>
                <div className="hero-right">
                    {/*TODO: Insert Images*/}
                </div>
            </div>
        </section>
    )
}

import AboutImg from '../../assets/svg/about.svg';

export default function About() {
    return (
        <section className="aboutme">
            <div className="container">
                <div className="grid">
                    <div className="left">
                        <h2>About Me</h2>
                        <p>
                            Jens Krumsieck is a german chemist passionate about porphyrinoids and related compounds.
                            Porphyrinoids are can be found in a variety of proteins. The best-known example of these kind of tetrapyrrolic macrocycles is heme b which can be found in hemoglobin, the red blood pigment. Jens Krumsieck is currently a research associate at TU Braunschweig in Martin Brörings Group working on Metalcomplexes of Isoporphyrins. He later started PorphyStruct as a side-project - PorphyStruct a digital tool for the investigation of non-planar distortion modes of a variety of porphyrinoids.
                        </p>
                        <div className="cv">
                            <ul>
                                <li>
                                    <span className="date">2018 - </span>
                                    <h3>Research Associate (PhD Studies)</h3>
                                    <span className="description">Technische Universität Braunschweig</span>
                                </li>
                                <li>
                                    <span className="date">2016 - 2018</span>
                                    <h3>Master in Chemistry (With distinction)</h3>
                                    <span className="description">Thesis: Kobaltkomplexe von Isoporphyrin-Liganden</span>
                                    <span className="description">Technische Universität Braunschweig</span>
                                </li>
                                <li>
                                    <span className="date">2011 - 2016</span>
                                    <h3>Bachelor in Teaching Chemistry &amp; Maths</h3>
                                    <span className="description">+  3 Semesters of fulfilling requirements for Master Chemistry</span>
                                    <span className="description">Thesis: Effiziente Eintopfsynthese neuer Metalloisoporphyrinoide</span>
                                    <span className="description">Technische Universität Braunschweig</span>
                                </li>
                                <li>
                                    <span className="date">2004 - 2011</span>
                                    <h3>Abitur</h3>
                                    <span className="description">Gymnasium Uslar</span>
                                </li>                                
                                <li>
                                    <span className="date">2002 - 2004</span>
                                    <span className="description">Orientierungsstufe Uslar</span>
                                </li>                                
                                <li>
                                    <span className="date">1998 - 2002</span>
                                    <span className="description">Grundschule Uslar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <AboutImg/>
                    </div>
                </div>
            </div>
        </section>
    )
}

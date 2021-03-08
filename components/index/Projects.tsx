import hljs from 'highlight.js';
import csharp from 'highlight.js/lib/languages/csharp'
import React, { useEffect } from "react"
import { useTranslation, Trans } from 'next-i18next';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ThreeMolecule from "../ThreeMolecule"

import PorphyStruct from "../../assets/svg/porphystruct.svg"
import HeroCircles from '../../assets/svg/herocircle.svg'
import ChemSharp from "../../assets/svg/chemsharp.svg"

import 'highlight.js/styles/stackoverflow-dark.css'
import styles from "../../styles/Index.module.sass"

export default function Projects() {
    hljs.registerLanguage('csharp', csharp);
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    const { t } = useTranslation('common')
    return (
        <>
            <section className="projects">
                <HeroCircles className={styles.leftCenteredCircle} />
                <div className={styles.isSvgBackground}>
                    <PorphyStruct />
                </div>
                <div className="container is-fluid">
                    <div className={["columns", "is-vcentered", "is-variable", "is-8", styles.porphystruct].join(" ")}>
                        <div className={["column", styles.screenshot].join(" ")}>
                            <video src="img/porphystruct.webm" loop autoPlay preload="true" />
                        </div>
                        <div className="column">
                            <h2 className="title icon-text">
                                <div className="icon is-large">
                                    <PorphyStruct />
                                </div>
                                <span className={styles.ps}>PorphyStruct</span>
                            </h2>
                            <p className="my-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis eius culpa! Reprehenderit vero in rem amet distinctio tenetur nobis excepturi, rerum corporis facilis iusto iste eveniet vel temporibus nisi illum, cum dicta quo! Harum veniam velit hic vel neque quam, unde consequatur fuga in nihil cupiditate repudiandae ut? Facilis, possimus, ullam deleniti consequatur, quos dicta nulla odit animi officiis vitae dolorum magnam incidunt omnis exercitationem natus porro explicabo iste aspernatur! Tenetur, expedita illum! Corrupti molestiae atque fugit blanditiis, saepe illum ex error porro. Doloremque facilis dolorem quam, saepe ut dolores velit ad odit, praesentium pariatur totam distinctio vel libero dicta ex rerum?
                            </p>
                            <div className="buttons my-7">
                                <a href="" className="button is-primary">Tell me more!</a>
                                <a href="https://github.com/JensKrumsieck/PorphyStruct" className="button is-primary is-outlined">
                                    <span className="icon-text">
                                        <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
                                        <span>GitHub Repository</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects">
                <HeroCircles className={styles.rightCenteredCircle} />
                <div className="container is-fluid">
                    <div className="columns is-vcentered is-variable is-8">
                        <div className="column">
                            <h2 className="title">
                                Synthesis of Isoporphyrins
                            </h2>
                            <p className="my-7">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus neque quia explicabo itaque molestiae doloremque odit officiis porro quae! Veritatis, autem odio. Officiis dolor aperiam vitae nesciunt quisquam blanditiis cumque, eius, numquam porro sed molestias nemo doloribus inventore aspernatur quia. Labore voluptate expedita obcaecati architecto illum dignissimos error porro!
                            </p>
                            <div className="buttons my-7">
                                <a href="" className="button is-primary">Tell me more!</a>
                                <a href="" className="button is-primary is-outlined">
                                    <div className="icon-text">
                                        <FontAwesomeIcon icon={["fab", "orcid"]} className="icon" />
                                        <span>Read Publications</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={["column", styles.threejs].join(" ")}>
                            <ThreeMolecule file="molecules/oriluy.cif" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="notification is-black my-7 projects">
                <div className="container is-fluid">
                    <div className={["columns", "is-vcentered", "is-variable", "is-8", styles.chemsharp].join(" ")}>
                        <div className="column">
                            <div>
                                <pre className="code">
                                    <code className="csharp">
                                        {`
//Creates a molecule from cif file
const string path = "files/cif.cif";
var mol = MoleculeFactory.Create(path);

//You can also create molecules by selecting the provider yourself
const string path = "files/benzene.mol2";
var provider = new Mol2DataProvider(path);
var mol = new Molecule(provider);

//...or by just adding the Atoms & Bonds as Lists
const string path = "files/cif.cif";
var provider = new CIFDataProvider(path);
var mol = new Molecule(provider.Atoms, provider.Bonds);
                                `}
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="column">
                            <ChemSharp className={styles.chemsharpLogo} />
                            <p className="my-7">
                                {t('chemsharp-description')}
                            </p>
                            <div className="buttons my-7">
                                <a href="" className="button is-primary">Tell me more!</a>
                                <a href="https://github.com/JensKrumsieck/ChemSharp" className="button is-primary is-outlined">
                                    <span className="icon-text has-text-white">
                                        <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
                                        <span>GitHub Repository</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

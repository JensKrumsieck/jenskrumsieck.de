import ReactMarkdown from "react-markdown";

export default function PublicationList({ publications }) {
    if (publications === 'undefined') return null
    return (
        <div>
            {!publications && <div>No pubs!</div>}
            <ul>
                {publications &&
                    publications.map((pub) => {
                        return (
                            <li key={pub.title} className="box">
                                <div className="columns">
                                    <div className="column is-one-third is-one-quarter-widescreen">
                                        <figure className="image is-quare">
                                            <img src={pub.image} alt="image" />
                                            <figcaption className="is-size-7 has-text-centered is-italic has-text-weight-light">{pub.imageCopyright}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <h3 className="title is-size-2 is-spaced">{pub.title}</h3>
                                        <h4 className="subtitle">
                                            {pub.authors.map((a) => {
                                                var parts: string[] = a.split(" ");
                                                var lastName = parts.pop()
                                                var initials = parts.map(s => {
                                                    var twoNamers = s.split("-")
                                                    return twoNamers.map(n => n.substring(0, 1)).join(".-")
                                                })
                                                return (
                                                    <span key={a}>
                                                        {initials.join(". ")}. {lastName},&nbsp;
                                                    </span>
                                                )
                                            })}                                            
                                            <span className="is-italic">{pub.journal.journalAbbr}</span>,&nbsp;
                                            <span className="has-text-weight-bold">{pub.date.split('-')[0]}</span>,&nbsp;
                                            {(pub.journal.issue != 0) ?
                                                (
                                                    <>
                                                        <span className="is-italic">{pub.journal.issue}</span>,&nbsp;
                                                        <span>{pub.journal.page}.</span>
                                                    </>
                                                )
                                                : <span className="is-italic">accepted article.</span>
                                            }
                                            <br/>{pub.annotation != "" ? <span className="is-size-7 has-text-centered is-italic has-text-weight-light">{pub.annotation}</span> : ""}
                                        </h4>
                                        <div className="content has-text-justified">
                                            <ReactMarkdown allowDangerousHtml>{pub.abstract}</ReactMarkdown>
                                        </div>
                                        {pub.doi != "" ?
                                            (
                                                <>
                                                    <div>
                                                        DOI: <a href={"https://doi.org/" + pub.doi}>{pub.doi}</a>
                                                    </div>
                                                    <div className="buttons my-5">
                                                        <a className="button is-primary is-outlined" href={"https://doi.org/" + pub.doi}>
                                                            Read Article
                                                        </a>
                                                    </div>
                                                </>
                                            )
                                            : ""}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
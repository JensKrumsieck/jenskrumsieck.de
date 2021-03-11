export default function PosterList({ posters }) {
    if (posters === 'undefined') return null
    return (
        <div>
            {!posters && <div>No pubs!</div>}
            <ul>
                {posters &&
                    posters.map((p) => {
                        return (
                            <li key={p.title} className="box">
                                <div className="columns">
                                    <div className="column is-1">
                                        <figure className="image is-quare">
                                            <img src={p.image} alt="image" />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <h3 className="title is-size-4 is-spaced">{p.title}</h3>
                                        <h4 className="subtitle is-6">
                                            {p.authors.map((a) => {
                                                var parts: string[] = a.split(" ");
                                                var lastName = parts.pop()
                                                var initials = parts.map(s => {
                                                    var twoNamers = s.split("-")
                                                    return twoNamers.map(n => n.substring(0, 1)).join(".-")
                                                })
                                                return (
                                                    <span>
                                                        {initials.join(". ")}. {lastName},&nbsp;
                                                    </span>
                                                )
                                            })}
                                        </h4>
                                        <ul>
                                            {p.conferences.map(c => {
                                                return(
                                                    <li key={c.title}>
                                                        <p>{c.title} | {c.startDate} {c.EndDate && c.EndDate != "" ? "- " + c.EndDate : ""}  {c.location && c.location != "" ? " | " + c.location : ""}</p>
                                                        {c.url && c.url != "" ? <a href={c.url}>Read Publication</a> : ""}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
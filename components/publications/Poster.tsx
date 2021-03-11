import moment from 'moment'
import { Poster as PosterType } from '../../lib/poster'
import { useRouter } from 'next/router'

export default function Poster(props) {
    const router = useRouter()
    const locale =  router?.locale??"en"
    var p: PosterType = props.poster;
    return (
        <div className="columns">
            <div className="column is-1">
                <figure className="image is-quare">
                    <img src={p.image} alt="image" />
                </figure>
            </div>
            <div className="column">
                <h3 className="title is-size-4 is-spaced">{p.title} {p.type && p.type != "misc" && <span className="tag is-dark">{p.type.charAt(0).toUpperCase() + p.type.slice(1)}</span>}</h3>
                <h4 className="subtitle is-6">
                    {p.authors.map((a, i) => {
                        var parts: string[] = a.split(" ");
                        var lastName = parts.pop()
                        var initials = parts.map(s => {
                            var twoNamers = s.split("-")
                            return twoNamers.map(n => n.substring(0, 1)).join(".-")
                        })
                        return (
                            <span key={a}>{initials.join(". ")}. {lastName}{i != p.authors.length - 1 && ", "}</span>
                        )
                    })}
                </h4>
                <ul>
                    {p.conferences.map(c => {
                        return (
                            <li key={c.title}>
                                <h5 className="is-6 has-text-weight-semibold">
                                    <span>{c.title}</span>
                                    {c.url && c.url != "" &&
                                        (
                                            <>
                                                &nbsp;
                                                <a className="tag is-danger" href={c.url}>Read Publication</a>
                                            </>
                                        )}
                                </h5>
                                <p>
                                    <span className="is-italic">{moment(c.startDate).locale(locale).format("Do MMM YYYY")} {c.endDate && c.endDate != "" && "- " + moment(c.endDate).locale(locale).format("Do MMM YYYY")} </span>
                                    {c.location && c.location != "" && " @ " + c.location}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

import Poster from './Poster'

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
                                <Poster poster={p} />
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
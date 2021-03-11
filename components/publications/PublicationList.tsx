import Publication from './Publication'

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
                                <Publication entry={pub}/>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
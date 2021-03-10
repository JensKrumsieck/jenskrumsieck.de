
export default function PublicationList({ publications }) {
    if (publications === 'undefined') return null
    return (
        <div>
            {!publications && <div>No pubs!</div>}
            <ul>
                {publications &&
                    publications.map((pub) => {
                        return (
                            <li key={pub.title}>
                               <img src={pub.image} alt="image"/>
                               <h3 className="title">{pub.title}</h3>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
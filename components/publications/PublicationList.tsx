import Link from 'next/link'

export default function PublicationList({ publications }) {
    if (publications === 'undefined') return null
    return (
        <div>
            {!publications && <div>No pubs!</div>}
            <ul>
                {publications &&
                    publications.map((pub) => {
                        return (
                            <li key={pub.slug}>
                                <Link href={{ pathname: `/pub/${pub.slug}` }}>
                                    <a>{pub.frontmatter.title}</a>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
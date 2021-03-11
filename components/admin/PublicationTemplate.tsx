import Publication from '../publications/Publication'

import { Journal, Publication as PublicationType } from '../../lib/publication'

export default function PublicationTemplate(props) {
    var entry = props.entry;
    var image = entry.getIn(['data', 'image']);
    const data: PublicationType = {
        title: entry.getIn(['data', 'title']),
        authors: entry.getIn(['data', 'authors']),
        journal: {
            journalAbbr: entry.getIn(['data', 'journal', 'journalAbbr']),
            issue: entry.getIn(['data', 'journal', 'issue']),
            page: entry.getIn(['data', 'journal', 'page'])
        } as Journal,
        date: entry.getIn(['data', 'date']),
        image: props.getAsset(image),
        abstract: entry.getIn(['data', 'body']),
        doi: entry.getIn(['data', 'doi'])
    }

    return (
        <section className="section">
            <Publication entry={data} />
        </section>
    )
}

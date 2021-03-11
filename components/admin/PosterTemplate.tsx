import Poster from '../publications/Poster'
import { Poster as PosterType } from '../../lib/poster'

export default function PosternTemplate(props) {
    var entry = props.entry;
    var image = entry.getIn(['data', 'image']);
    const data: PosterType = {
        title: entry.getIn(['data', 'title']),
        authors: entry.getIn(['data', 'authors']),
        image: props.getAsset(image),
        type: entry.getIn(['data', 'type']),
        conferences: entry.getIn(['data', 'conferences']).toJS()
    }

    return (
        <section className="section">
            <Poster poster={data} />
        </section>
    )
}

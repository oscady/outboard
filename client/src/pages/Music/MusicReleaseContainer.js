import { Link } from 'react-router-dom';
import MusicItem from './MusicItem';

const MusicReleaseContainer = ({ releases, toggle }) => {
	return releases.map((release) => (
		<Link key={release._id} to={`/music/${release._id}`}>
			<MusicItem
				artwork={release.artwork}
				title={release.title}
				date={release.date}
				toggle={toggle}
				release={release}
			/>
		</Link>
	));
};

export default MusicReleaseContainer;

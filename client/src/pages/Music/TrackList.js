import { TracklistContainer } from './TrackList.styled';
import { FaPlay, FaPause } from 'react-icons/fa';

const Tracklist = (props) => {
	return (
		<TracklistContainer>
			<h1>outboard 001</h1>
			<h2>feb 2020</h2>
			<h3>featured tracks</h3>
			<ul>
				<li>
					<p>
						<FaPlay style={{ cursor: 'pointer', marginRight: '10px' }} /> rimba - track 1
					</p>{' '}
					<a>buy track</a>
				</li>
				<li>
					<p>
						<FaPlay style={{ cursor: 'pointer', marginRight: '10px' }} /> pantai - track 2
					</p>{' '}
					<a>buy track</a>
				</li>
				<li>
					<p>
						<FaPlay style={{ cursor: 'pointer', marginRight: '10px' }} /> the electric tingle - track 3
					</p>{' '}
					<a>buy track</a>
				</li>
				<li>
					<p>
						<FaPause style={{ cursor: 'pointer', marginRight: '10px' }} /> transient being dsada- track 4
						(dub mix)
					</p>{' '}
					<a>buy track</a>
				</li>
				<li>
					<p>
						<FaPlay style={{ cursor: 'pointer', marginRight: '10px' }} /> nr fahrenheit - track 5
					</p>{' '}
					<a>buy track</a>
				</li>
			</ul>
		</TracklistContainer>
	);
};

export default Tracklist;

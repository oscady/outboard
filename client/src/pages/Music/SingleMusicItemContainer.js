import { useState, useEffect } from 'react';
import { SingleMusicContainerStyled } from './SingleMusicItem.styled';
import Tracklist from './TrackList';
import { Container } from './SingleMusicItem.styled';
import PropTypes from 'prop-types';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setReleasePlaylist, getReleases } from '../../actions/releaseActions';
import { getPlaylist } from '../../actions/audioActions';

// const variants = {
// 	open: {
// 		opacity: 1,
// 		x: 0,
// 		transition: {
// 			type: 'tween',
// 			stiffness: 0,
// 			restDelta: 10,
// 			mass: 0.5
// 		}
// 	},
// 	closed: {
// 		opacity: 0,
// 		x: '100%',
// 		transition: {
// 			x: { type: 'spring', stiffness: 100 },
// 			damping: 10,
// 			mass: 0.1,
// 			when: 'beforeChildren'
// 		}
// 	}
// };

const SingleMusicItemContainer = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ currentPlaylist, setCurrentPlaylist ] = useState([]);

	const { id } = useParams();

	useEffect(
		() => {
			props.getReleases();
			props.getPlaylist(id);
			console.log(props);
		},
		[ props.match.params.id ]
	);

	useEffect(
		() => {
			setCurrentPlaylist(props.playlist);
		},
		[ props.playlist ]
	);
	return (
		<SingleMusicContainerStyled>
			<h3 onClick={() => setOpen(false)}>back</h3>

			{currentPlaylist ? (
				<Container>
					<img src={currentPlaylist.artwork} />
					<Tracklist playlist={currentPlaylist} />
				</Container>
			) : (
				<div>loading...</div>
			)}
		</SingleMusicContainerStyled>
	);
};

SingleMusicItemContainer.propTypes = {
	setReleasePlaylist: PropTypes.func.isRequired,
	getReleases: PropTypes.func.isRequired,
	getPlaylist: PropTypes.func.isRequired,
	audio: PropTypes.object,
	release: PropTypes.object
};

const mapStateToProps = (state) => ({ release: state.release, playlist: state.audio.playlist, audio: state.audio });

export default withRouter(
	connect(mapStateToProps, { getReleases, setReleasePlaylist, getPlaylist })(SingleMusicItemContainer)
);

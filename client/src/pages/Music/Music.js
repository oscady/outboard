import { Fragment, useState, lazy, Suspense, useEffect } from 'react';
import { MusicStyled, ContentContainer } from './Music.styled';
import Background from '../../components/Basic/Background/Background';
import { releaseItems } from '../../data/releases';
import { Container } from './SingleMusicItem.styled';
import MusicReleaseContainer from './MusicReleaseContainer';
import { motion } from 'framer-motion';
import Tracklist from './TrackList';
import { PageContainer } from '../Basic/PageContainer.styled';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTracks } from '../../actions/trackUploadActions';
import { getReleases } from '../../actions/releaseActions';
const SingleMusicItemContainer = lazy(() => import('./SingleMusicItemContainer'));
const renderLoader = () => <p>Loading</p>;

const Music = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ theImage, setTheImage ] = useState();
	const [ currentPlaylist, setCurrentPlaylist ] = useState();
	// var item = document.getElementsByTagName('MAIN')[0];

	// window.addEventListener('wheel', function(e) {
	// 	if (e.deltaY > 0) item.scrollLeft += 100;
	// 	else item.scrollLeft -= 100;
	// });

	useEffect(() => {
		props.getReleases();
	}, []);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<PageContainer>
			<Background
				style={{ backgroundSize: '80% 70% !important' }}
				background='https://cdn.mems.lol/outboard/leaves-image.png'
			/>
			{props.releases ? (
				<MusicStyled>
					<h1>PREVIOUS RELEASES</h1>
					<ContentContainer>
						<MusicReleaseContainer
							setCurrentPlaylist={setCurrentPlaylist}
							setTheImage={setTheImage}
							toggle={toggle}
							releases={props.releases}
						/>
					</ContentContainer>
				</MusicStyled>
			) : (
				<div>...loading</div>
			)}
		</PageContainer>
	);
};

Music.propTypes = {
	getTracks: PropTypes.func.isRequired,
	track: PropTypes.object,
	getReleases: PropTypes.func.isRequired,
	release: PropTypes.object,
	playing: PropTypes.bool,
	currentTrack: PropTypes.object
};

const mapStateToProps = (state) => ({ audio: state.audio, track: state.track, releases: state.release.releases });

export default withRouter(connect(mapStateToProps, { getTracks, getReleases })(Music));

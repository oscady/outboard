import { React, useEffect, useState, Fragment } from 'react';
import { artists as artistData } from '../../data/artists';
import {
	ArtistsStyled,
	ArtistItem,
	ArtistPage,
	Container,
	Header,
	ContentContainer,
	SingleArtist
} from './Artists.styled';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import { loremIpsum, Avatar, name, surname, fullname, username } from 'react-lorem-ipsum';
import { PageContainer } from '../Basic/PageContainer.styled';
import { getTracks } from '../../actions/trackUploadActions';
import { getReleases } from '../../actions/releaseActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Artists = (props) => {
	const [ artists, setArtists ] = useState(artistData);
	const [ viewArtist, setViewArtist ] = useState(false);
	const [ singleArtist, setSingleArtist ] = useState();

	useEffect(() => {}, []);
	const toggle = (object) => {
		setSingleArtist(object);
		setViewArtist(!viewArtist);
	};
	return (
		<PageContainer>
			{viewArtist ? (
				<ContentContainer>
					<SingleArtist animate={{ opacity: 1 }}>
						<div style={{ paddingLeft: '80px' }}>
							<h1 style={{ marginBottom: '60px' }}>otbd002</h1>

							<h1>{singleArtist.artistName}</h1>
						</div>
						<div>
							<img src={singleArtist.artwork} />
						</div>
						<div>
							<h1>biography</h1>
							{loremIpsum({ p: 3, avgSentencesPerParagraph: 3 }).slice(0, 3).map((text, index) => (
								<p className='text' key={index}>
									{text}
								</p>
							))}
						</div>
						<div>
							<h3 onClick={toggle}>back</h3>
						</div>
					</SingleArtist>
				</ContentContainer>
			) : (
				<ContentContainer>
					<Header>
						<h1>featured artists</h1>
					</Header>
					<Container>
						{props.release.releases ? (
							props.release.releases.map((release) => (
								<div key={release._id}>
									<h2>{release.name}</h2>
									<ArtistsStyled animate={{ opacity: 1 }}>
										{release.tracks.map((artist) => (
											<ArtistItem key={artist._id} onClick={() => toggle(artist)}>
												<img src={artist.artwork} width='350' height='350' alt='Avatar' />
												<h3>{artist.artistName}</h3>
											</ArtistItem>
										))}
									</ArtistsStyled>
								</div>
							))
						) : null}
					</Container>
				</ContentContainer>
			)}
		</PageContainer>
	);
};

Artists.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	setCurrentTrack: PropTypes.func.isRequired,
	track: PropTypes.object,
	getReleases: PropTypes.func.isRequired,
	release: PropTypes.object,
	audio: PropTypes.object,
	playing: PropTypes.bool,
	currentTrack: PropTypes.array
};

const mapStateToProps = (state) => ({
	audio: state.audio,
	playing: state.audio.playing,
	track: state.track,
	release: state.release,
	currentTrack: state.audio.currentTrack
});

export default connect(mapStateToProps, { getReleases, getTracks })(Artists);

import { Fragment, useState, lazy, Suspense, useEffect } from 'react';
import { MusicStyled, ContentContainer } from './Music.styled';
import Background from '../../components/Basic/Background/Background';
import { loremIpsum, Avatar, name, surname, fullname, username } from 'react-lorem-ipsum';
import { releaseItems } from '../../data/releases';
import { Container } from './SingleMusicItem.styled';
import MusicReleaseContainer from './MusicReleaseContainer';
import { motion } from 'framer-motion';
import Tracklist from './TrackList';
import { PageContainer } from '../Basic/PageContainer.styled';
const SingleMusicItemContainer = lazy(() => import('./SingleMusicItemContainer'));
const renderLoader = () => <p>Loading</p>;

const Music = () => {
	const [ releases, setReleases ] = useState(releaseItems);
	const [ isOpen, setIsOpen ] = useState(false);
	// var item = document.getElementsByTagName('MAIN')[0];

	// window.addEventListener('wheel', function(e) {
	// 	if (e.deltaY > 0) item.scrollLeft += 100;
	// 	else item.scrollLeft -= 100;
	// });

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<PageContainer>
			<Suspense fallback={renderLoader()}>
				<Background
					style={{ backgroundSize: '80% 70% !important' }}
					background='https://cdn.mems.lol/outboard/leaves-image.png'
				/>
				<SingleMusicItemContainer open={isOpen} isOpen={isOpen} setIsOpen={setIsOpen}>
					<h3 onClick={toggle}>back</h3>

					<Container animate={{ opacity: 1 }}>
						<Avatar gender='all' className='avatar' width='650' height='650' alt='Avatar' />
						<Tracklist />
					</Container>
				</SingleMusicItemContainer>
			</Suspense>

			<MusicStyled>
				<h1>PREVIOUS RELEASES</h1>
				<ContentContainer>
					<MusicReleaseContainer toggle={toggle} releases={releases} />
				</ContentContainer>
			</MusicStyled>
		</PageContainer>
	);
};

export default Music;

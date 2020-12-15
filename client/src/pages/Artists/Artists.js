import { React, useEffect, useState } from 'react';
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

const Artists = (props) => {
	const [ artists, setArtists ] = useState(artistData);
	const [ viewArtist, setViewArtist ] = useState(false);

	const toggle = () => {
		setViewArtist(!viewArtist);
	};
	return (
		<ArtistPage>
			<Header>
				<h1>featured artists</h1>
			</Header>
			{viewArtist ? (
				<ContentContainer>
					<SingleArtist animate={{ opacity: 1 }}>
						<div style={{ paddingLeft: '80px' }}>
							<h1 style={{ marginBottom: '60px' }}>otbd002-mar 2020</h1>

							<h1>{username()}</h1>
						</div>
						<div>
							<Avatar gender='all' className='avatar' width='650' height='650' alt='Avatar' />
						</div>
						<div>
							<h1>biography</h1>
							{loremIpsum({ p: 3, avgSentencesPerParagraph: 3 }).slice(0, 3).map((text) => (
								<p className='text' key={text}>
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
					<Container>
						<h2>OTBD002 - MAR 2020</h2>
						<ArtistsStyled animate={{ opacity: 1 }}>
							{artists.map((artist) => (
								<ArtistItem onClick={toggle}>
									<Avatar gender='all' className='avatar' width='350' height='350' alt='Avatar' />
									<h3>{username()}</h3>
								</ArtistItem>
							))}
						</ArtistsStyled>
					</Container>
					<Container>
						<h2>OTBD001 - FEB 2020</h2>
						<ArtistsStyled animate={{ opacity: 1 }}>
							{artists.map((artist) => (
								<ArtistItem onClick={toggle}>
									<Avatar gender='all' className='avatar' width='350' height='350' alt='Avatar' />
									<h3>{username()}</h3>
								</ArtistItem>
							))}
						</ArtistsStyled>
					</Container>
					<Container>
						<h2>OTBD001 - FEB 2020</h2>
						<ArtistsStyled animate={{ opacity: 1 }}>
							{artists.map((artist) => (
								<ArtistItem onClick={toggle}>
									<Avatar gender='all' className='avatar' width='350' height='350' alt='Avatar' />
									<h3>{username()}</h3>
								</ArtistItem>
							))}
						</ArtistsStyled>
					</Container>
				</ContentContainer>
			)}
		</ArtistPage>
	);
};

export default Artists;

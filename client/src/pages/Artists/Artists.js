import { React, useEffect, useState } from 'react';
import { artists as artistData } from '../../data/artists';
import { ArtistsStyled, ArtistItem, ArtistPage, Container } from './Artists.styled';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import { loremIpsum, Avatar, name, surname, fullname, username } from 'react-lorem-ipsum';

const Artists = (props) => {
	const [ artists, setArtists ] = useState(artistData);
	console.log(artists);
	return (
		<ArtistPage>
			<h1>featured artists</h1>

			<Container>
				<h2>OTBD002 - MAR 2020</h2>
				<ArtistsStyled animate={{ opacity: 1 }}>
					{artists.map((artist) => (
						<ArtistItem>
							<Avatar gender='male' className='avatar' width='350' height='350' alt='Avatar' />
							<h3>{username()}</h3>
						</ArtistItem>
					))}
				</ArtistsStyled>
			</Container>

			<Container>
				<h2>OTBD001 - FEB 2020</h2>
				<ArtistsStyled animate={{ opacity: 1 }}>
					{artists.map((artist) => (
						<ArtistItem>
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
						<ArtistItem>
							<Avatar gender='all' className='avatar' width='350' height='350' alt='Avatar' />
							<h3>{username()}</h3>
						</ArtistItem>
					))}
				</ArtistsStyled>
			</Container>
		</ArtistPage>
	);
};

export default Artists;

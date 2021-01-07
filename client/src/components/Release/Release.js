import { ReleaseStyled } from './Release.styled';

const Release = (props) => {
	return (
		<ReleaseStyled animate={{ opacity: 1 }}>
			<h1>{props.header}</h1>
			<h2>{props.title + ' ' + props.date}</h2>
			<div>
				<img src={props.artwork} alt={props.artist} />
			</div>
			<h2>RELEASES FROM:</h2>
			{props.artists.map((artist) => <h3 key={artist}>{artist} / </h3>)}
		</ReleaseStyled>
	);
};

export default Release;

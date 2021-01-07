import { MusicItemStyled } from './Music.styled';

const MusicItem = (props) => {
	return (
		<MusicItemStyled>
			<img src={props.release.artwork} />
			<div>
				<h2>{props.release.name}</h2>
			</div>
		</MusicItemStyled>
	);
};

export default MusicItem;

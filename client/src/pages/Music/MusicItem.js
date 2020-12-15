import { MusicItemStyled } from './Music.styled';

const MusicItem = (props) => {
	return (
		<MusicItemStyled onClick={props.toggle} animate={{ opacity: 1 }}>
			<img src={props.artwork} />
			<div>
				<h2>
					{props.title} {props.date}
				</h2>
			</div>
		</MusicItemStyled>
	);
};

export default MusicItem;

import { AudioPlayerStyled } from './AudioPlayer.styled';
import { FaPlay } from 'react-icons/fa';

const AudioPlayer = (props) => {
	return (
		<AudioPlayerStyled>
			<FaPlay />
		</AudioPlayerStyled>
	);
};

export default AudioPlayer;

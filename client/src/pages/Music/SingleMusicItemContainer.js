import { motion } from 'framer-motion';
import { SingleMusicContainerStyled } from './SingleMusicItem.styled';

const variants = {
	open: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'tween',
			stiffness: 0,
			restDelta: 10,
			mass: 0.5
		}
	},
	closed: {
		opacity: 0,
		x: '100%',
		transition: {
			x: { type: 'spring', stiffness: 100 },
			damping: 10,
			mass: 0.1,
			when: 'beforeChildren'
		}
	}
};

const SingleMusicItemContainer = (props) => {
	return (
		<SingleMusicContainerStyled animate={props.isOpen ? 'open' : 'closed'} variants={variants}>
			{props.children}
		</SingleMusicContainerStyled>
	);
};

export default SingleMusicItemContainer;

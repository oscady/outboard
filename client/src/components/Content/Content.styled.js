import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentStyled = styled(motion.div)`
	position: relative;
	height: ${(props) => (props.playing ? 'calc(100vh - 60px)' : '100vh')};
	width: 100vw;
	background: ${({ theme }) => theme.white};
	overflow-y: overlay;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 12px; /* width of the entire scrollbar */
		color: ${({ theme }) => theme.white};
		
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.white}; /* color of the tracking ar */
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryDark}; /* color of the scroll thumb */
		border-radius: 20px; /* roundness of the scroll thumb */
		border: 3px solid ${({ theme }) => theme.white}; /* creates padding around scroll thumb */
		position: relative;
		z-index:12;
	}
`;

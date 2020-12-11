import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArtistPage = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 0;
	padding-top: calc(${({ theme }) => theme.menuHeight} + 4rem);
	align-items: flex-start;
	justify-content: flex-start;

	h1 {
		margin: 0px 20px 30px 20px;
		font-size: 2.5rem;
		text-transform: uppercase;
	}

	h2 {
		margin: 0px 20px 20px 20px;
		font-size: 2rem;
		text-transform: uppercase;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const ArtistsStyled = styled(motion.div)`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0;
  opacity:0.3;
  margin-bottom: 100px;
`;

export const ArtistItem = styled.div`
	width: 100%;

	h3 {
		margin: 10px 10px 0px 10px;
		font-size: 1.5rem;
		text-transform: capitalize;
		text-align: left;
	}

	img {
		width: 100%;
	}
`;

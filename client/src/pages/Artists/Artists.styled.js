import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArtistPage = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 0;
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
	position: relative;
	top: 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
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
	cursor: pointer;

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

export const Header = styled.div`
	position: relative;
	left: 0;
	right: 0;
	width: 100%;
	top: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	margin: 0 auto;
	margin-top: 70px;

	h1 {
		margin: 0px 20px 30px 20px;
		font-size: 2.5rem;
		text-transform: uppercase;
	}
`;

export const SingleArtist = styled(motion.div)`
	display: grid;
	height: 100%;
	width: 100%;
	grid-template-columns: 2fr 2fr 2fr 1fr;
	grid-column-gap: 30px;
  grid-row-gap: 30px;
	align-items: flex-start;
	padding-top: 15%;
  opacity:0;

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h1 {
			font-size: 1.8rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-left: 0;
      margin-bottom: 10px;
		}

		h2 {
			font-size: 1.5rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-left: 0;
		}

    h3 {
      content:"< back";
			text-transform: uppercase;
			font-weight: bold;
			margin: 0;
      cursor:pointer;
		}

		p {
			font-size: 1rem;
      line-height: 1.7rem;
			text-align: left;
			width: 100%;

		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;

export const ContentContainer = styled.div`
	h2 {
		margin-left: 10px;
	}
`;

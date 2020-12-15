import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MusicStyled = styled.div`
	height: calc(100vh - 240px);
	width: 100vw;
	margin: 120px 0px 120px 0px;
	display: grid;
	grid-template-columns: 1fr 5fr;
	grid-column-gap: 300px;
	align-items: center;

	h1 {
		margin: 0 auto;
		margin-bottom: 200px;
		width: 300px;
	}
`;

export const MusicItemStyled = styled(motion.div)`
display: flex;
  height: 700px;
  width: 500px;
  margin: 50px;
  opacity: 0;
  align-items:flex-start;
  justify-content:flex-start;
  flex-wrap:wrap;

  img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    min-width: 500px;

    &:hover {
      cursor:pointer
    }
  }

  div {
    margin-top: 5px;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
  }

 p {
    font-size: 1rem;
    text-align: left;
  }

`;

export const ContentContainer = styled.div`
	height: 100%;
	width: 100%;

	overflow-y: hidden;
	overflow-x: overlay hidden;
	display: flex;
	z-index: 5;

	align-items: space-around;
	margin: 40px;

	justify-content: flex-start;

	&::-webkit-scrollbar-thumb {
		width: 5px !important; /* width of the entire scrollbar */
		color: ${({ theme }) => theme.black};
		border: 5px solid white;
	}
`;

export const PageContainer = styled.div`
	height: calc(100vh - 100px);
	width: 100vw;
	position: relative;
	display: flex;
	flex-direction: row;
`;

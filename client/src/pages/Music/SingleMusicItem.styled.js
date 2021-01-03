import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SingleMusicContainerStyled = styled(motion.div)`
  width: 100vw;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  left:0;
  right: 0;
  bottom:0;
  z-index:8;
  background-color:${({ theme }) => theme.eggShell};
  opacity:0;
  transform:translateX(100%);
  padding: 100px 150px 0px 150px;


  h3 {
    color:black;
    width: 100%;
    text-align: left;
    height: 30px;
    cursor: pointer;
  }

`;

export const Container = styled(motion.div)`
	display: grid;
	grid-template-columns: 1.5fr 2fr 1fr;
	grid-gap: 40px;
	align-items: center;
	height: calc(100% - 100px);
	width: 100%;
	align-items: flex-start;
  opacity:0;

	img {
		width: 100%;
		height: auto;
	}
`;
export const SingleMusicItemStyled = styled(motion.div)`

`;

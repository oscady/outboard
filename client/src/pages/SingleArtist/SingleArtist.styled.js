import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SingleArtistStyled = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
	display: flex;
	flex-direction: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr;
	padding: 0;
	padding-top: calc(${({ theme }) => theme.menuHeight} + 4rem);
	align-items: flex-start;
	justify-content: flex-start;
`;

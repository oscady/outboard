import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AudioPlayerStyled = styled(motion.div)`
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: blue;
  z-index:100;
`;

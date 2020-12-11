import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ReleaseStyled = styled(motion.div)`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  opacity:0;
  
  
  h1 {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    font-size:1.6rem;
  }

  h2 {
    font-size: 1rem;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    font-weight: lighter;
    text-transform: uppercase;
  }

  h3 {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    font-size:1rem;
  }

  div {
    position: relative;
    position: flex;
    min-width: 1px;
    width: 100%;

    &:after {
      content:'';
      display: block;
      padding-bottom: 100%;
    }
  }

  img {
    position: absolute;
    margin-left: -50%;
    height:100%;
    width: 100%;
  }

`;

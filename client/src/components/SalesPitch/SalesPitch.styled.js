import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SalesPitchContainer = styled.div`
	position: relative;
	min-height: 100%;
	width: 100%;
	min-width: 400px;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-row-gap: 15px;

	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.white};
`;

export const SalesItem = styled(motion.div)`
  width: 100%;
  max-height: 150px;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;

  svg {
    order: 1;
    margin: 0 auto;
  }

  div {
    order:2;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 0 auto;

    h2 {
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }

    p {
      font-size: 1.1rem;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }
  }
`;

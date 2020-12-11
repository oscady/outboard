import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SalesPitchContainer = styled.div`
	position: relative;
	min-height: 100%;
	width: 100%;
	min-width: 400px;
	display: grid;
	grid-template-rows: 40px 150px 150px 150px 150px 300px;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20rem;
	grid-row-gap: 0px;
	padding: 30px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.white};

	h1 {
		text-align: left;
	}
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
    margin-left:0;
  }

  div {
    order:2;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
   
   h1 {
     font-size:2rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }
    h2 {
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }
     h3 {
      font-weight: bold;
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

    div {
      width: 22.5%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
    }
  }
  
`;

export const SalesModels = styled(motion.div)`
  width: 100%;
  max-height: 150px;
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  svg {
    order: 1;
    margin: 0 auto;
    margin-left:0;
  }

  div {
    order:2;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items:space-between;
    justify-content: space-between;
   
   h1 {
     font-size:4rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin-left: 0;
      margin-top: 0px;
      margin-bottom:12px;
    }
    h2 {
      font-size:2rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }
     h3 {
      font-weight: bold;
      text-align: left;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }

    p {
      font-size: 1.1rem;
      width: 100%;
      text-align: left;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }

    div {
      width: 20%;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
      text-align: left;

      h3 {
        text-align: left;
        margin: 0;
        margin-top: 5px;
      }
    }
  }
  `;

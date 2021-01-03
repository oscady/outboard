import styled from 'styled-components';

export const AboutListStyled = styled.div`
	display: grid;
	padding-top: 100px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	background-color: ${({ theme }) => theme.eggShell};
`;

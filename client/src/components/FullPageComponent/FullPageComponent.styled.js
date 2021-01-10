import styled from 'styled-components';

export const FullPageComponentStyled = styled.div`
	position: relative;
	width: 100vw;
	top: 0;
	min-height: 100vh;
	height: fit-content;
	display: grid;
	grid-template-rows: ${(props) => props.rows};
	grid-row-gap: 50px;
	padding: 8rem 7.5% 0% 7.5%;
	align-items: center;
	justify-content: center;
`;

export const FullPageColumnStyled = styled.div`
	position: relative;
	height: 50%;
	min-height: 1px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const FullPageRowStyled = styled.div`
	position: relative;
	height: auto;
	min-height: 1px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	gap: 80px;
	align-items: flex-start;
	justify-content: center;
`;

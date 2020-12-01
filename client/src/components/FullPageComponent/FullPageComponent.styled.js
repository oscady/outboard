import styled from 'styled-components';

export const FullPageComponentStyled = styled.div`
	position: relative;
	min-height: 100%;
	width: 100vw;
	display: grid;
	grid-template-rows: ${(props) => props.rows};
	padding: 0% 7.5% 0% 7.5%;
	gap: 30px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.white};
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
	background-color: ${({ theme }) => theme.white};
`;

export const FullPageRowStyled = styled.div`
	position: relative;
	height: 100%;
	min-height: 1px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	gap: 40px;
	align-items: flex-start;
	justify-content: center;
	background-color: ${({ theme }) => theme.white};
`;

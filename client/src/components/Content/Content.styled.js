import styled from 'styled-components';

export const ContentStyled = styled.div`
	position: relative;
	top: ${({ theme }) => theme.menuHeight};
	min-height: calc(100vh - 120px);
	height: auto;
`;

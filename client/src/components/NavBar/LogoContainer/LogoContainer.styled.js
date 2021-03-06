import styled from 'styled-components';

export const LogoContainerStyled = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	align-items: flex-end;
	justify-content: flex-end;
	height: calc(${({ theme }) => theme.menuHeight} - 10px);
	width: calc(${({ theme }) => theme.menuHeight} - 10px);
	z-index: 30;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		top: 50px;
		left: ${(props) => (props.open ? 0 : 0)};
		right: ${(props) => (props.open ? 0 : 100)};
		margin-left: ${(props) => (props.open ? 'auto' : '1px')};
		margin-right: auto;
	}
`;

import styled from 'styled-components';

export const SubscribeStyled = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 70px;
	align-items: flex-start;
	width: 80%;
	margin: 0 auto;

	p {
		font-size: 1.1rem;
		margin: 0;
	}

	h3 {
		font-weight: bold;
		font-size: 1rem;
		margin: 0;
		margin-bottom: 10px;
	}
	button {
		background-color: ${({ theme }) => theme.buttonColor};
		text-transform: uppercase;
		font-weight: bold;
		font-size: 1.6rem;
		padding: 0.7rem;
		border: 1px solid transparent;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;

		&:hover {
			cursor: pointer;
			border: 1px solid ${({ theme }) => theme.primaryLight};
		}
	}
`;

import styled from 'styled-components';

export const SubscribeFields = styled.div`
	min-height: 200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;

	a {
		font-size: 1.7rem;
		width: fit-content;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({ theme }) => theme.primaryDark};
		margin: 10px;
		margin-left: 0;
		border-bottom: 2px solid transparent;

		&:focus {
			border-bottom: 2px solid ${({ theme }) => theme.primaryDark};
			outline: none;
		}

		&:hover {
			cursor: pointer;
			border-bottom: 2px solid ${({ theme }) => theme.primaryDark};
			outline: none;
		}
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		p {
			font-size: 1rem;
			text-align: left;
			margin: 10px;
			margin-left: 0;
			margin-right: 40px;
			width: fit-content;
		}
	}
`;

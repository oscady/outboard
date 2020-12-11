import styled from 'styled-components';

export const RegisterComponentStyled = styled.div`
	position: relative;
	width: 60vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: transparent;

	h1 {
		font-size: 2rem;
		width: 100%;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({ theme }) => theme.primaryDark};
		margin-bottom: 30px;
	}
`;

export const RegisterFields = styled.div`
	min-height: 100px;
	width: 70%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	input {
		width: 45%;
		margin: 30px;
		margin-left: 0px;
		height: 30px;
		border: none;
		border-bottom: 2px solid ${({ theme }) => theme.primaryDark};
		color: ${({ theme }) => theme.primaryDark};
		background: none;
		font-size: 1.4rem;
		letter-spacing: 1.5px;
		font-family: monospace;

		&:focus {
			border: none;
			border-bottom: 3px solid ${({ theme }) => theme.primaryDark};
			outline: none;
		}

		::-webkit-input-placeholder {
			/* Chrome/Opera/Safari */
			color: ${({ theme }) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		::-moz-placeholder {
			/* Firefox 19+ */
			color: ${({ theme }) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-ms-input-placeholder {
			/* IE 10+ */
			color: ${({ theme }) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-moz-placeholder {
			/* Firefox 18- */
			color: ${({ theme }) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
	}

	a {
		font-size: 1.1rem;
		width: fit-content;
		height: 30px;
		margin: 30px;
		margin-left: 0px;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({ theme }) => theme.primaryDark};
		border-bottom: 2px solid ${({ theme }) => theme.primaryDark};

		&:hover {
			cursor: pointer;
		}
	}
`;

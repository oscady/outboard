import styled from 'styled-components';

export const TracklistContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	h1 {
		font-size: 2.2rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 10px 0px;
	}

	h2 {
		font-size: 1.4rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 30px 0px;
	}

	h3 {
		font-size: 1.3rem !important;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 0px 0px !important;
	}

	ul {
		display: flex;
		flex: 1 0;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0;
		margin: 0;
	}
	li {
		font-size: 1rem;
		font-weight: lighter;
		text-align: left;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 15px 0px 1.5px 0px;

		svg {
			&:hover {
				cursor: pointer;
			}
		}
		p {
			font-size: 1rem;
			font-weight: lighter;
			text-align: left;
			margin: 0;
		}

		a {
			font-size: 1rem;
			font-weight: bold;
			text-align: left;
			white-space: nowrap;
			cursor: pointer;
		}
	}

	p {
		font-size: 1rem;
		font-weight: lighter;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 400px;
	}
`;

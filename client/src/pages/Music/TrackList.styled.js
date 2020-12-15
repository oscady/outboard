import styled from 'styled-components';

export const TracklistContainer = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 5px 0px;
	}

	h2 {
		font-size: 1.6rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 25px 0px;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 5px 0px;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	li {
		font-size: 1.2rem;
		font-weight: lighter;
		text-align: left;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0px 0px 1.5px 0px;

		p {
			font-size: 1rem;
			font-weight: lighter;
			text-align: left;
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

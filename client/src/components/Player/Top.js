import React, { useState } from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import Audio from './Audio';

export function Top(props) {
	const Container = styled.div`
		border-radius: 5px 5px 0 0;
		height: 60px;
		z-index: 101;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #27117c;
		box-sizing: border-box;
		background-color: black;
	`;

	const Cover = styled.img`
		width: 135px;
		height: 135px;
		border-radius: 5px;
		margin-right: 1rem;
	`;

	const Info = styled.div`
		display: flex;
		flex-direction: row;
	`;

	const Title = styled.p`
		font-size: 1rem;
		font-weight: 600;
		margin: 0px;
		white-space: nowrap;
	`;

	const Author = styled.p`
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		margin: 0px;
		white-space: nowrap;
	`;

	const Controls = styled.div`
		margin: 0;
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		width: 100%;
	`;

	return (
		<Container>
			{/* <Cover src={props.track.cover} alt='cover' /> */}
			<Controls>
				<Audio url={props.track.url} />
			</Controls>
			{/* <Info>
				<Author>{props.track.author} - </Author>
				<Title>{props.track.title}</Title>
			</Info> */}
		</Container>
	);
}

Top.propTypes = {
	track: PropsTypes.object
};

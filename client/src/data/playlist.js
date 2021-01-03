import React from 'react';

const fetchedPlaylist = [
	{
		id: 0,
		title: 'Shader',
		author: 'Blawan',
		url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Blawan-Shader.mp3',
		cover: 'https://via.placeholder.com/300/D4CBEB'
	},
	{
		id: 1,
		title: 'Mammoth',
		author: 'Dachshund & Quenum',
		url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Dachshund-&-Quenum-Mammoth.mp3',
		cover: 'https://via.placeholder.com/300/A89ACD'
	},
	{
		id: 2,
		title: 'Must Be Love',
		author: 'Cassie Ft. P.Diddy',
		url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Cassie-Ft-P.Diddy-Must-Be-Love.mp3',
		cover: 'https://via.placeholder.com/300/B6A2EB'
	},
	{
		id: 3,
		title: 'India In Me',
		author: 'Cobblestone Jazz',
		url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Cobblestone-Jazz-India-In-Me.mp3',
		cover: 'https://via.placeholder.com/300/9A8CBE'
	},
	{
		id: 4,
		title: 'Esperana',
		author: 'Dimitri Andreas',
		url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Dimitri-Andreas-Esperana.mp3',
		cover: 'https://via.placeholder.com/300/9A8CBE'
	}
];

// mock api request
export const fetchPlaylist = () => {
	return new Promise((res, rej) => {
		setTimeout(() => res(fetchedPlaylist), 1000);
	});
};

export const PlaylistContext = React.createContext();

import { useEffect, useState } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import Styled from 'styled-components';
import { addArtist, getArtists } from '../../actions/artistActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { artists } from '../../data/artists';
import ArtistModal from './ArtistModal';

const ButtonContainer = Styled.div`
  height: 150px;
  width: 100%;
  position:absolute;
  bottom: 0;
  left:0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FormContainer = Styled.div`
position: relative;
  height: 50%%
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px;
`;
const Container = Styled.div`
position: relative;
  height: calc(100vh - 100px);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Preview = Styled.div`
	position: relative;
	height: 50%;
	width: 100%;
	background-color: red;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: space-between;
	justify-content: center;
`;

const Image = Styled.div`
	height: 300px;
	width: 300px;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		width: 100%;
	}
`;

const Artists = Styled.div`
	height: 200px;
	width: 400px;
	align-items: center;
	justify-content: center;
	background-color: green;

	li {
		font-size: 2rem;
		text-align: left;
		color:black;
	}
	`;

const UploadArtist = (props) => {
	const [ name, setName ] = useState('');
	const [ artists, setArtists ] = useState([]);
	const [ items, setItems ] = useState([]);
	const [ artwork, setArtwork ] = useState('');
	const [ uploadedArtists, setUploadedArtists ] = useState([]);
	const [ dropdownOpen, setDropdownOpen ] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	useEffect(
		() => {
			props.getArtists();
			setUploadedArtists(props.track.Artists);
			console.log(items);
		},
		[ name ]
	);

	const clearForm = () => {
		setName('');
		setArtists([]);
		setItems([]);
		setArtwork('');
	};

	const onSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();

		formData.append('name', name);
		formData.append('artists', artists);
		//formData.append('Artists', items);
		formData.append('artwork', artwork);

		for (var y = 0; y < 5; y++) {
			formData.append('Artists[]', items[y]);
		}
		console.log(items);
		console.log(formData);
		props.addArtist(formData);

		clearForm();
	};

	return (
		<Container>
			<Form onSubmit={onSubmit} action='/cms' style={{ height: '50%', width: '100%' }}>
				<FormContainer>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='name'>
							Release Title
						</Label>
						<Input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='artists'>
							artists
						</Label>
						<Input
							type='text'
							name='artists'
							value={artists}
							onChange={(e) => setArtists(...artists, e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='Artists'>
							Artists
						</Label>
						<ArtistModal
							buttonLabel='Add Artists'
							className='modal-lg'
							items={items}
							setItems={setItems}
							uploadedArtists={props.track.Artists}
						/>
						{/* <Input
						type='text'
						name='Artists'
						value={Artists}
						onChange={(e) => setItems(...Artists, e.target.value)}
					/> */}
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='artwork'>
							Artwork
						</Label>
						<Input
							type='text'
							name='artwork'
							value={artwork}
							onChange={(e) => setArtwork(e.target.value)}
						/>
					</FormGroup>
				</FormContainer>
			</Form>
			<Preview>
				<Image>{artwork ? <img src={artwork} /> : null}</Image>
				<Artists>
					<h1>{name}</h1>
					<ul>{items ? items.map((item, index) => <li key={index}>{item.trackName}</li>) : null}</ul>
				</Artists>
				<ButtonContainer>
					<Button className='btn-lg' style={{ margin: '20px' }} type='submit' onClick={onSubmit}>
						add item
					</Button>

					<Button className='btn-lg' style={{ margin: '20px' }} onClick={clearForm}>
						Clear Form
					</Button>
				</ButtonContainer>
			</Preview>
		</Container>
	);
};

UploadArtist.propTypes = {
	getArtists: PropTypes.func,
	addArtist: PropTypes.func,
	playing: PropTypes.bool,
	Artists: PropTypes.object,
	release: PropTypes.object,
	getArtists: PropTypes.func
};

const mapStateToProps = (state) => ({ artist: state.artist });

export default connect(mapStateToProps, { addArtist, getArtists, getArtists })(UploadArtist);

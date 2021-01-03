import { BackendHomeStyled } from './BackendHome.styled';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import Tracks from '../Tracks/Tracks';
import Releases from '../Releases/Releases';
import styled from 'styled-components';
import { Container } from '../Basic/Containers/ContentContainer.styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BackendHome = () => {
	return (
		<Container>
			<NavBar />
			<BackendHomeStyled>
				<Route path='/cms/tracks' render={(props) => <Tracks />} />
				<Route path='/cms/releases' render={(props) => <Releases />} />
			</BackendHomeStyled>
		</Container>
	);
};

export default BackendHome;

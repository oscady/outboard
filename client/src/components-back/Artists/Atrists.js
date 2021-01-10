import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import { SideBarButtonStyled } from '../Basic/Buttons/SideBarButton.styled';
import { Container } from '../Basic/Containers/ContentContainer.styled';
import Content from '../Content/Content'
import UploadArtists from './UploadArtists'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Artists = (props) => {
	return (
		<>
			<SideBar>
				<Link to="/cms/artists/upload"><SideBarButtonStyled>upload artists</SideBarButtonStyled></Link>
				<SideBarButtonStyled>somethins</SideBarButtonStyled>
				<SideBarButtonStyled>somethinselse</SideBarButtonStyled>
			</SideBar>
			<Content>
        <Route path='/cms/artists/upload' render={(props) => <UploadArtists />} />
      </Content>
		</>
	);
};

export default Artists;

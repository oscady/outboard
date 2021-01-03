import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import { SideBarButtonStyled } from '../Basic/Buttons/SideBarButton.styled';
import { Container } from '../Basic/Containers/ContentContainer.styled';
import Content from '../Content/Content'
import UploadTrack from './UploadTrack'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Tracks = (props) => {
	return (
		<>
			<SideBar>
				<Link to="/cms/tracks/upload"><SideBarButtonStyled>upload track</SideBarButtonStyled></Link>
				<SideBarButtonStyled>somethins</SideBarButtonStyled>
				<SideBarButtonStyled>somethinselse</SideBarButtonStyled>
			</SideBar>
			<Content>
        <Route path='/cms/tracks/upload' render={(props) => <UploadTrack />} />
      </Content>
		</>
	);
};

export default Tracks;

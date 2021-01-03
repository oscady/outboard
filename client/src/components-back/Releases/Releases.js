import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import { SideBarButtonStyled } from '../Basic/Buttons/SideBarButton.styled';
import { Container } from '../Basic/Containers/ContentContainer.styled';
import Content from '../Content/Content'
import UploadRelease from './UploadRelease'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Releases = (props) => {
	return (
		<>
			<SideBar>
				<Link to="/cms/releases/upload"><SideBarButtonStyled>upload release</SideBarButtonStyled></Link>
				<SideBarButtonStyled>somethins</SideBarButtonStyled>
				<SideBarButtonStyled>somethinselse</SideBarButtonStyled>
			</SideBar>
			<Content>
        <Route path='/cms/releases/upload' render={(props) => <UploadRelease />} />
      </Content>
		</>
	);
};

export default Releases;

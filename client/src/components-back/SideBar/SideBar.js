import { SideBarStyled } from './SideBar.styled';
import { SideBarButtonStyled } from '../Basic/Buttons/SideBarButton.styled';

const SideBar = (props) => {
	return <SideBarStyled>{props.children}</SideBarStyled>;
};

export default SideBar;

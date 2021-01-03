import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import LogoContainer from '../LogoContainer/LogoContainer';
import LogoIcon from '../../../icons/LogoIcon';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<LogoContainer open={open}>
				<LogoIcon width='65px' height='65px' />
			</LogoContainer>
			<NavLink exact activeStyle={{ borderBottom: '2px solid white' }} to='/cms/tracks'>
				<span role='img' aria-label='tracks' />
				Tracks
			</NavLink>
			<NavLink exact activeStyle={{ borderBottom: '2px solid white' }} to='/cms/artists'>
				<span role='img' aria-label='artists' />
				Artists
			</NavLink>
			<NavLink exact activeStyle={{ borderBottom: '2px solid white' }} to='/cms/releases'>
				<span role='img' aria-label='releases' />
				Releases
			</NavLink>
			<NavLink exact activeStyle={{ borderBottom: '2px solid white' }} to='/cms/images'>
				<span role='img' aria-label='images' />
				Images
			</NavLink>
		</StyledMenu>
	);
};
Menu.propTypes = {
	open: bool.isRequired
};
export default Menu;

import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from './hooks';
import Burger from './Burger';
import Menu from './Menu';
import MobileLogo from './LogoContainer/MobileLogo';
import LogoIcon from '../../icons/LogoIcon';

function NavBar(props) {
	const [ open, setOpen ] = useState(false);
	const node = useRef();

	useEffect(() => {
		console.log('nav bar rendered');
	}, []);
	useOnClickOutside(node, () => setOpen(false));
	return (
		<div ref={node}>
			<MobileLogo open={open}>
				<LogoIcon width='40px' height='40px' />
			</MobileLogo>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} signedIn={props.signedIn} setSignedIn={props.setSignedIn} />
		</div>
	);
}
export default NavBar;

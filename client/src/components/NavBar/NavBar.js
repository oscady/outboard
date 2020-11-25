import React, { useState, useRef } from "react";
import { useOnClickOutside } from './hooks';
import Burger from './Burger';
import Menu from './Menu';
import MobileLogo from './LogoContainer/MobileLogo'
import LogoIcon from '../../icons/LogoIcon'

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div ref={ node }>
      <MobileLogo open={open}>
        <LogoIcon width="50px" height="50px"/>
      </MobileLogo>
      <Burger open={ open } setOpen={ setOpen } />
      <Menu open={ open } setOpen={ setOpen } signedIn={props.signedIn} />
    </div>
  );
}
export default NavBar;

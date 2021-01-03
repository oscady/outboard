import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoIcon from '../../../icons/LogoIcon'
import {FaShoppingCart} from 'react-icons/fa'
import {NavLink} from 'react-router-dom';

const Menu = ({ signedIn, open, setSignedIn}) => {
  return (
    <>
    {signedIn ? 
      <StyledMenu open={ open }>
        <LogoContainer open={ open }>
          <LogoIcon width="65px" height="65px"/>
        </LogoContainer>
        <p  onClick={() => setSignedIn(false)}><span>logout</span></p>
        <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/basket">
          <FaShoppingCart style={{transform:"scale(1.5)"}}/>
        </NavLink>
      <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/artists">
        <span role="img" aria-label="artists" />
        artists
      </NavLink>
      <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/music">
        <span role="img" aria-label="music" />
        music
      </NavLink>
      <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/submit">
        <span role="img" aria-label="submit" />
        submit music
      </NavLink>
      <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/about">
        <span role="img" aria-label="about" />
        about
      </NavLink>
      <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/contact">
        <span role="img" aria-label="contact" />
        contact
      </NavLink>
    </StyledMenu>
    : !signedIn ?
    <StyledMenu open={ open }>
      <LogoContainer open={ open }>
        <LogoIcon width="65px" height="65px"/>
      </LogoContainer>
      <p  onClick={() => setSignedIn(true)}>login</p>
    <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/">
      <span role="img" aria-label="home" />
      home
    </NavLink>
    <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/about">
      <span role="img" aria-label="about" />
      about
    </NavLink>
    <NavLink exact activeStyle={{borderBottom:"2px solid blue"}} to="/user">
      <span role="img" aria-label="login/signup" />
      login/signup
    </NavLink>
  </StyledMenu>
  : null
    }
     
    </>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  signedIn: bool.isRequired
};
export default Menu;

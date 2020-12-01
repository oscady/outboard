import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoIcon from '../../../icons/LogoIcon'

const Menu = ({ signedIn, open }) => {
  return (
    <>
    {signedIn ? 
      <StyledMenu open={ open }>
        <LogoContainer open={ open }>
          <LogoIcon width="75px" height="75px"/>
        </LogoContainer>
      <a href="/artists">
        <span role="img" aria-label="artists" />
        artists
      </a>
      <a href="/music">
        <span role="img" aria-label="music" />
        music
      </a>
      <a href="/submit">
        <span role="img" aria-label="submit" />
        submit music
      </a>
      <a href="/about">
        <span role="img" aria-label="about" />
        about
      </a>
      <a href="/contact">
        <span role="img" aria-label="contact" />
        contact
      </a>
    </StyledMenu>
    : !signedIn ?
    <StyledMenu open={ open }>
      <LogoContainer open={ open }>
        <LogoIcon width="75px" height="75px"/>
      </LogoContainer>
    <a href="/home">
      <span role="img" aria-label="home" />
      home
    </a>
    <a href="/about">
      <span role="img" aria-label="about" />
      about
    </a>
    <a href="/user">
      <span role="img" aria-label="login/signup" />
      login/signup
    </a>
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

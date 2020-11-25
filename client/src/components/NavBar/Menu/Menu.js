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
          <LogoIcon width="180px" height="180px"/>
        </LogoContainer>
      <a href="/home">
        <span role="img" aria-label="about us" />
        artists
      </a>
      <a href="/contact">
        <span role="img" aria-label="price" />
        music
      </a>
      <a href="/work">
        <span role="img" aria-label="contact" />
        submit music
      </a>
      <a href="/work">
        <span role="img" aria-label="contact" />
        about
      </a>
      <a href="/work">
        <span role="img" aria-label="contact" />
        contact
      </a>
    </StyledMenu>
    : !signedIn ?
    <StyledMenu open={ open }>
      <LogoContainer open={ open }>
        <LogoIcon width="80px" height="80px" style={{margin:"0 auto"}}/>
      </LogoContainer>
    <a href="/home">
      <span role="img" aria-label="about us" />
      home
    </a>
    <a href="/contact">
      <span role="img" aria-label="price" />
      about
    </a>
    <a href="/work">
      <span role="img" aria-label="contact" />
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

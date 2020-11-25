import {MobileLogoStyled} from './MobileLogo.styled';

const LogoContainer = (props) => {
  return(
    <MobileLogoStyled open={props.open}>
      {props.children}
    </MobileLogoStyled>
  )
}

export default LogoContainer
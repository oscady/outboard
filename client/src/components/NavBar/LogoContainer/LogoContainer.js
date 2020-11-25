import {LogoContainerStyled} from './LogoContainer.styled';

const LogoContainer = (props) => {
  return(
    <LogoContainerStyled open={props.open}>
      {props.children}
    </LogoContainerStyled>
  )
}

export default LogoContainer
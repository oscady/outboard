import {FullPageComponentStyled} from './FullPageComponent.styled';

const FullPageComponent = (props) => {

  return (
    <FullPageComponentStyled >
      {props.children}
    </FullPageComponentStyled>
  )
}

export default FullPageComponent
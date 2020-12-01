import {FullPageColumnStyled} from './FullPageComponent.styled';

const FullPageColumn = (props) => {

  return (
    <FullPageColumnStyled >
      {props.children}
    </FullPageColumnStyled>
  )
}

export default FullPageColumn
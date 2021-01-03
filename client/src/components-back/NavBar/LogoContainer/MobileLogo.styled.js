import styled from 'styled-components';

export const MobileLogoStyled = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: ${({theme}) => theme.menuHeight};
  width: ${({theme}) => theme.menuHeight};
  z-index:30;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
      top: 0;
      left: 0;
      display: ${ props  => (props.open ? 'none' : 'flex')};
      height: ${({theme}) => theme.menuHeightMobile};
      width: ${({theme}) => theme.menuHeightMobile};
    }
`;
import styled from 'styled-components';

export const FullPageComponentStyled = styled.div`
  position: absolute;
  top:150px;
  left: 0;
  right: 0; 
  min-height: 1px;
  height: calc(100vh - 150px);
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: ${({theme}) => theme.white};
`;
import styled from "styled-components";

export const StyledTitle = styled.h3`
  font-size: 0.8rem;
  align-self: flex-start !important;
  margin: 0 auto;
  color: black;
  @media (max-width: ${({ theme }) => theme.mobile}) { 
    align-self: flex-end;
  }
`;

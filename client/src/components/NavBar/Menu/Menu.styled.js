import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  background: white;
  height: ${({theme}) => theme.menuHeight};
  text-align: left;
  padding: 0rem;
  padding-right: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-out;
  z-index: 9;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: ${({ open }) => (open ? "translateY(0)" : "translateX(-100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    background-color: ${({theme}) => theme.white};
    width: 100%;
    height: 100vh;
    flex-direction: column;
    padding: 10px 10px 0px 0px;
    justify-content: center;
    text-align:center;
    align-items:center;
  }

  
  a {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px;
    margin-right: 40px;
    letter-spacing: 0.0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      text-align: center;
      margin: 20px auto;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

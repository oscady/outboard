import styled from "styled-components";
export const StyledBurger = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
    open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      -webkit-box-shadow: ${({ theme }) => theme.burgerBorder};
      -moz-box-shadow: ${({ theme }) => theme.burgerBorder};
      box-shadow: ${({ theme }) => theme.burgerBorder};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      -webkit-box-shadow: ${({ theme }) => theme.burgerBorder};
      -moz-box-shadow: ${({ theme }) => theme.burgerBorder};
      box-shadow: ${({ theme }) => theme.burgerBorder};
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      -webkit-box-shadow: ${({ theme }) => theme.burgerBorder};
      -moz-box-shadow: ${({ theme }) => theme.burgerBorder};
      box-shadow: ${({ theme }) => theme.burgerBorder};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

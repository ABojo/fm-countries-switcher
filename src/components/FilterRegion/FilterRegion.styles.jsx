import styled from "styled-components";

export const Container = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.br.cards};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.weights.md};
  padding: 1rem;
  width: 12rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  text-align: left;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.bps.md}) {
    margin-top: 2rem;
  }
`;

export const Text = styled.span``;

export const Option = styled.button`
  cursor: pointer;
  transition: all 0.2s;
  pointer-events: auto;
  display: block;
  background-color: transparent;
  border: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  top: 110%;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.br.cards};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  pointer-events: none;

  & *:not(:last-child) {
      margin-bottom: 0.4rem;
    }
  }
`;

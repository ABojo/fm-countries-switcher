import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 15rem;
  margin: 0 auto;
  margin-top: 3rem;
  justify-items: center;
`;

export const Number = styled.span`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weights.lg};
  color-color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.elements};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.br.cards};

  grid-column: 2 / 3;
`;

export const Arrow = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  align-self: center;

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`;

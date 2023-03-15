import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 30rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.text};
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 1.25rem;
  padding-left: 4rem;
  padding-right: 2rem;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.input};
  border: none;
  border-radius: ${({ theme }) => theme.br.cards};
  font-size: 0.9rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow};

  &::placeholder {
    color: inherit;
    font-weight: ${({ theme }) => theme.weights.md};
  }
`;

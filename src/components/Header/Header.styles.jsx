import styled from "styled-components";

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  background-color: ${({ theme }) => theme.colors.elements};
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.weights.lg};
  font-size: 1.5rem;
`;

export const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.weights.md};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.1rem);
  }
`;

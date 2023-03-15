import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem;
  background-color: ${({ theme }) => theme.colors.elements};

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    padding: 1.5rem 2rem;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.weights.lg};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    font-size: 1rem;
  }
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
  transition: all 0.2s;

  &:hover {
    color ${({ theme }) => theme.colors.textHover};
  }
`;

export const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.weights.md};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.textHover};

    svg {
      fill: ${({ theme }) => theme.colors.textHover};
    }
  }

  svg {
    height: 2rem;
    width: 2rem;
    fill: ${({ theme }) => theme.colors.text};
    transition: all 0.2s;
  }

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    font-size: 0.9rem;
  }
`;

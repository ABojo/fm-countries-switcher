import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.br.cards};
  min-height: 22rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    max-width: 18rem;
    justify-self: center;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 10rem;
  border-top-left-radius: ${({ theme }) => theme.br.cards};
  border-top-right-radius: ${({ theme }) => theme.br.cards};
`;

export const Body = styled.div`
  padding: 1.5rem;
`;

export const Title = styled(Link)`
  font-weight: ${({ theme }) => theme.weights.lg};
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const Data = styled.span`
  display: block;
  font-size: 0.875rem;

  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`;

export const DataName = styled.span`
  font-weight: ${({ theme }) => theme.weights.md};
`;

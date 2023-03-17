import styled from "styled-components";

export const Body = styled.main`
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 5rem;

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    grid-gap: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.bps.md}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    grid-gap: 2rem;
  }
`;

export const Flag = styled.img`
  width: 100%;
  max-height: 35rem;
`;

export const Name = styled.h1`
  font-weight: ${({ theme }) => theme.weights.lg};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

import styled from "styled-components";

export const Container = styled.main`
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 3rem 5rem;

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    padding: 2rem 2rem;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.bps.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    grid-gap: 2rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 2rem;
  text-align: center;
  display: block;
  font-weight: ${({ theme }) => theme.weights.lg};
  color: ${({ theme }) => theme.colors.text};
  grid-column: 1 / -1;
`;

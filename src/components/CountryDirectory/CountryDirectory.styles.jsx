import styled from "styled-components";

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

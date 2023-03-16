import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  & *:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.bps.sm}) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.weights.md};
`;

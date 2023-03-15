import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2rem 5rem;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    grid-gap: 2rem;
    padding: 2rem 2rem;
  }
`;

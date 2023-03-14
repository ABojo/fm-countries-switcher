import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2rem 5rem;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

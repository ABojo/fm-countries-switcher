import styled from "styled-components";

const Container = styled.main`
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 3rem 5rem;

  @media (max-width: ${({ theme }) => theme.bps.lg}) {
    padding: 2rem 2rem;
  }
`;

function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

export default MainContainer;

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 5rem;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
`;

export const Body = styled.main`
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 5rem;
`;

export const Flag = styled.img`
  width: 100%;
  height: 25rem;
`;

export const Name = styled.h1`
  font-weight: ${({ theme }) => theme.weights.lg};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Details = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  margin-bottom: 5rem;
`;

export const DetailsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  & *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

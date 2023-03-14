import styled from "styled-components";

export const Container = styled.div`
  & *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.weights.md};
`;

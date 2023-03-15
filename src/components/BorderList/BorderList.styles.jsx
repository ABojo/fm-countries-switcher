import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.weights.md};
`;

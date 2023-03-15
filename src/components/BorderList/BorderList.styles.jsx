import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.weights.md};
  margin-right: 1rem;
`;

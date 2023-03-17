import styled from "styled-components";

const Element = styled.h1`
  font-size: 2rem;
  text-align: center;
  display: block;
  font-weight: ${({ theme }) => theme.weights.lg};
  color: ${({ theme }) => theme.colors.text};
`;

function Message({ children }) {
  return <Element>{children}</Element>;
}

export default Message;

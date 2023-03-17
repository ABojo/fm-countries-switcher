import styled from "styled-components";

const Message = styled.h1`
  font-size: 2rem;
  text-align: center;
  display: block;
  font-weight: ${({ theme }) => theme.weights.lg};
  color: ${({ theme }) => theme.colors.text};
`;

function NotFound() {
  return <Message>Sorry, that page was not found!</Message>;
}

export default NotFound;

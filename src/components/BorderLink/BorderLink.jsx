import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.2rem 1rem;
  border-radius: ${({ theme }) => theme.br.cards};
  font-size: 0.8rem;
`;

function BorderLink({ country }) {
  return <StyledLink to="/country/">{country}</StyledLink>;
}

export default BorderLink;

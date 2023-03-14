import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 1rem 2rem;
`;

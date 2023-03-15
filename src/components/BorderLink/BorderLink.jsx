import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CountriesContext } from "../../contexts/Countries";

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.2rem 1rem;
  border-radius: ${({ theme }) => theme.br.buttons};
  font-size: 0.8rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.elements};
  }
`;

function BorderLink({ country }) {
  const { findCountryByAbbreviation } = useContext(CountriesContext);
  const countryData = findCountryByAbbreviation(country);

  if (!countryData) return null;

  const countryName = countryData.name.common;

  return <StyledLink to={`/country/${countryName}`}>{countryName}</StyledLink>;
}

export default BorderLink;

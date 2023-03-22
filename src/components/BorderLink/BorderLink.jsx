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
  const { countries } = useContext(CountriesContext);

  function findCountryByAbbreviation() {
    if (!countries) return null;

    const lowerAbbrev = country.toLowerCase();

    const countryFound = countries.find((country) => {
      const currentAbbrev = country.cca3.toLowerCase();

      return lowerAbbrev === currentAbbrev;
    });

    return countryFound;
  }

  const countryData = findCountryByAbbreviation(country);

  if (!countryData) return null;

  const countryName = countryData.name.common;

  return <StyledLink to={`/country/${countryName}`}>{countryName}</StyledLink>;
}

export default BorderLink;

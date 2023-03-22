import {
  Container,
  Flag,
  Body,
  Title,
  Data,
  DataName,
} from "./CountryCard.styles";

function CountryCard({ country }) {
  const { population, region } = country;
  const name = country.name.common;
  const capital = country.capital;
  const flagUrl = country.flags.png;
  const countryUrl = `/country/${name.toLowerCase()}`;

  return (
    <Container>
      <Flag src={flagUrl} alt={name}></Flag>
      <Body>
        <Title to={countryUrl}>{name}</Title>
        <Data>
          <DataName>Population:</DataName> {population.toLocaleString()}
        </Data>
        <Data>
          <DataName>Region:</DataName> {region}
        </Data>
        <Data>
          <DataName>Capital:</DataName> {capital}
        </Data>
      </Body>
    </Container>
  );
}

export default CountryCard;

import { Container, List, Name } from "./CountryDetails.styles";

function Detail({ title, value }) {
  return (
    <li>
      <Name>{title}: </Name>
      {value}
    </li>
  );
}

function CountryDetails({ country }) {
  const currencies = Object.keys(country.currencies).map((key) => {
    return country.currencies[key].name;
  });

  const languages = Object.keys(country.languages).map((key) => {
    return country.languages[key];
  });

  return (
    <Container>
      <List>
        <Detail title="Native Name" value={country.name.common} />
        <Detail
          title="Population"
          value={country.population.toLocaleString()}
        />
        <Detail title="Region" value={country.region} />
        <Detail title="Sub Region" value={country.subregion} />
        {country.capital && (
          <Detail title="Capital" value={country.capital[0]} />
        )}
      </List>
      <List>
        {country.tld && (
          <Detail title="Top Level Domain" value={country.tld[0]} />
        )}
        <Detail title="Currencies" value={currencies.join(", ")} />
        <Detail title="Languages" value={languages.join(", ")} />
      </List>
    </Container>
  );
}

export default CountryDetails;

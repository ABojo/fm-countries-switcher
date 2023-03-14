import { useState, useEffect } from "react";
import { Container } from "./CountryDirectory.styles";
import countryApi from "../../utils/countryApi";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";

function CountryDirectory() {
  const [countries, setCountries] = useState(null);

  async function getCountries() {
    const countries = await countryApi.getAllCountries();
    setCountries(countries);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Container>
      {countries ? (
        countries.map((country) => {
          return <CountryCard country={country} key={country.name.common} />;
        })
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default CountryDirectory;

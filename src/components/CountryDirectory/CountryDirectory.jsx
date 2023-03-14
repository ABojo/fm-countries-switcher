import { useContext } from "react";
import { Container } from "./CountryDirectory.styles";
import { CountriesContext } from "../../contexts/Countries";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";

function CountryDirectory() {
  const { countries } = useContext(CountriesContext);

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

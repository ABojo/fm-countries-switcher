import { useContext } from "react";
import {
  Container,
  FilterControls,
  Grid,
  ErrorMessage,
} from "./CountryDirectory.styles";

import { CountriesContext } from "../../contexts/Countries";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";

function CountryDirectory() {
  const { countries } = useContext(CountriesContext);

  if (!countries) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  return (
    <Container>
      <FilterControls>
        <FilterSearch />
        <FilterRegion />
      </FilterControls>
      {!countries.length && (
        <ErrorMessage>Sorry, no countries found!</ErrorMessage>
      )}
      <Grid>
        {countries.length > 0 &&
          countries.map((country) => {
            return <CountryCard country={country} key={country.name.common} />;
          })}
      </Grid>
    </Container>
  );
}

export default CountryDirectory;

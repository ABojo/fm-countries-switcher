import { useContext } from "react";
import { CountriesContext } from "../../contexts/Countries";

import { FilterControls, Grid, ErrorMessage } from "./CountryDirectory.styles";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";

function CountryDirectory() {
  const { countries } = useContext(CountriesContext);

  if (!countries) {
    return <Spinner />;
  }

  return (
    <>
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
    </>
  );
}

export default CountryDirectory;

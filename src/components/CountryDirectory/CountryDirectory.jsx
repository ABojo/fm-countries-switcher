import { useContext } from "react";
import { CountriesContext } from "../../contexts/Countries";

import { FilterControls, Grid } from "./CountryDirectory.styles";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";
import Message from "../Message/Message";

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
      {!countries.length && <Message>Sorry, no countries found!</Message>}
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

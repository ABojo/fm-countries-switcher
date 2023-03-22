import { useContext } from "react";
import { CountriesContext } from "../../contexts/Countries";
import { FilterContext } from "../../contexts/Filter";

import { FilterControls, Grid } from "./CountryDirectory.styles";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";
import Message from "../Message/Message";
import APIError from "../APIError/APIError";

function CountryDirectory() {
  const { countries, apiError } = useContext(CountriesContext);
  const { filterName, filterRegion } = useContext(FilterContext);

  if (apiError) return <APIError />;

  if (!countries) return <Spinner />;

  //filter countries according to current filtering rules
  //returns true if the country should be included based on name
  function nameIsValid(country) {
    if (!filterName) return true;

    const countryName = country.name.common.toLowerCase();
    const lowerFilterName = filterName.toLowerCase();

    return countryName.includes(lowerFilterName);
  }

  //returns true if the country should be included based on region
  function regionIsValid(country) {
    if (!filterRegion) return true;

    return country.region.includes(filterRegion);
  }

  //filters out countries that dont pass the name and region check
  const filteredCountries = countries.filter((country) => {
    const validName = nameIsValid(country);
    const validRegion = regionIsValid(country);

    return validName && validRegion;
  });

  return (
    <>
      <FilterControls>
        <FilterSearch />
        <FilterRegion />
      </FilterControls>
      {!filteredCountries.length && (
        <Message>Sorry, no countries found!</Message>
      )}
      <Grid>
        {filteredCountries.length > 0 &&
          filteredCountries.map((country) => {
            return <CountryCard country={country} key={country.name.common} />;
          })}
      </Grid>
    </>
  );
}

export default CountryDirectory;

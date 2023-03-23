import { useContext, useEffect, useState, useMemo } from "react";
import { CountriesContext } from "../../contexts/Countries";
import { FilterContext } from "../../contexts/Filter";

import { FilterControls, Grid } from "./CountryDirectory.styles";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";
import Message from "../Message/Message";
import APIError from "../APIError/APIError";
import Pagination from "../Pagination/Pagination";

function CountryDirectory() {
  const { countries, apiError } = useContext(CountriesContext);
  const { filterName, filterRegion } = useContext(FilterContext);

  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(12);

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

  //filter countries based on current name and region
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const validName = nameIsValid(country);
      const validRegion = regionIsValid(country);

      return validName && validRegion;
    });
  }, [countries, filterName, filterRegion]);

  const numberOfPages = Math.ceil(filteredCountries.length / resultsPerPage);

  //the countries that should be shown on the current page based on the current filters
  const currentPageCountries = filteredCountries.slice(
    pageNumber * resultsPerPage - resultsPerPage,
    pageNumber * resultsPerPage
  );

  //reset page number when filter parameters change
  useEffect(() => {
    setPageNumber(1);
  }, [filterName, filterRegion]);

  //handle error/loading states
  if (apiError) return <APIError />;

  if (!countries.length) return <Spinner />;

  return (
    <>
      <FilterControls>
        <FilterSearch />
        <FilterRegion />
      </FilterControls>
      {!filteredCountries.length ? (
        <Message>Sorry, no countries found!</Message>
      ) : (
        <>
          <Grid>
            {currentPageCountries.map((country) => {
              return (
                <CountryCard country={country} key={country.name.common} />
              );
            })}
          </Grid>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            numberOfPages={numberOfPages}
          />
        </>
      )}
    </>
  );
}

export default CountryDirectory;

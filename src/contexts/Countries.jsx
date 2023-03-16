import { createContext, useState, useEffect } from "react";
import countryApi from "../utils/countryApi";

export const CountriesContext = createContext({
  countries: null,
});

export function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState(null);
  const [countries, setCountries] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  //pulls countries from the API
  async function fetchCountries() {
    const countries = await countryApi.getAllCountries();
    setAllCountries(countries);
    setCountries(countries);
  }

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
  function filterCountries() {
    const filteredCountries = allCountries.filter((country) => {
      const validName = nameIsValid(country);
      const validRegion = regionIsValid(country);

      return validName && validRegion;
    });

    setCountries(filteredCountries);
  }

  //fetches countries on mount
  useEffect(() => {
    fetchCountries();
  }, []);

  //if the countries array exists then filter the array everytime the filter string or region change
  useEffect(() => {
    if (countries) filterCountries();
  }, [filterName, filterRegion]);

  function findCountryByName(name) {
    if (!countries) return null;

    const lowerName = name.toLowerCase();

    return countries.find((country) => {
      const common = country.name.common.toLowerCase();
      const official = country.name.official.toLowerCase();

      return common === lowerName || official === lowerName;
    });
  }

  function findCountryByAbbreviation(abbreviation) {
    if (!countries) return null;

    const lowerAbbrev = abbreviation.toLowerCase();

    const countryFound = countries.find((country) => {
      const currentAbbrev = country.cca3.toLowerCase();

      return lowerAbbrev === currentAbbrev;
    });

    return countryFound;
  }

  const value = {
    countries,
    filterName,
    filterRegion,
    setFilterName,
    setFilterRegion,
    findCountryByName,
    findCountryByAbbreviation,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

import { createContext, useState, useEffect } from "react";
import countryApi from "../utils/countryApi";

export const CountriesContext = createContext({
  countries: null,
});

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState(null);

  async function fetchCountries() {
    const countries = await countryApi.getAllCountries();
    setCountries(countries);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

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

  const value = { countries, findCountryByName, findCountryByAbbreviation };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

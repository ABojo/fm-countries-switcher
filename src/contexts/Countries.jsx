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

  const value = { countries, findCountryByName };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

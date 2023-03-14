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

  const value = { countries };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

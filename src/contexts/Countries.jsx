import { createContext, useState, useEffect } from "react";
import countryApi from "../utils/countryApi";
import storage from "../utils/storage";

export const CountriesContext = createContext({
  countries: [],
});

export function CountriesProvider({ children }) {
  const [apiError, setApiError] = useState(false);
  const [countries, setCountries] = useState([]);

  //sorts the countries by name
  function sortCountries(countries) {
    return countries.sort((a, b) => {
      const aName = a.name.common;
      const bName = b.name.common;

      return aName > bName ? 1 : -1;
    });
  }

  //pulls countries from local storage. if they're not there then pull them from the api, sort, and store them
  async function loadCountries() {
    const savedCountries = storage.getCountries();

    if (savedCountries) return setCountries(savedCountries);

    try {
      setApiError(false);
      const countries = await countryApi.getAllCountries();
      const sortedCountries = sortCountries(countries);

      storage.saveCountries(sortedCountries);
      setCountries(sortedCountries);
    } catch (err) {
      setApiError(true);
    }
  }

  useEffect(() => {
    loadCountries();
  }, []);

  const value = {
    apiError,
    countries,
    loadCountries,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

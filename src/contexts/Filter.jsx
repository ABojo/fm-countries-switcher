import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterName, setFilterName] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  function clearFilterName() {
    setFilterName("");
  }

  const value = {
    filterName,
    setFilterName,
    clearFilterName,
    filterRegion,
    setFilterRegion,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

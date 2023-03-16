import { Input, Container, ClearButton } from "./FilterSearch.styles";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { useContext } from "react";
import { CountriesContext } from "../../contexts/Countries";

function FilterSearch() {
  const { setFilterName, filterName, clearFilterName } =
    useContext(CountriesContext);

  function handleChange(e) {
    setFilterName(e.target.value);
  }

  return (
    <Container>
      <SearchIcon />
      <Input
        value={filterName}
        placeholder="Search for a country..."
        onChange={handleChange}
      />
      {filterName && (
        <ClearButton onClick={clearFilterName}>&#10005;</ClearButton>
      )}
    </Container>
  );
}

export default FilterSearch;

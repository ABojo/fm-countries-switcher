import { useContext } from "react";
import { FilterContext } from "../../contexts/Filter";
import { Input, Container, ClearButton } from "./FilterSearch.styles";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

function FilterSearch() {
  const { filterName, setFilterName, clearFilterName } =
    useContext(FilterContext);

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

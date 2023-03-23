import { useState, useContext } from "react";
import { FilterContext } from "../../contexts/Filter";
import { Container, Text, Option, Dropdown } from "./FilterRegion.styles";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/up-arrow.svg";

function FilterRegion() {
  const { filterRegion, setFilterRegion } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  function changeRegion(e) {
    const dataValue = e.target.getAttribute("data-value");
    setFilterRegion(dataValue);
  }

  return (
    <Container onClick={toggleDropdown} role="button">
      <Text>{filterRegion || "Filter by Region"}</Text>
      {isOpen ? <UpArrow /> : <DownArrow />}
      <Dropdown onClick={changeRegion} isOpen={isOpen}>
        <Option role="button" data-value="">
          All
        </Option>
        <Option data-value="Africa">Africa</Option>
        <Option data-value="America">America</Option>
        <Option data-value="Asia">Asia</Option>
        <Option data-value="Europe">Europe</Option>
        <Option data-value="Oceania">Oceania</Option>
      </Dropdown>
    </Container>
  );
}

export default FilterRegion;

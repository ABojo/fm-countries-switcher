import { useContext, useState } from "react";
import { CountriesContext } from "../../contexts/Countries";
import { Container, Text, Option, Dropdown } from "./FilterRegion.styles";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/up-arrow.svg";

function FilterRegion() {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilterRegion, filterRegion } = useContext(CountriesContext);

  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  function changeRegion(e) {
    console.log(e.target);

    const dataValue = e.target.getAttribute("data-value");
    setFilterRegion(dataValue);
  }

  return (
    <Container onClick={toggleDropdown}>
      <Text>{filterRegion || "Filter by Region"}</Text>
      {isOpen ? <UpArrow /> : <DownArrow />}
      <Dropdown onClick={changeRegion} isOpen={isOpen}>
        <Option data-value="">All</Option>
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

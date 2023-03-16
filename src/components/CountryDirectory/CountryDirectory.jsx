import { useContext } from "react";
import { Container, FilterControls, Grid } from "./CountryDirectory.styles";
import { CountriesContext } from "../../contexts/Countries";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";
import FilterSearch from "../FilterSearch/FilterSearch";
import FilterRegion from "../FilterRegion/FilterRegion";

function CountryDirectory() {
  const { countries } = useContext(CountriesContext);

  return (
    <Container>
      <FilterControls>
        <FilterSearch />
        <FilterRegion />
      </FilterControls>
      <Grid>
        {countries ? (
          countries.map((country) => {
            return <CountryCard country={country} key={country.name.common} />;
          })
        ) : (
          <Spinner />
        )}
      </Grid>
    </Container>
  );
}

export default CountryDirectory;

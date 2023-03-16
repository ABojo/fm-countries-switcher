import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/Countries";

import { Container, Body, Flag, Name } from "./CountryPage.styles";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";
import BorderList from "../BorderList/BorderList";
import CountryDetails from "../CountryDetails/CountryDetails";

function CountryPage() {
  const { findCountryByName } = useContext(CountriesContext);
  const { countryName } = useParams();

  const country = findCountryByName(countryName);

  if (!country)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  return (
    <Container>
      <BackButton />
      <Body>
        <Flag src={country.flags.svg} />
        <div>
          <Name>{country.name.common}</Name>
          <CountryDetails country={country} />
          {country.borders && <BorderList countries={country.borders} />}
        </div>
      </Body>
    </Container>
  );
}

export default CountryPage;

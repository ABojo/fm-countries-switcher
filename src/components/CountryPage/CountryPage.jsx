import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/Countries";

import { Body, Flag, Name } from "./CountryPage.styles";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";
import BorderList from "../BorderList/BorderList";
import CountryDetails from "../CountryDetails/CountryDetails";
import Message from "../Message/Message";
import APIError from "../APIError/APIError";

function CountryPage() {
  const { countries, apiError } = useContext(CountriesContext);
  const { countryName } = useParams();

  if (apiError) return <APIError />;

  function findCountryByName() {
    if (!countries) return null;

    const lowerName = countryName.toLowerCase();

    const country = countries.find((country) => {
      const common = country.name.common.toLowerCase();
      const official = country.name.official.toLowerCase();

      return common === lowerName || official === lowerName;
    });

    return country || { error: true };
  }

  const country = findCountryByName();

  if (!country) return <Spinner />;

  if (country.error) {
    return <Message>Sorry, that country could not be found!</Message>;
  }

  return (
    <>
      <BackButton />
      <Body>
        <Flag src={country.flags.svg} alt={country.name.common} />
        <div>
          <Name>{country.name.common}</Name>
          <CountryDetails country={country} />
          {country.borders && <BorderList countries={country.borders} />}
        </div>
      </Body>
    </>
  );
}

export default CountryPage;

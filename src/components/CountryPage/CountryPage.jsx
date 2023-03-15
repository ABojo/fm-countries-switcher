import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/Countries";
import countryApi from "../../utils/countryApi";

import {
  Container,
  Body,
  Flag,
  Details,
  DetailsList,
  Name,
} from "./CountryPage.styles";

import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";
import CountryDetail from "../CountryDetail/CountryDetail";
import BorderList from "../BorderList/BorderList";

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

  const currencies = Object.keys(country.currencies).map((key) => {
    return country.currencies[key].name;
  });

  const languages = Object.keys(country.languages).map((key) => {
    return country.languages[key];
  });

  return (
    <Container>
      <BackButton />
      <Body>
        <Flag src={country.flags.svg} />
        <div>
          <Name>{country.name.common}</Name>
          <Details>
            <DetailsList>
              <CountryDetail title="Native Name" value={country.name.common} />
              <CountryDetail title="Population" value={country.population} />
              <CountryDetail title="Region" value={country.region} />
              <CountryDetail title="Sub Region" value={country.subregion} />
              {country.capital && (
                <CountryDetail title="Capital" value={country.capital[0]} />
              )}
            </DetailsList>
            <DetailsList>
              <CountryDetail title="Top Level Domain" value={country.tld[0]} />
              <CountryDetail title="Currencies" value={currencies.join(", ")} />
              <CountryDetail title="Languages" value={languages.join(", ")} />
            </DetailsList>
          </Details>
          {country.borders && <BorderList countries={country.borders} />}
        </div>
      </Body>
    </Container>
  );
}

export default CountryPage;

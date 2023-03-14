import { Detail, DetailName } from "./CountryDetail.styles";

function CountryDetail({ title, value }) {
  return (
    <Detail>
      <DetailName>{title}:</DetailName> {value}
    </Detail>
  );
}

export default CountryDetail;

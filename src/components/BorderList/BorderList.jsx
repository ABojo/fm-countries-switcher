import { Title, Container } from "./BorderList.styles";
import BorderLink from "../BorderLink/BorderLink";

function BorderList({ countries }) {
  const linkElements = countries.map((country) => {
    return (
      <BorderLink country={country} key={country}>
        {country}
      </BorderLink>
    );
  });

  return (
    <Container>
      <Title>Border Countries:</Title>
      {linkElements}
    </Container>
  );
}

export default BorderList;

import { Title, Container, LinkContainer } from "./BorderList.styles";
import BorderLink from "../BorderLink/BorderLink";
import { Link } from "react-router-dom";

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
      <LinkContainer>{linkElements}</LinkContainer>
    </Container>
  );
}

export default BorderList;

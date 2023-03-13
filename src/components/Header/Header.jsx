import { useTheme } from "styled-components";
import { Container, Title, ThemeToggle } from "./Header.styles";

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Where in the world?</Title>
      <ThemeToggle onClick={toggleTheme}>Dark Mode</ThemeToggle>
    </Container>
  );
}

export default Header;

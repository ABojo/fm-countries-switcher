import { useTheme } from "styled-components";
import { Container, Title, ThemeToggle } from "./Header.styles";
import { ReactComponent as Moon } from "../../assets/moon.svg";

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Where in the world?</Title>
      <ThemeToggle onClick={toggleTheme}>
        <Moon />
        Dark Mode
      </ThemeToggle>
    </Container>
  );
}

export default Header;

import { useTheme } from "styled-components";
import { Container, Title, ThemeToggle, TitleLink } from "./Header.styles";
import { ReactComponent as Moon } from "../../assets/moon.svg";

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Title>
        <TitleLink to="/">Where in the world?</TitleLink>
      </Title>
      <ThemeToggle onClick={toggleTheme}>
        <Moon />
        Dark Mode
      </ThemeToggle>
    </Container>
  );
}

export default Header;

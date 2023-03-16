import { useTheme } from "styled-components";
import { Container, Title, ThemeToggle, TitleLink } from "./Header.styles";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as FullMoon } from "../../assets/full-moon.svg";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Container>
      <Title>
        <TitleLink to="/">Where in the world?</TitleLink>
      </Title>
      <ThemeToggle onClick={toggleTheme}>
        {darkMode ? (
          <>
            <Moon /> Light Mode
          </>
        ) : (
          <>
            <FullMoon /> Dark Mode
          </>
        )}
      </ThemeToggle>
    </Container>
  );
}

export default Header;

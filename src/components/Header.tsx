import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledNav } from "@/styled-components/Box";
import { ToggleButton } from "@/styled-components/Button";
import { darkTheme, lightTheme } from "@/styled-components/Theme";
import { StyledLink } from "@/styled-components/Typography";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const Header = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e: any) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <StyledLink href="/blog">Blog</StyledLink>
          </li>
          <li>
            <StyledLink href="/works"> Works</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </ul>
      </StyledNav>
      <div>
        {isSmallScreen && (
          <ToggleButton onClick={handleToggle}>
            <StyledNav />
          </ToggleButton>
        )}

        <FontAwesomeIcon icon={faBars} onClick={handleMenuToggle} />
      </div>
    </>
  );
};

export default Header;

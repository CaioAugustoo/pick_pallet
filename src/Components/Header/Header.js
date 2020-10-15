import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../style/GlobalStyle";
import { HeaderStyled, Logo, MenuIcon, Menu } from "./style";

const Header = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const activeStyle = {
    opacity: "0.5",
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) setActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return (
    <HeaderStyled>
      <Container>
        <nav>
          <NavLink to="/" end >
            <Logo>LOGO</Logo>
          </NavLink>
          
          <MenuIcon ref={ref} onClick={() => setActive(!active)}>
            •••
          </MenuIcon>

          <Menu style={{ opacity: active ? "1" : "0" }}>
            <ul>
              <li>
                <NavLink to="/" end activeStyle={activeStyle}>
                  Paletas
                </NavLink>
              </li>
              <li>
                <NavLink to="/criar" end activeStyle={activeStyle}>
                  Criar
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobre" activeStyle={activeStyle}>
                  Sobre
                </NavLink>
              </li>
            </ul>
          </Menu>
        </nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import useTheme from "hooks/useTheme";
import useOutsideclick from "hooks/useOutsideclick";

import * as S from "./styles";

const Header = () => {
  const [active, setActive] = useState(false);
  const [changeTheme] = useTheme();
  const { asPath, pathname } = useRouter();
  const menuRef = useRef(null);

  useOutsideclick(menuRef, () => setActive(false));

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <S.Header>
      <nav>
        <Link href="/" passHref>
          <a>
            <S.Logo>PickPallet</S.Logo>
          </a>
        </Link>

        <S.MenuIcon onClick={() => setActive(prev => !prev)}>•••</S.MenuIcon>

        <S.Menu active={active} ref={menuRef}>
          <ul>
            <li>
              <Link href="/" passHref>
                <a
                  title="Todas as paletas"
                  className={asPath === "/" ? "active" : ""}
                >
                  Paletas
                </a>
              </Link>
            </li>
            <li>
              <Link href="/create" passHref>
                <a
                  title="Criar paleta"
                  className={asPath === "/create" ? "active" : ""}
                >
                  Criar
                </a>
              </Link>
            </li>
            <li>
              <Link href="/favorites" passHref>
                <a
                  title="Paletas marcadas como favoritas"
                  className={asPath === "/favorites" ? "active" : ""}
                >
                  Favoritas
                </a>
              </Link>
            </li>
            <li onClick={changeTheme}>Alterar tema</li>
          </ul>
        </S.Menu>
      </nav>
    </S.Header>
  );
};

export default Header;

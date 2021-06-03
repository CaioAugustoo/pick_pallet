import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

const Header = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef<HTMLElement>(null!);
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setActive(false)
  }, [pathname])

  return (
    <S.Header>
      <>
        <nav>
          <Link href="/" passHref>
            <a>
              <S.Logo>PickPallet</S.Logo>
            </a>
          </Link>

          <S.MenuIcon ref={menuRef} onClick={() => setActive(prev => !prev)}>
            •••
          </S.MenuIcon>

          <S.Menu active={active}>
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
                    className={asPath === "/criar" ? "active" : ""}
                  >
                    Criar
                  </a>
                </Link>
              </li>
            </ul>
          </S.Menu>
        </nav>
      </>
    </S.Header>
  );
};

export default Header;

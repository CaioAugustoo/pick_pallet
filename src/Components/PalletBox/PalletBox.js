import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";
import { Container } from "../../style/GlobalStyle";
import Pallets from "./Pallets";

import base_url from "../../services/api_url";

const Pallet = () => {
  const [pallets, setPallets] = useState(null);
  const [total, setTotal] = useState(18);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchAllPallets = async () => {
      const response = await fetch(`${base_url}?_total=${total}`, {
        cache: "no-store",
      });
      const json = await response.json();
      if (response.ok && json.length < total) setInfinite(false);
      if (isMounted) setPallets(json);
    };
    fetchAllPallets();
    return () => {
      isMounted = false;
    };
  }, [total]);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.85 && !wait) {
          setTotal(total => total + 18);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, pallets]);

  if (pallets === null) return null;
  return (
    <Container>
      <Wrapper>
        <Pallets pallets={pallets} />
      </Wrapper>
    </Container>
  );
};

export default Pallet;

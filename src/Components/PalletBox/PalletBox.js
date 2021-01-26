import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";
import base_url from "../../services/api_url";
import { Container } from "../../style/GlobalStyle";

import Loading from "../Loading/Loading";
import NotFound404 from "../Helper/NotFound/NotFound";

import Pallets from "./Pallets";

const Pallet = () => {
  const [pallets, setPallets] = useState(null);
  const [total, setTotal] = useState(18);
  const [infinite, setInfinite] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPallets = async () => {
      setLoading(true);
      const response = await fetch(`${base_url}?_total=${total}`);
      const json = await response.json();
      if (response.ok && json.length < total) setInfinite(false);
      setPallets(json);
      setLoading(false);
    };
    fetchAllPallets();
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

  if (loading) return <Loading />;
  if (pallets === null) return null;
  return (
    <Container>
      {!loading && pallets.code === 404 && <NotFound404 />}
      {!loading && pallets.code === "rest_no_route" && <NotFound404 />}
      {!loading && (
        <Wrapper>
          <Pallets pallets={pallets} />
        </Wrapper>
      )}
    </Container>
  );
};

export default Pallet;

import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Container } from "../../style/GlobalStyle";

import Loading from "../Loading/Loading";
import base_url from "../../services/api_url";
import Pallet from "./Pallet";

const PalletBox = () => {
  const [pallets, setPallets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(18);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    setLoading(true);
    const total = 18;
    const fetchAllPallets = async () => {
      const response = await fetch(`${base_url}?_limit=${limit}`);
      const json = await response.json();
      if (response.ok && json.length < total) setInfinite(false);
      setPallets(json);
    };
    fetchAllPallets();
    setLoading(false);
  }, [infinite, limit]);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const pageScroll = window.scrollY;
        const pageHeight = document.body.offsetHeight - window.innerHeight;
        if (pageScroll > pageHeight * 0.75 && !wait) {
          setLimit(limit => limit + 18);
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
  });

  if (pallets === null) return null;
  return (
    <Container>
      <Wrapper>
        {loading && <Loading />}
        {!loading && pallets !== null && <Pallet pallets={pallets} />}
      </Wrapper>
    </Container>
  );
};

export default PalletBox;
import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";
import { Container } from "../../style/GlobalStyle";
import Pallets from "./Pallets";

import base_url from "../../services/api_url";

const OthersPallets = () => {
  const [pallets, setPallets] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAllPallets = async () => {
      const response = await fetch(`${base_url}?_total=12`, {
        cache: "no-store",
      });
      const json = await response.json();
      if (isMounted) setPallets(json);
    };
    fetchAllPallets();
    return () => {
      isMounted = false;
    };
  }, []);

  if (pallets === null) return null;
  return (
    <Container>
      <Wrapper>
        <Pallets pallets={pallets} />
      </Wrapper>
    </Container>
  );
};

export default OthersPallets;

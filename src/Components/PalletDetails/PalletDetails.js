import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import { Container } from "../../style/GlobalStyle";

import Loading from "../Loading/Loading";
import base_url from "../../services/api_url";
import Pallet from "../PalletDetails/Pallet";

const PalletDetails = () => {
  const [pallet, setPallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const fetchPalletDetailsById = async () => {
      const response = await fetch(`${base_url}/${id}`);
      const json = await response.json();
      if (isMounted) setPallet(json);
    };
    fetchPalletDetailsById();
    setLoading(false);
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (pallet === null) return null;

  return (
    <Container>
      <Wrapper>
        {loading && <Loading />}
        {!loading && pallet !== null && <Pallet pallet={pallet} id={id} />}
      </Wrapper>
    </Container>
  );
};

export default PalletDetails;

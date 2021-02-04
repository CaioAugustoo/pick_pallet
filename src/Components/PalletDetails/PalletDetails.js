import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./style";
import { Container } from "../../style/GlobalStyle";
import Pallet from "../PalletDetails/Pallet";
import Loading from "../Loading/Loading";

import base_url from "../../services/api_url";

const PalletDetails = () => {
  const [pallet, setPallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    const fetchPalletDetailsById = async () => {
      setLoading(true);
      const response = await fetch(`${base_url}/${id}`, {
        cache: "no-store",
      });
      const json = await response.json();
      if (isMounted) setPallet(json);
      setLoading(false);
    };
    fetchPalletDetailsById();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <Loading />;
  if (pallet === null) return null;
  return (
    <Container>
      <Wrapper>
        <Pallet pallet={pallet} id={id} />
      </Wrapper>
    </Container>
  );
};

export default PalletDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./style";

import { Container } from "../../style/GlobalStyle";
import NotFound404 from "../Helper/NotFound/NotFound";

import Loading from "../Loading/Loading";
import base_url from "../../services/api_url";
import Pallet from "../PalletDetails/Pallet";

const PalletDetails = () => {
  const [pallet, setPallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    const fetchPalletDetailsById = async () => {
      setLoading(true);
      const response = await fetch(`${base_url}/${id}`);
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
      <>
        {!loading && pallet.code === 404 && <NotFound404 />}
        {!loading && pallet.code === "rest_no_route" && <NotFound404 />}
        {!loading && (
          <Wrapper>
            <Pallet pallet={pallet} id={id} />
          </Wrapper>
        )}
      </>
    </Container>
  );
};

export default PalletDetails;

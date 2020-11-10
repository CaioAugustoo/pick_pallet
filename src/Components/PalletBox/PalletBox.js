import React, { useEffect, useState } from "react";
import { Wrapper, BoxPallet, PalletColors } from "./style";
import { Container } from "../../style/GlobalStyle";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import base_url from "../../services/api_url";

const PalletBox = () => {
  const [pallets, setPallets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(18)
  const [infinite, setInfinite] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const total = 18;
    setLoading(true);
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
        if (pageScroll > pageHeight * .75 && !wait) {
          setLimit((limit) => limit * 2)
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  })

  if (pallets === null) return null;
  return (
    <Container>
      <Wrapper>
        {loading && <Loading />}
        {pallets.length !== undefined && pallets.map(pallet => (
          <div key={pallet.id}>
            <BoxPallet>
              <PalletColors>
                <div style={{ backgroundColor: `${pallet.pallet1}` }}>
                  <p
                    onClick={({ target }) =>
                      navigator.clipboard.writeText(`${target.innerHTML}`)
                    }
                  >
                    {pallet.pallet1}
                  </p>
                </div>
                <div style={{ backgroundColor: `${pallet.pallet2}` }}>
                  <p
                    onClick={({ target }) =>
                      navigator.clipboard.writeText(`${target.innerHTML}`)
                    }
                  >
                    {pallet.pallet2}
                  </p>
                </div>
                <div style={{ backgroundColor: `${pallet.pallet3}` }}>
                  <p
                    onClick={({ target }) =>
                      navigator.clipboard.writeText(`${target.innerHTML}`)
                    }
                  >
                    {pallet.pallet3}
                  </p>
                </div>
                <div style={{ backgroundColor: `${pallet.pallet4}` }}>
                  <p
                    onClick={({ target }) =>
                      navigator.clipboard.writeText(`${target.innerHTML}`)
                    }
                  >
                    {pallet.pallet4}
                  </p>
                </div>
              </PalletColors>
              <Button
                value={pallet.id}
                buttonText="Detalhes"
                onClick={() => navigate(`/paleta/${pallet.id}`)}
              />
            </BoxPallet>
          </div>
        ))}
      </Wrapper>
    </Container >
  );
};

export default PalletBox;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Toastify from "../Toastify/Toastify";
import { BoxPallet, PalletColors, Info, Wrap, Wrapper } from "./style";
import base_url from "../../services/api_url";
import { Container } from "../../style/GlobalStyle";

const Pallet = () => {
  const navigate = useNavigate();
  const [isToastyfied, setIsToastifyied] = useState(false);
  const [pallets, setPallets] = useState(null);
  const [limit, setLimit] = useState(18);
  const [infinite, setInfinite] = useState(true);

  const copyToClipBoard = target => {
    navigator.clipboard.writeText(`${target}`);
    setIsToastifyied(true);
  };

  useEffect(() => {
    const total = 18;
    const fetchAllPallets = async () => {
      const response = await fetch(
        `${base_url}?_limit=${limit}&_sort=published_at%3ADESC`
      );
      const json = await response.json();
      if (response.ok && json.length < total) setInfinite(false);
      setPallets(json);
    };
    fetchAllPallets();
  }, [limit]);

  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.85 && !wait) {
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
  }, [infinite, pallets]);

  return (
    <Container>
      <Wrapper>
        {pallets !== null &&
          pallets.length !== undefined &&
          pallets.map((pallet, index) => (
            <div key={pallet.id}>
              <BoxPallet style={{ animationDelay: `${index * 5}ms` }}>
                <PalletColors>
                  <div style={{ backgroundColor: `${pallet.pallet1}` }}>
                    <p
                      onClick={({ target }) =>
                        copyToClipBoard(target.innerHTML)
                      }
                    >
                      {pallet.pallet1}
                    </p>
                  </div>
                  <div style={{ backgroundColor: `${pallet.pallet2}` }}>
                    <p
                      onClick={({ target }) =>
                        copyToClipBoard(target.innerHTML)
                      }
                    >
                      {pallet.pallet2}
                    </p>
                  </div>
                  <div style={{ backgroundColor: `${pallet.pallet3}` }}>
                    <p
                      onClick={({ target }) =>
                        copyToClipBoard(target.innerHTML)
                      }
                    >
                      {pallet.pallet3}
                    </p>
                  </div>
                  <div style={{ backgroundColor: `${pallet.pallet4}` }}>
                    <p
                      onClick={({ target }) =>
                        copyToClipBoard(target.innerHTML)
                      }
                    >
                      {pallet.pallet4}
                    </p>
                  </div>
                </PalletColors>
                <Wrap>
                  <Button
                    value={pallet.id}
                    buttonText="Detalhes"
                    onClick={() => navigate(`/paleta/${pallet.id}`)}
                  />
                  <Info className="pallet__date">
                    {new Date(pallet.createdAt).toLocaleDateString()}
                  </Info>
                </Wrap>
              </BoxPallet>
            </div>
          ))}
      </Wrapper>

      <Toastify
        isToastyfied={isToastyfied}
        setIsToastifyied={setIsToastifyied}
        toastifyText="😎 Copiado!"
      />
    </Container>
  );
};

export default Pallet;

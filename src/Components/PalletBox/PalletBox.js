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

  const copyToClipBoard = target => {
    navigator.clipboard.writeText(`${target}`);
    setIsToastifyied(true);
  };

  useEffect(() => {
    const fetchAllPallets = async () => {
      const response = await fetch(`${base_url}`);
      const json = await response.json();
      setPallets(json);
    };
    fetchAllPallets();
  }, []);

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
                  {console.log(pallets)}
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
                    {new Date(pallet.created_at).toLocaleDateString()}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { BoxPallet, PalletColors, Info, Wrap } from "./style";

const Pallet = ({ pallets }) => {
  const navigate = useNavigate();
  return (
    <>
      {pallets.length !== undefined &&
        pallets.map((pallet, index) => (
          <div key={pallet.id}>
            <BoxPallet style={{ animationDelay: `${index * 5}ms` }}>
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
              <Wrap>
                <Button
                  value={pallet.id}
                  buttonText="Detalhes"
                  onClick={() => navigate(`/paleta/${pallet.id}`)}
                />
                <Info>{new Date(pallet.createdAt).toLocaleDateString()}</Info>
              </Wrap>
            </BoxPallet>
          </div>
        ))}
    </>
  );
};

export default Pallet;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { BoxPallet, PalletColors, PostedAt, Wrap } from "./style";
import Toastify from "../Toastify/Toastify";

const Pallets = ({ pallets }) => {
  const [isToastyfied, setIsToastifyied] = useState(false);
  const navigate = useNavigate();

  const copyToClipBoard = target => {
    navigator.clipboard.writeText(`${target}`);
    setIsToastifyied(true);
  };

  return (
    <>
      {pallets.map(
        ({ id, pallet1, pallet2, pallet3, pallet4, createdAt }, index) => (
          <BoxPallet style={{ animationDelay: `${index * 5}ms` }} key={id}>
            <PalletColors>
              <div style={{ backgroundColor: `${pallet1}` }}>
                <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
                  {pallet1}
                </p>
              </div>
              <div style={{ backgroundColor: `${pallet2}` }}>
                <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
                  {pallet2}
                </p>
              </div>
              <div style={{ backgroundColor: `${pallet3}` }}>
                <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
                  {pallet3}
                </p>
              </div>
              <div style={{ backgroundColor: `${pallet4}` }}>
                <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
                  {pallet4}
                </p>
              </div>
            </PalletColors>
            <Wrap>
              <Button
                value={id}
                buttonText="Detalhes"
                onClick={() => navigate(`/paleta/${id}`)}
              />
              <PostedAt
                className="pallet__date"
                title={`Criada em: ${new Date(createdAt).toLocaleDateString()}`}
              >
                {new Date(createdAt).toLocaleDateString()}
              </PostedAt>
            </Wrap>
          </BoxPallet>
        )
      )}
      <Toastify
        isToastyfied={isToastyfied}
        setIsToastifyied={setIsToastifyied}
        toastifyText="😎 Copiado!"
      />
    </>
  );
};

export default Pallets;

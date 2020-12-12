import React, { useState } from "react";
import { BoxPallet, PalletColors, Info, Wrap } from "./style";
import Button from "../Button/Button";
import Toastify from "../Toastify/Toastify";

const Pallet = ({ pallet, id }) => {
  const [isToastyfied, setIsToastifyied] = useState(false);

  const copyToClipBoard = target => {
    navigator.clipboard.writeText(`${target}`);
    setIsToastifyied(true);
  };

  const copyLinkToClipBoard = () => {
    navigator.clipboard.writeText(`pickpallet.netlify.app/paleta/${id}`);
    setIsToastifyied(true);
  };

  return (
    <BoxPallet>
      <PalletColors>
        <div style={{ backgroundColor: `${pallet.pallet1}` }}>
          <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
            {pallet.pallet1}
          </p>
        </div>
        <div style={{ backgroundColor: `${pallet.pallet2}` }}>
          <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
            {pallet.pallet2}
          </p>
        </div>
        <div style={{ backgroundColor: `${pallet.pallet3}` }}>
          <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
            {pallet.pallet3}
          </p>
        </div>
        <div style={{ backgroundColor: `${pallet.pallet4}` }}>
          <p onClick={({ target }) => copyToClipBoard(target.innerHTML)}>
            {pallet.pallet4}
          </p>
        </div>
      </PalletColors>
      <Wrap>
        <Button buttonText="Link" onClick={() => copyLinkToClipBoard()} />
        <Info>{new Date(pallet.createdAt).toLocaleDateString()}</Info>
      </Wrap>
      <Toastify
        isToastyfied={isToastyfied}
        setIsToastifyied={setIsToastifyied}
        toastifyText="😎 Copiado!"
      />
    </BoxPallet>
  );
};

export default Pallet;

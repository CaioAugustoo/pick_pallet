import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { BoxPallet, PalletColors, PostedAt, Wrap } from "./style";
import Button from "../Button/Button";
import Toastify from "../Toastify/Toastify";
import NotFound404 from "../Helper/NotFound/NotFound";

const Pallet = ({ pallet, id }) => {
  const [isToastyfied, setIsToastifyied] = useState(false);

  const copyToClipBoard = target => {
    navigator.clipboard.writeText(`${target}`);
    setIsToastifyied(true);
  };

  const copyLinkToClipBoard = () => {
    navigator.clipboard.writeText(`${window.location.hostname}/paleta/${id}`);
    setIsToastifyied(true);
  };

  if (pallet.code === 404) return <NotFound404 />;
  if (pallet.code === "rest_no_route") return <NotFound404 />;
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
        <PostedAt>
          {formatDistanceToNowStrict(
            Date.parse(pallet.created_at.replace(/-/g, "/")),
            {
              locale: ptBR,
            }
          )}
        </PostedAt>
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

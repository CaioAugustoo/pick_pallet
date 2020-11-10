import React from "react";
import { BoxPallet, PalletColors, Info, Wrap } from "./style";
import Button from "../Button/Button";

const Pallet = ({ pallet, id }) => {
  return (
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
      <Wrap>
        <Button
          buttonText="Link"
          onClick={() =>
            navigator.clipboard.writeText(`pickpallet.netlify.app/paleta/${id}`)
          }
        />
        <Info>{new Date(pallet.createdAt).toLocaleDateString()}</Info>
      </Wrap>
    </BoxPallet>
  );
};

export default Pallet;

import React from "react";
import { BoxPallet, PalletColors } from "./style";
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
      <Button
        buttonText="Link"
        onClick={({ target }) =>
          navigator.clipboard.writeText(`pickpallet.netlify.app/paleta/${id}`)
        }
      />
    </BoxPallet>
  );
};

export default Pallet;

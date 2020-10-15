import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";
import { useParams } from "react-router-dom";
import { Wrapper, BoxPallet, PalletColors } from "./style";
import { Container } from "../../style/GlobalStyle";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const PalletDetails = () => {
  const [pallet, setPallet] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("pallets")
      .doc(id)
      .get()
      .then((result) => {
        setPallet(result.data());
        setLoading(false);
      });
  }, [id]);

  if (pallet === null) return null;
  return (
    <Container>
      <Wrapper>
        {loading && <Loading />}
        <BoxPallet>
          <PalletColors>
            <div style={{ backgroundColor: `${pallet.color1}` }}>
              <p
                onClick={({ target }) =>
                  navigator.clipboard.writeText(`${target.innerHTML}`)
                }
              >
                {pallet.color1}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet.color2}` }}>
              <p
                onClick={({ target }) =>
                  navigator.clipboard.writeText(`${target.innerHTML}`)
                }
              >
                {pallet.color2}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet.color3}` }}>
              <p
                onClick={({ target }) =>
                  navigator.clipboard.writeText(`${target.innerHTML}`)
                }
              >
                {pallet.color3}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet.color4}` }}>
              <p
                onClick={({ target }) =>
                  navigator.clipboard.writeText(`${target.innerHTML}`)
                }
              >
                {pallet.color4}
              </p>
            </div>
          </PalletColors>
          <Button
            buttonText="Link"
            onClick={({ target }) =>
              navigator.clipboard.writeText(
                `pickpallet.netlify.app/paleta/${id}`
              )
            }
          />
        </BoxPallet>
      </Wrapper>
    </Container>
  );
};

export default PalletDetails;

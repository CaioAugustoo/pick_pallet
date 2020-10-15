import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";
import { Wrapper, BoxPallet, PalletColors } from "./style";
import { Container } from "../../style/GlobalStyle";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const PalletBox = () => {
  const [pallets, setPallets] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let allPallets = [];

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("pallets")
      .get()
      .then(result => {
        result.docs.forEach((doc) => {
          allPallets.push({
            id: doc.id,
            ...doc.data(),
          });     
        });
        setLoading(false);
        setPallets(allPallets);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  if (pallets === null) return null;
  return (   
    <Container>
      <Wrapper>
        {loading && <Loading />}
        {pallets.map(pallet => (
          <div key={pallet.id}>
            <BoxPallet >
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
              <Button value={pallet.id} buttonText="Detalhes" onClick={() => navigate(`/paleta/${pallet.id}`)} />
            </BoxPallet>  
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PalletBox;

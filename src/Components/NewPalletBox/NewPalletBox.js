import React, { useState } from "react";
import firebase from "../../config/firebase";
import { Wrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const NewPalletBox = () => {
  const [firstColor, setFirstColor] = useState("#EEEEEE");
  const [secondColor, setsecondColor] = useState("#CCCCCC");
  const [thirdColor, setThirdColor] = useState("#BBBBBB");
  const [fourthColor, setFourthColor] = useState("#AAAAAA");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postPallet = (e) => {
    setLoading(true);
    e.preventDefault();
    firebase
      .firestore()
      .collection("pallets")
      .doc()
      .set({
        color1: firstColor,
        color2: secondColor,
        color3: thirdColor,
        color4: fourthColor,
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <Wrapper>
      <h3>Crie uma paleta!</h3>
      <form onSubmit={postPallet}>
        <Input
          value={firstColor}
          onChange={({ target }) => setFirstColor(target.value)}
        />
        <Input
          style={{ marginTop: "-0.1875rem" }}
          value={secondColor}
          onChange={({ target }) => setsecondColor(target.value)}
        />
        <Input
          style={{ marginTop: "-0.5rem", height: "5.625rem" }}
          value={thirdColor}
          onChange={({ target }) => setThirdColor(target.value)}
        />
        <Input
          style={{ marginTop: "-1.875rem", height: "4.375rem" }}
          value={fourthColor}
          onChange={({ target }) => setFourthColor(target.value)}
        />

        <Button
          type="submit"
          buttonText={loading ? 'Carregando...' : 'Pronto!'}
          disabled={loading ? true : false}
        />
      </form>
    </Wrapper>
  );
};

export default NewPalletBox;

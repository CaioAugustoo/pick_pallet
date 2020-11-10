import React, { useState } from "react";
import { Wrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import base_url from "../../services/api_url";

const NewPalletBox = () => {
  const [firstColor, setFirstColor] = useState("#EEEEEE");
  const [secondColor, setsecondColor] = useState("#CCCCCC");
  const [thirdColor, setThirdColor] = useState("#BBBBBB");
  const [fourthColor, setFourthColor] = useState("#AAAAAA");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postPallet = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pallet1: firstColor,
        pallet2: secondColor,
        pallet3: thirdColor,
        pallet4: fourthColor,
      }),
    });
    setLoading(false);
    const json = await response.json();
    navigate(`/paleta/${json.id}`);
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
          buttonText={loading ? "Carregando..." : "Pronto!"}
          disabled={loading ? true : false}
        />
      </form>
    </Wrapper>
  );
};

export default NewPalletBox;

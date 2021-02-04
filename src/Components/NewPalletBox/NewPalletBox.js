import React, { useState } from "react";
import {
  Wrapper,
  FirstColorPallet,
  SecondColorPallet,
  ThirdColorPallet,
  FourthColorPallet,
} from "./style";
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

    // Return id of the created pallet
    const json = await response.json();
    navigate(`/pallet/${json}`);
  };

  return (
    <Wrapper>
      <h3>Crie uma paleta!</h3>
      <form onSubmit={postPallet}>
        <FirstColorPallet color1={firstColor}>
          <Input
            value={firstColor}
            onChange={({ target }) => setFirstColor(target.value)}
          />
        </FirstColorPallet>
        <SecondColorPallet color2={secondColor}>
          <Input
            value={secondColor}
            onChange={({ target }) => setsecondColor(target.value)}
          />
        </SecondColorPallet>
        <ThirdColorPallet color3={thirdColor}>
          <Input
            value={thirdColor}
            onChange={({ target }) => setThirdColor(target.value)}
          />
        </ThirdColorPallet>
        <FourthColorPallet color4={fourthColor}>
          <Input
            value={fourthColor}
            onChange={({ target }) => setFourthColor(target.value)}
          />
        </FourthColorPallet>

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

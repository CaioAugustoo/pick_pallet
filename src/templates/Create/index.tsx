import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import Input from "components/Input";
import Button from "components/Button";

import { POST_PALLET } from "services/api";

import * as S from "./styles";

const Create = () => {
  const [firstColor, setFirstColor] = useState("#EEEEEE");
  const [secondColor, setsecondColor] = useState("#CCCCCC");
  const [thirdColor, setThirdColor] = useState("#BBBBBB");
  const [fourthColor, setFourthColor] = useState("#AAAAAA");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  async function postPallet(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { url, options } = POST_PALLET({
      pallet1: firstColor,
      pallet2: secondColor,
      pallet3: thirdColor,
      pallet4: fourthColor,
    });

    const response = await fetch(url, options);
    const json = await response.json();

    push(`/pallet/${json}`);
  }

  return (
    <S.Wrapper>
      <h3>Publicar uma paleta</h3>
      <form onSubmit={postPallet}>
        <S.FirstColorPallet style={{ backgroundColor: firstColor }}>
          <Input
            value={firstColor}
            onChange={({ target }) => setFirstColor(target.value)}
          />
        </S.FirstColorPallet>
        <div style={{ backgroundColor: secondColor }}>
          <Input
            value={secondColor}
            onChange={({ target }) => setsecondColor(target.value)}
          />
        </div>
        <S.ThirdColorPallet style={{ backgroundColor: thirdColor }}>
          <Input
            value={thirdColor}
            onChange={({ target }) => setThirdColor(target.value)}
          />
        </S.ThirdColorPallet>
        <S.FourthColorPallet style={{ backgroundColor: fourthColor }}>
          <Input
            value={fourthColor}
            onChange={({ target }) => setFourthColor(target.value)}
          />
        </S.FourthColorPallet>

        <Button type="submit" disabled={loading ? true : false}>
          {loading ? "Carregando..." : "Pronto!"}
        </Button>
      </form>
    </S.Wrapper>
  );
};

export default Create;

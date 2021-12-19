import React, { FormEvent, useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";

import Input from "components/Input";
import Button from "components/Button";

import { POST_PALLET } from "services/api";

import * as S from "./styles";

const initialValues = {
  firstColor: "#EEEEEE",
  secondColor: "#CCCCCC",
  thirdColor: "#BBBBBB",
  fourthColor: "#AAAAAA",
};

type SelectedColorKeys = typeof initialValues;
type SelectedInputIdOptions = keyof SelectedColorKeys;

const Create = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [colors, setColors] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const handleChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedColor = event.currentTarget.id as SelectedInputIdOptions;

      setColors(prev => ({
        ...prev,
        [selectedColor]: event.target.value,
      }));
    },
    []
  );

  async function postPallet(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { url, options } = POST_PALLET({
      pallet1: colors.firstColor,
      pallet2: colors.secondColor,
      pallet3: colors.thirdColor,
      pallet4: colors.fourthColor,
    });

    const response = await fetch(url, options);
    const json = await response.json();

    push(`/pallet/${json}`);
  }

  return (
    <S.Wrapper>
      <h3>Publicar uma paleta</h3>
      <form onSubmit={postPallet} ref={formRef}>
        <S.FirstColorPallet style={{ backgroundColor: colors.firstColor }}>
          <Input
            id="firstColor"
            value={colors.firstColor}
            onChange={handleChangeColor}
          />
        </S.FirstColorPallet>
        <div style={{ backgroundColor: colors.secondColor }}>
          <Input
            id="secondColor"
            value={colors.firstColor}
            onChange={handleChangeColor}
          />
        </div>
        <S.ThirdColorPallet style={{ backgroundColor: colors.thirdColor }}>
          <Input
            id="thirdColor"
            value={colors.firstColor}
            onChange={handleChangeColor}
          />
        </S.ThirdColorPallet>
        <S.FourthColorPallet style={{ backgroundColor: colors.fourthColor }}>
          <Input
            id="fourthColor"
            value={colors.firstColor}
            onChange={handleChangeColor}
          />
        </S.FourthColorPallet>

        <Button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Pronto!"}
        </Button>
      </form>
    </S.Wrapper>
  );
};

export default Create;

import { ChangeEvent, InputHTMLAttributes } from "react";
import * as S from "./styles";

export type InputProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ onChange, value, ...rest }: InputProps) => {
  return (
    <S.Input
      onChange={onChange!}
      type="color"
      name="color"
      id="color"
      {...rest}
    />
  );
};

export default Input;

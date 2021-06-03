import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, disabled, onClick, ...rest }: ButtonProps) => {
  return (
    <S.Button disabled={disabled!} onClick={onClick!} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;

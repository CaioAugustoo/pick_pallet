import { useEffect } from "react";
import * as S from "./styles";

export type ToastProps = {
  toasted: boolean;
  setToasted: (toasted: boolean) => void;
};

const Toast = ({ toasted, setToasted }: ToastProps) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      setToasted(false);
    }, 1200);

    return () => clearTimeout(handler);
  }, [toasted]);

  return (
    <>
      {<S.Wrapper className={toasted ? "toasted" : ""}> 😎 Copiado!</S.Wrapper>}
    </>
  );
};

export default Toast;

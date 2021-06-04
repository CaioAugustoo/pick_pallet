import { ToastContext } from "contexts/toastContext";
import { useContext } from "react";

import * as S from "./styles";

const Toast = () => {
  const { toasted } = useContext(ToastContext);

  return (
    <>
      {<S.Wrapper className={toasted ? "toasted" : ""}> 😎 Copiado!</S.Wrapper>}
    </>
  );
};

export default Toast;

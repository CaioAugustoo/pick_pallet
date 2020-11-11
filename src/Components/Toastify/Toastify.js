import React, { useEffect } from "react";
import { StyledToastify } from "./style";

const Toastify = ({ toastifyText, isToastyfied, setIsToastifyied }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsToastifyied(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <StyledToastify
      onClick={() => setIsToastifyied(false)}
      className={isToastyfied ? "toastify__active" : ""}
    >
      {toastifyText}
    </StyledToastify>
  );
};

export default Toastify;

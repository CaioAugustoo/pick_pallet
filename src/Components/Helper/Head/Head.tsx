import React, { useEffect } from "react";
import { HeadProps } from "../../../types/types";

const Head = (props: HeadProps) => {
  useEffect(() => {
    document.title = props.title + " | PickPallet";
  }, [props]);

  return <></>;
};

export default Head;

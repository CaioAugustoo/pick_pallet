import React, { useEffect } from "react";

const Head = props => {
  useEffect(() => {
    document.title = props.title + " | PickPallet";
  }, [props]);

  return <></>;
};

export default Head;

import React, { useEffect } from "react";

export type HeadProps = {
  title: string
}

const Head = ({ title }: HeadProps) => {
  useEffect(() => {
    document.title = title + " | PickPallet";
  }, [title]);

  return <></>;
};

export default Head;
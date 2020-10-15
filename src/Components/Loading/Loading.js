import React from 'react';
import { PreLoader, LeftDot, MidDot, RightDot } from './style';

const Loading = () => {
  return (
    <PreLoader>
      <LeftDot/>
      <MidDot/>
      <RightDot/>
    </PreLoader>
  );
};

export default Loading;

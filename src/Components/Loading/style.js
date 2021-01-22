import styled, { keyframes } from "styled-components";

const dots = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

export const PreLoader = styled.div`
  position: absolute;
  background: var(--secondary-bg);
  width: 100%;
  height: 100%;
  z-index: 100000;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftDot = styled.div`
  background: var(--primary-color);
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 6.25rem;
  animation: 2s ${dots} ease infinite;
  animation-fill-mode: backwards;
`;

export const MidDot = styled.div`
  background: var(--primary-color);
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 6.25rem;
  animation: 2s ${dots} ease infinite;
  animation-delay: 0.3s;
  margin: 0rem 0.625rem;
  animation-fill-mode: backwards;
`;

export const RightDot = styled.div`
  background: var(--primary-color);
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 6.25rem;
  z-index: 1000;
  animation: 2s ${dots} ease infinite;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
`;

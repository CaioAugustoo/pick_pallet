import styled, { keyframes } from "styled-components";

const dots = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

export const PreLoader = styled.div`
  position: fixed;
  background: var(--secondary-bg);
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 1s ease;
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

export const Wrapper = styled.div`
  margin: 25px auto 40px 0px;
  display: flex;
  justify-content: center;
`;

export const FeedLoadingSpinner = styled.div`
  border: 0.3rem solid rgba(0, 0, 0, 0.1);
  border-left-color: #263646;
  border-radius: 50%;
  width: 1.125rem;
  height: 1.125rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

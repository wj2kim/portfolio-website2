import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background1};
  position: absolute;
  display: grid;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  &.fadeOut {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 600ms, opacity 600ms;
  }
  &.fadeIn {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 600ms;
  }
`;

export const Text = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4rem;
  }
  span {
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(60px);
    display: inline-block;
    &.fade {
      opacity: 1;
      transform: translateY(0px);
      color: ${(props) => props.theme.colors.primary1};
    }
  }
`;

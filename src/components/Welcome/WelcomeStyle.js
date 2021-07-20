import styled from "styled-components";

export const Container = styled.div`
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  position: absolute;
  display: grid;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  &.fadeOut {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 100ms, opacity 100ms;
  }
  &.fadeIn {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
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

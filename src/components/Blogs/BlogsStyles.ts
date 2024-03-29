import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.a`
  background: #212d45;
  border-radius: 12px;
  height: auto;
  padding: 24px;
  &.animation {
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
  }
  &.animation__done {
    opacity: 1;
    transform: scale(1);
  }
  &.animation__start {
    opacity: 0.4;
    transform: scale(0.92);
  }
  &:hover {
    transform: scale(1.02);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 22px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;

export const BoxImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  overflow: hidden;
  background-color: hsl(204, 23.8%, 96.9%, 0.5);
`;

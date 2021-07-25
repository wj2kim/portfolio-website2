import styled from "styled-components";

// export const LeftSection = styled.div`
//   width: 100%;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 80%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
// `;

export const IntroSection = styled.div`
  width: 100%;
  width: max-content;
  max-width: 100%;
  display: grid;
  grid-gap: 4px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  h2 {
    font-weight: 600;
    font-size: 30px;
  }
  p {
    font-weight: 300;
    font-size: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    h2 {
      font-weight: 500;
      font-size: 24px;
    }
    p {
      font-weight: 200;
      font-size: 16px;
    }
  }
`;


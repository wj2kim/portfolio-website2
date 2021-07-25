import styled from "styled-components";

export const WordsWrapper = styled.section`
  display: grid;
  justify-content: end;
  align-content: start;
  width: 170px;
  line-height: 20px;
  p:first-child {
    margin-top: 50px;
    margin-bottom: 15px;
  }
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  p.korean {
    font-size: 1.3rem;
    font-weight: 200;
  }
  @media ${props => props.theme.breakpoints.md}{
    p:first-child {
      margin-top: 10px;
    }
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: none;
  }
`;
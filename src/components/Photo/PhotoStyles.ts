import styled from "styled-components";

export const SectionImage = styled.div`
.image__container {
  display: flex;
  margin-bottom: 48px;
  border: 4px solid hsl(204,23.8%,95.9%);
  border-style: outset;
  img {
    width: 150px;
    height: 380px;
    transition transform 0.3s ease-out;
    cursor: pointer;
    &.model__right {
        transform: translate(0%, 10%);
    }
    &.model__left {
        transform: translate(0%, -10%);
    }
  }
  &:hover .model__right, 
  &:hover .model__left {
    transform: translate(0%, 0%);
  }
}
@media ${props => props.theme.breakpoints.md}{
  .image__container{
    margin-top:60px;
  }
}

@media ${props => props.theme.breakpoints.sm}{
  .image__container{
    margin-top:60px;
  }
}
`;

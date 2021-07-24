import styled from "styled-components";

export const SectionImage = styled.div`
.image-container {
  display: flex;
  height: 430px;
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
`;

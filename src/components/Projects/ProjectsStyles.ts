import styled, { keyframes } from "styled-components";

export const Img = styled.img`
  width: 370px;
  height: 225px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 15px;
  background-color: currentcolor;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  &.animation {
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const BlogCard = styled(Card)`
  width: 400px;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.2rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #ffa700;
  opacity: 0.8;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
  &.disabled {
    opacity: 0.6;
    filter: grayscale(60%);
    pointer-events: none;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const SectionCheckBox = styled.div`
  height: 50px;
  p {
    margin-bottom: 10px;
  }
`;

export const CheckBoxContainer = styled.div`
  position: relative;
  width: 4em;
`;

export const CheckBoxTitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  height: 0;
  font-size: 1em;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;

  &:before,
  &:after {
    content: "";
    font-size: 1em;
    position: absolute;
  }

  &:before {
    border-radius: 1em;
    background: #bdc3c7;
    height: 1.5em;
    width: 4em;
  }

  &:after {
    box-shadow: 0 0.0625em 0.375em 0 #666;
    border-radius: 50%;
    background: #ffffff;
    height: 1.5em;
    transform: translate(0, 0);
    transition: transform 0.25s ease-out 0.1s;
    width: 1.5em;
  }

  &:checked {
    &:after {
      transform: translate(2.6em, 0);
    }

    & ~ .label__off {
      opacity: 0;
    }

    & ~ .label__on {
      opacity: 1;
    }
  }
  &:checked:before {
    background: linear-gradient(270deg, #e24c00 0%, #ffd400 100%);
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: block;
  font-size: 0.9em;
  font-weight: bold;
  line-height: 1em;
  position: absolute;
  top: 0.4em;
  transition: opacity 0.15s ease-out 0.08s;
  text-transform: uppercase;
  &.label__off {
    right: 0.5em;
    color: #444;
  }
  &.label__on {
    color: #ffffff;
    opacity: 0;
    left: 0.5em;
  }
`;

const load = keyframes`
  from {
    background-position: 100% 0%;
  }
  to {
    background-position: -100% 0%;
  }
`;

const skeletonAnimation = styled.div`
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.2),
    transparent
  );
  animation-name: ${load};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: forwards;
  animation-timing-function: linear;
  background-size: 200% 100%;
`;

export const EmptyContainer = styled(Card)`
  width: 400px;
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const EmptyImage = styled(skeletonAnimation)`
  width: 370px;
  height: 225px;
  border-radius: 10px;
`;

export const EmptyTitle = styled(skeletonAnimation)`
  width: 350px;
  height: 30px;
`;

export const EmptySubtitle = styled(skeletonAnimation)`
  width: 300px;
  height: 40px;
`;

export const EmptyContent = styled(skeletonAnimation)`
  width: 320px;
  height: 150px;
`;

export const EmptyList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const EmptyButton = styled(skeletonAnimation)`
  width: 64px;
  height: 38px;
  border-radius: 15px;
`;

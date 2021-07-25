import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background1};
  position: absolute;
  display: grid;
  align-items: center;
	align-content: center;
	justify-content: center;
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
  }
`;

export const Text = styled.h1`
  color: #ffffff;
  font-size: 6rem;
	margin: 0;
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

export const DetailedContainer = styled.div`
	margin-top: 12px;
	display: grid;
	justify-items: center;
	grid-gap: 12px;
`

export const DetailedTitle = styled.p`
	display: grid;
	margin-bottom: 6px;
	justify-content: center;
	font-size: 2.6rem;
	transition: all 0.3s ease;
	transform: translateY(60px);
	@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`

export const StarIcon = styled.div`
	display: grid;
	margin: 0;
	justify-content: center;
	transition: 0.3s ease;
	color: #ffbf00;
	border-radius: 50px;
`;

export const DetailedText = styled.p`
	font-size: 2rem;
	transform: translateY(60px);
	.blue {
		color: #0e487e;
		font-weight: bold;
	}
	.red { 
		color: #c82848;
		font-weight: bold;
	}
	transition: all 0.3s ease;
	@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`



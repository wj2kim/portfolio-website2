import React from "react";
import { ButtonBack, ButtonFront } from "./index";
import { ButtonType } from './types/globalTypes';
import { StyledComponent, DefaultTheme } from "styled-components";

const Button = (props : StyledComponent<"button", DefaultTheme, ButtonType>) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;

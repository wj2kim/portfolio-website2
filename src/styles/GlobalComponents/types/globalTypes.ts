import React from "react";
import { DefaultTheme } from "styled-components";

export type ButtonType = {
  alt: boolean;
  disabled: boolean;
  form?: boolean;
  theme: DefaultTheme;
  children?: React.ReactNode;
  onClick?: () => void;
};

export type SectionType = {
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
  right?: boolean;
  left?: boolean;
  center?: boolean;
  bottom?: boolean;
  top?: boolean;
  full?: boolean;
  main?: boolean;
  them?: DefaultTheme;
  id?: string;
};

export type SectionTitleType = {
  main?: boolean;
  them?: DefaultTheme;
};

export type SectionDividerType = {
  colorAlt?: boolean;
  divider?: boolean;
};

export type LinkType = {
  large: boolean;
  nav: boolean;
};

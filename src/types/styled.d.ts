import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    // Colors for layout
    colors: {
      primary1: string;
      background1: string;
      accent1: string;
      button: string;
      background2: string;
    };
    // Breakpoints for responsive design
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    response: {};
  }
}

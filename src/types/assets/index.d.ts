declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: IconType;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

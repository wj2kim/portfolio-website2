import React, { useState } from "react";
import Theme from "../src/styles/theme";
import { RecoilRoot } from "recoil";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
		default: "navy",
		values: [
			{
				name: "black",
				value: "#333",
			},
      {
        name: "navy", 
        value: "#0F1624",
      },
			{
				name: "white",
				value: "#fffff",
			},
			{
				name: "blue",
				value: "#748eac",
			},
		],
	},
}

const wrapper = (Story) => {
	return (
    <RecoilRoot>
      <Theme>
        <Story />
        {}
      </Theme >
    </RecoilRoot>
	);
};

export const decorators = [wrapper];

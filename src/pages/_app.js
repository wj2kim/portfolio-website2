import Theme from "../styles/theme";
import { RecoilRoot } from 'recoil';
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </RecoilRoot>
    </>
  );
}

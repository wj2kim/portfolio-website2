import React from "react";
import Theme from "../styles/theme";
import { RecoilRoot } from "recoil";
import { TrackingProvider } from '../contexts/trackers';

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Theme>
          <TrackingProvider>
            <Component {...pageProps} />
          </TrackingProvider>
        </Theme>
      </RecoilRoot>
    </>
  );
}

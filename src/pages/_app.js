import { useEffect } from 'react';
import Theme from "../styles/theme";
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {

  // useEffect(async () => {
  //   const dynamicLoading = await import('../recoil/atoms.js')
  //   console.log("dynamic loading", dynamicLoading);
  // }, []) 
  
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

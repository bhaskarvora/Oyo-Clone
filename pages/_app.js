// import '@/styles/globals.css';
// import { useEffect } from 'react';
// import { setCsrfToken } from '../middleware/csrf';


// function App({ Component, pageProps }) {
//   useEffect(() => {
//     setCsrfToken();
//   }, []);

//   return <Component {...pageProps} />;

// }

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
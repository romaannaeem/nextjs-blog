// pages/_app.js is the TOP LEVEL COMPONENT, common across all pages
// pages/_app.js is the ONLY place you can load global CSS

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

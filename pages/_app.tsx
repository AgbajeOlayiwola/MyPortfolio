import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MyThemeContextProvider } from "../store/myThemeContext";
import { Provider } from "react-redux";
import { Cursor } from "../components/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyThemeContextProvider>
      <Cursor />
      <Component {...pageProps} />
    </MyThemeContextProvider>
  );
}

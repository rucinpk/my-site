import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={`${poppins.className}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

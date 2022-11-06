import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (document) {
			document.querySelector("html")?.classList.add("loaded");
		}
	}, []);
	return <Component {...pageProps} />;
}

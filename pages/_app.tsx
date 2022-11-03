import Head from "next/head";
import Desktop from "../components/desktop/Desktop";
import "../styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Desktop>
			<Head>
				<title>Nícolas Amarante | Software Developer | Homepage</title>
				<meta
					name="description"
					content="Hi! I'm a software developer and here you can find some of my projects, informations and contacts."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Desktop>
	);
}

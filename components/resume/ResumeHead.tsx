import Head from "next/head";

export type ResumeHeadProps = {
	title: string;
	description: string;
};
export default function ResumeHead({ title, description }: ResumeHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			></meta>
			<link rel="icon" href="./favicon.ico" />
		</Head>
	);
}

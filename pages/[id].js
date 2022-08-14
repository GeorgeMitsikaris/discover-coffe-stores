import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
	const {query} = useRouter();

	return (
		<>
			<Head>
				<title>Page {query.id}</title>
			</Head>
			<h1>Page {query.id}</h1>
		</>
	);
};

export default Dynamic;

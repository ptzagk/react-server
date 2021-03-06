import React from "react"
import { RootElement } from "react-server";
import Body from "../components/Body";

// These are async functions that resolve to a single React component
import HeaderLoader from "../componentLoaders/HeaderLoader";
import FooterLoader from "../componentLoaders/FooterLoader";

export default class CodeSplittingPage {
	getTitle() {
		return "Code Splitting Demo";
	}

	getElements () {
		return [
			// childProps will be passed into the loaded component
			<RootElement key={1} componentLoader={HeaderLoader} childProps={{ headerText: "Code Splitting Demo" }}/>,
			<Body key={2} />,
			<RootElement key={3} componentLoader={FooterLoader} />,
		];
	}
}

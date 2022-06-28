import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { theme } from "./styles/theme";

import { ApolloProvider } from "@apollo/client";
import client from "./service";

import "swiper/css/bundle";
import "./styles/styles.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);

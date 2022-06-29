import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { theme } from "./styles/theme";

import client from "./api/service";

import "swiper/css/bundle";
import "./styles/styles.css";
import { ApolloProvider } from "@apollo/client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</ApolloProvider>
	</React.StrictMode>
);

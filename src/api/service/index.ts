import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(import.meta.env.DEV);
console.log(import.meta.env.MODE);

const client = new ApolloClient({
	uri: import.meta.env.VITE_APP_URI + "/gateway",
	cache: new InMemoryCache(),
	headers: { 
		authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}` 
	}
});

export default client;
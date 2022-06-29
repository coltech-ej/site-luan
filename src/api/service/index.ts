import { ApolloClient, InMemoryCache } from "@apollo/client";

const enviroment = {
	APP_TOKEN:
		"0ee1f46999a5126e5b289d44b0bb959d53662bd963a77d6f1b8aced06b75a709b7a64f5815bd36818c4d223edbc27685d371a62e9678dd59a4226f035affe98fdf17a9c167205564e102ec9d76305e7c5d8438597146bf0c04590f9de9bfb8b25a6d99662c80d709bab531ef9051043307598d55b96db12a592b0f5ad0d14049",
	APP_URI: "https://hyden.herokuapp.com",
};

const client = new ApolloClient({
	uri: enviroment.APP_URI + "/gateway",
	cache: new InMemoryCache(),
	headers:{
		authorization: `Bearer ${enviroment.APP_TOKEN}`
	}
});

export default client;

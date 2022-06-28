import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import 'dotenv/config';

const client = new ApolloClient({
  uri: process.env.APP_URI,
  cache: new InMemoryCache()
});
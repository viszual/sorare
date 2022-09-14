import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.sorare.com/graphql",
  cache: new InMemoryCache(),
});

export default client;

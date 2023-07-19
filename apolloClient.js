import {ApolloClient,InMemoryCache,} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clk94bseu1ws701t29jgj1bc0/master",
  cache: new InMemoryCache(),
});

export default client;

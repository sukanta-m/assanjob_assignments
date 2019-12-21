import ApolloBoost from "apollo-boost";

const client = new ApolloBoost({
  uri: "https://countries.trevorblades.com/"
});

export default client;
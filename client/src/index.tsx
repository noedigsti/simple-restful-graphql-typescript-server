import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql/helloworld',
  cache: new InMemoryCache(),
});

const GET_HELLO_WORLD = gql`
  query GetHelloWorld {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_HELLO_WORLD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>{data.hello}</p>;
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

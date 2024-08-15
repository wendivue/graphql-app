import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/client";
import { client } from "./API/API";
import { Films } from "./Film";
import { Person } from "./Person";


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Films />
        <Person />
      </ApolloProvider>
    </>
  );
}

export default App;

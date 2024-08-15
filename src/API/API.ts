import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

export const GET_FILMS = gql(`
  query getFilm {
    allFilms {
      films {
        releaseDate
        id
        title
      }
    }
  }
`);

export const GET_PERSON = gql(`
  query getPerson($personId: ID) {
    person(id: $personId) {
      id
      name
      birthYear
    }
  }
`)

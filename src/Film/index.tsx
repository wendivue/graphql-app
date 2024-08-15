import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../API/API";
import React from "react";
import { Film } from "../__generated__/graphql";

export const Films = () => {
  const { loading, error, data } = useQuery(
    GET_FILMS,
  );

  if(loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error! ${error.message}</div>;
  }

  return (
    <ul>
      <h2>Films</h2>
      {data.allFilms?.films?.map((item: Film) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.releaseDate}</p>
        </li>
      ))}
    </ul>
  )
}

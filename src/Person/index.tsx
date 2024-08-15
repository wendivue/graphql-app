import { useQuery } from "@apollo/client";
import { GET_PERSON } from "../API/API";
import React from "react";

export const Person = () => {
  const { loading, error, data } = useQuery(
    GET_PERSON,
    { variables: {personId: "cGVvcGxlOjE="} }
  );

  if(loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error! ${error.message}</div>;
  }

  return (
    <ul>
      <h2>Person</h2>
      {data.person.birthYear}
      {data.person.name}
    </ul>
  )
}

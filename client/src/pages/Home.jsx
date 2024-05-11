import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/query";

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  console.log(data);

  return (
    <div>
      {data.getPosts.map((dt, i) => (
        <div key={i}>
          <strong>{dt.title}</strong>
          <p>{dt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

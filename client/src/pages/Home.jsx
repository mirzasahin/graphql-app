import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/query";

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getPosts || data.getPosts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      {data?.getPosts?.map((dt, i) => (
        <div onClick={() => window.location = `/post/${dt.id}`} key={i}>
          <strong>{dt.title}</strong>
          <p>{dt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

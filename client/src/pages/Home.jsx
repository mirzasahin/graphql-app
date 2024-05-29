import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/query";
import { CREATE_POST } from "../graphql/mutation";

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [post, setPost] = useState({
    title:'', description:'', url:''
  })

  const [createPost, { dataa, loadingg, errorr}] = useMutation(CREATE_POST)
  
  const onChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value})
  } 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input type="text" name="title" value={post.title} onChange={onChange}/>
      <input type="text" name="description" value={post.description} onChange={onChange}/>
      <input type="text" name="url" value={post.url} onChange={onChange}/>
      <button onClick={() => createPost({ variables: {body: post} })}>Create post..</button>

      {
        data?.getPosts?.map((dt, i) => (
          <div onClick={() => window.location = `/post/${dt.id}`} key={i}>
            <strong>{dt.title}</strong>
            <p>{dt.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Home;

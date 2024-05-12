import React from 'react'
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom'
import { GET_POST } from '../graphql/query';

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_POST, {
    variables: { postId: id },
    pollInterval: 500,
    //variables: { postId: "" }
  })

  console.log("detail", data)

  return (
    <div>
      {id}
      {/* <button onClick={() => refetch({ postId: id })}>
        Refetch new breed!
        </button> */}
    </div>
  )
} 

export default Detail
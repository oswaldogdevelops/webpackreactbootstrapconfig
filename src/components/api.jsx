import React from 'react';
import funcionconsumirapi from './statefulltwo';


const eipai = ({ data }) => (
  <ul>
    {data.map(post =>  <li key={post.id}>{post.email} {post.name} </li> )}
  </ul>
)

export default funcionconsumirapi('https://jsonplaceholder.typicode.com/comments', eipai)
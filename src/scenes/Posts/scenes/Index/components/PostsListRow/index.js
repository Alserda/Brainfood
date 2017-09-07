import React from 'react';

const PostsListRow = ({ post }) => (
  <tr key={post.id}>
    <td>{post.id}</td>
    <td>{post.title}</td>
    <td>{post.body}</td>
  </tr>
);

export default PostsListRow;

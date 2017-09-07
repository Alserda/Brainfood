import React from 'react';

const PostsListRow = ({ post }) => {
  console.log('postslistrow post:' , post);
  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
}

export default PostsListRow;

import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from 'components/RouteButton';

const PostsListRow = ({ id, title, body }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{body}</td>
    <td><RouteButton path={`/posts/${id}`}>Show</RouteButton></td>
  </tr>
);

PostsListRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.body,
};

export default PostsListRow;

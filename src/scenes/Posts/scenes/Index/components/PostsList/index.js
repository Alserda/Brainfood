import React from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'utils/hoc';

import PostsListRow from '../PostsListRow';

const PostsList = ({ posts }) => {
  const rows = Object.values(posts).map(
    post => PostsListRow({ post })
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

PostsList.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  })
};

export default toJS(PostsList);

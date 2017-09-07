import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as postsActions } from 'data/posts/duck';
import * as selectors from 'data/posts/selectors';

import PostsList from './components/PostsList';

class Posts extends Component {
  componentWillMount() {
    this.props.actions.fetchCollection();
  }

  render() {
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(state => ({
  posts: selectors.getPosts(state),
}), mapDispatchToProps)(Posts);

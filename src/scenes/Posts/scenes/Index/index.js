import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as postsActions } from 'data/posts/duck';
import * as selectors from 'data/posts/selectors';
import { Post } from 'data/posts/models';
import RouteButton from 'components/RouteButton';

import PostsList from './components/PostsList';

class Posts extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    posts: ImmutablePropTypes.mapOf(
      PropTypes.instanceOf(Post),
      PropTypes.number,
    )
  }

  componentWillMount() {
    this.props.actions.fetchCollection();
  }

  render() {
    return (
      <div>
        <RouteButton path='/posts/new'>Nieuwe post</RouteButton>
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

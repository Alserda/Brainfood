import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as postsActions } from 'data/posts/duck';
import * as selectors from 'data/posts/selectors';


class PostsDetail extends Component {
  componentWillMount() {
    console.log('this.props: ', this.props);
    this.props.actions.fetchOne(this.props.match.params.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update', nextProps);
    return true;
    // return nextProps.post.get('id') === nextProps.match.params.id;
  }

  render() {
    const { post } = this.props;
    console.log('posts detail props: ', this.props);
    return (
      <div>
        <h1>{post.get('title')}</h1>
        <h5>Posted on: {post.get('createdAt')}</h5>
        <h5>Updated on: {post.get('updatedAt')}</h5>
        <p>{post.get('body')}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: selectors.getPost(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetail);


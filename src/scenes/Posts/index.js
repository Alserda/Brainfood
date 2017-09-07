import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as postsActions } from 'data/posts/duck';
import * as selectors from 'data/posts/selectors';

// const Posts = () => ([
//   <div key='posts'>Posts</div>,
//   <span key='snorkel'>snorkel</span>
// ]);

class Posts extends Component {
  componentWillMount() {
    this.props.actions.fetch();
  }

  render() {
    console.log('posts props: ', this.props);
    const posts = this.props.posts.entrySeq().map(
      ([key, value]) => (
        <li key={key}>{value.get('title')}</li>
      )
    );

    return (
      <ul>
        {posts}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(state => ({
  posts: selectors.getPosts(state),
}), mapDispatchToProps)(Posts);

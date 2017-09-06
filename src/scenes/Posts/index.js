import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as postsActions } from 'data/posts/duck';

// const Posts = () => ([
//   <div key='posts'>Posts</div>,
//   <span key='snorkel'>snorkel</span>
// ]);

class Posts extends Component {
  componentWillMount() {
    console.log('props;/ ', this.props);
    this.props.actions.fetch()
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props: ', nextProps);
    if (nextProps.posts) {
      console.log('first post:' , nextProps.posts.get('1'))
    }
  }

  render() {
    return (
      <ul>
        {/* this.props.posts.map((post, i) => <li key={`${post}-${i}`}>{post}</li>) */}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
})

export default connect(state => ({
  posts: state.get('posts')
}), mapDispatchToProps)(Posts);

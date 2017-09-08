import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as postsActions } from 'data/posts/duck';
import * as selectors from 'data/posts/selectors';


class PostsNew extends Component {
  componentWillMount() {
    console.log('this.props: ', this.props);
    this.props.actions.fetchOne(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        postsnew
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch)
});

export default connect(null, mapDispatchToProps)(PostsNew);


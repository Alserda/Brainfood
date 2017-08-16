import React from 'react';
import { connect } from 'react-redux';

const Posts = () => ([
  <div key='posts'>Posts</div>,
  <span key='snorkel'>snorkel</span>
]);


const mapStateToProps = state => {
  console.log('State:' , state);
  return state;
}
export default connect(mapStateToProps)(Posts);

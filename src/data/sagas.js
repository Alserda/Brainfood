import { takeEvery } from 'redux-saga';
import { types as postsTypes } from './posts/duck';

function pindakaas(data) {
  console.log('pindaakaas daata: ', data);
}

export default function* rootSaga() {
  yield [
    takeEvery(postsTypes.GET_POSTS_REQUEST, pindakaas)
  ];
}

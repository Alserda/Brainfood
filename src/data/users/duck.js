import { createReducer } from 'redux-create-reducer';
import { Map, Record } from 'immutable';

import { crudStatusRecords } from 'services/crud/immutable/models';

const initialState = new Record({
  status: new Map(crudStatusRecords),
});

const handlers = {};

export default createReducer(initialState(), handlers);

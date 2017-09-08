import { createCrudActions } from './actions';
import { createCrudTypes } from './types';

export const creators = {
  types: createCrudTypes,
  actions: createCrudActions,
};

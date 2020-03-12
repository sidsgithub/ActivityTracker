Use this directory to create reducer functions

```
//homeReducer.js

import { createNamespace } from '../utils/reducer';

const initialState = {
  isLoading: false
};

const namespace = createNamespace('HOME');

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case namespace('SET_LOADING'):
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};

export default homeReducer;

```

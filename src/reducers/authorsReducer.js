import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  authors: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_AUTHORS:
      return { ...state, loading: true };

    case types.LOAD_AUTHORS_SUCCESS:
      return { ...state, loading: false, authors: payload };

    case types.LOAD_AUTHORS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

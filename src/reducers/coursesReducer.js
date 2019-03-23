import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  courses: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_COURSES:
      return { ...state, loading: true };

    case types.LOAD_COURSES_SUCCESS:
      return { ...state, loading: false, courses: payload };

    case types.SAVE_COURSE_FAIL:
    case types.UPDATE_COURSE_FAIL:
    case types.LOAD_AUTHORS_FAIL:
      console.log(payload);
      return { ...state, loading: false, error: payload };

    case types.SAVE_COURSE_SUCCESS:
      return { ...state, loading: false, courses: [...state.courses, payload] };

    default:
      return state;
  }
};

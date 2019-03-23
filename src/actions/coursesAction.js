import * as types from '../constants/actionTypes';

export const getData = () => {
  return async dispatch => {
    dispatch({ type: types.LOAD_COURSES });
    dispatch({ type: types.LOAD_AUTHORS });
    try {
      const coursesApi = await fetch('http://localhost:3004/courses');
      const authorsApi = await fetch('http://localhost:3004/authors');
      const res = await Promise.all([coursesApi, authorsApi]);
      const courses = await res[0].json();
      const authors = await res[1].json();
      dispatch({ type: types.LOAD_COURSES_SUCCESS, payload: courses });
      dispatch({ type: types.LOAD_AUTHORS_SUCCESS, payload: authors });
    } catch (error) {
      dispatch({ type: types.LOAD_COURSES_FAIL, payload: error });
      dispatch({ type: types.LOAD_AUTHORS_FAIL, payload: error });
    }
  };
};

export const saveCourse = (course, actions) => {
  return async dispatch => {
    if (course.id) {
      dispatch({ type: types.UPDATE_COURSE });
    } else {
      dispatch({ type: types.SAVE_COURSE });
    }
    console.log(course);
    try {
      let url = 'http://localhost:3004/courses';
      if (course.id) url = `${url}/${course.id}`;
      const res = await fetch(url, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: course.id ? 'PUT' : 'POST',
        body: JSON.stringify(course),
      });
      actions.setSubmitting(false);
      actions.resetForm();
      const data = await res.json();

      console.log(data);
      if (data.error) {
        if (course.id) {
          dispatch({ type: types.UPDATE_COURSE_FAIL, payload: data });
        } else {
          dispatch({ type: types.SAVE_COURSE_FAIL, payload: data });
        }
      } else {
        if (course.id) {
          dispatch({ type: types.UPDATE_COURSE_SUCCESS, payload: data });
        } else {
          dispatch({ type: types.SAVE_COURSE_SUCCESS, payload: data });
        }
      }
    } catch (error) {
      console.log(error);
      actions.setErrors(error);
      actions.setSubmitting(false);
      if (course.id) {
        dispatch({ type: types.UPDATE_COURSE_FAIL, payload: error });
      } else {
        dispatch({ type: types.SAVE_COURSE_FAIL, payload: error });
      }
    }
  };
};

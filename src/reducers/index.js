import { combineReducers } from 'redux';
import locale from './localeReducer';
import theme from './themeReducer';
import authors from './authorsReducer';
import courses from './coursesReducer';

export default combineReducers({
  locale,
  theme,
  authors,
  courses,
});

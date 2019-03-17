import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { LocaleConsumer } from '../../context/localeContext';
import { ThemeConsumer } from '../../context/themeContext';

class index extends Component {
  state = {
    courses: [],
    authors: [],
  };

  componentDidMount() {
    this.getCourses();
  }

  getCourses = async () => {
    const coursesApi = await fetch('http://localhost:3004/courses');
    const authorsApi = await fetch('http://localhost:3004/authors');
    const res = await Promise.all([coursesApi, authorsApi]);
    console.log(res);
    const courses = await res[0].json();
    const authors = await res[1].json();
    this.setState({
      courses,
      authors,
    });
  };

  addCourses = () => {
    const {
      history: { push },
    } = this.props;

    const { authors } = this.state;

    push({
      pathname: '/users',
      search: '?query=abc',
      state: {
        authors,
        course: {
          title: '',
          watchHref: '',
          authorId: '',
          length: '',
          category: '',
        },
      },
    });
  };

  editCourse = course => {
    const {
      history: { push },
    } = this.props;

    const { authors } = this.state;

    push({
      pathname: '/users',
      search: '?query=abc',
      state: { authors, course },
    });
  };

  render() {
    const { courses } = this.state;
    console.log(this.props.locale);
    console.log(this.props.theme);
    return (
      <div>
        <button onClick={this.props.changeLocale}>Chnage Locale</button>
        <button onClick={this.addCourses}>Create Course</button>
        <LocaleConsumer>
          {value => (
            <div>
              <span>{value.locale}</span>
              <button onClick={() => value.changeLocale('spanish')}>Change Locale</button>
            </div>
          )}
        </LocaleConsumer>

        <ThemeConsumer>
          {value => (
            <div>
              <span>{value.theme}</span>
              <button onClick={() => value.changeTheme('light')}>Change Theme</button>
            </div>
          )}
        </ThemeConsumer>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td className={index % 2 === 0 ? 'spanStyle' : 'spanStyle title'}>
                  {course.title}
                </td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
                <td>
                  <input type="button" value="Edit" onClick={() => this.editCourse(course)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

index.propTypes = {};

function mapStateToProps(state) {
  return {
    locale: state.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: () => dispatch({ type: 'CHANGE_LOCALE', payload: { locale: 'spanish' } }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

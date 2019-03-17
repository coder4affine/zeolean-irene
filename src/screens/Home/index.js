import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData, saveCourse } from '../../actions/coursesAction';
import Users from '../Users';
// import { LocaleConsumer } from '../../context/localeContext';
// import { ThemeConsumer } from '../../context/themeContext';

class index extends Component {
  constructor(props) {
    super(props);
    props.getData();
  }

  state = {
    open: false,
    course: {
      title: '',
      watchHref: '',
      authorId: '',
      length: '',
      category: '',
    },
  };

  // componentDidMount() {
  //   this.getCourses();
  // }

  // getCourses = async () => {
  //   const coursesApi = await fetch('http://localhost:3004/courses');
  //   const authorsApi = await fetch('http://localhost:3004/authors');
  //   const res = await Promise.all([coursesApi, authorsApi]);
  //   console.log(res);
  //   const courses = await res[0].json();
  //   const authors = await res[1].json();
  //   this.setState({
  //     courses,
  //     authors,
  //   });
  // };

  addCourses = () => {
    this.setState({ open: true });
  };

  editCourse = course => {
    this.setState({ course, open: true });
  };

  render() {
    const {
      courses: { courses },
      authors: { authors },
      addCourse,
    } = this.props;
    const { course, open } = this.state;
    return (
      <div>
        {/* <button onClick={this.props.changeLocale}>Chnage Locale</button>
        
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
        </ThemeConsumer> */}
        <input type="button" value="Create Course" onClick={this.addCourses} />
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
            {courses.map(course => (
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
        <dialog open={open}>
          <div>
            <input type="button" onClick={() => this.setState({ open: false })} value="Close" />
            <Users
              authors={authors}
              course={course}
              addCourse={addCourse}
              closeDialog={() => this.setState({ open: false })}
            />
          </div>
        </dialog>
      </div>
    );
  }
}

index.propTypes = {
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    locale: state.locale,
    authors: state.authors,
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: () => dispatch({ type: 'CHANGE_LOCALE', payload: { locale: 'spanish' } }),
    getData: () => getData()(dispatch),
    addCourse: (course, actions) => saveCourse(course, actions)(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

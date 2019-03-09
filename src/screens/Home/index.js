import React, { Component } from "react";
// import PropTypes from "prop-types";

class index extends Component {
  state = {
    courses: [],
    authors: []
  };

  componentDidMount() {
    this.getCourses();
  }

  getCourses = async () => {
    const coursesApi = await fetch("http://localhost:3004/courses");
    const authorsApi = await fetch("http://localhost:3004/authors");
    const res = await Promise.all([coursesApi, authorsApi]);
    console.log(res);
    const courses = await res[0].json();
    const authors = await res[1].json();
    this.setState({
      courses,
      authors
    });
  };

  render() {
    const { courses } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

index.propTypes = {};

export default index;

import React from 'react';
// import PropTypes from "prop-types";
import { Formik, Field } from 'formik';
import { string, object } from 'yup';
import { connect } from 'react-redux';
import TextInput from '../../component/TextInput';
import DropDown from '../../component/DropDown';
import { saveCourse } from '../../actions/coursesAction';

// https://github.com/jaredpalmer/formik

// https://github.com/erikras/redux-form

// https://www.npmjs.com/package/yup

const formData = [
  {
    name: 'title',
    title: 'Title',
    component: 'text',
  },
  {
    name: 'watchHref',
    title: 'Link',
    component: 'text',
  },
  {
    name: 'category',
    title: 'Category',
    component: 'text',
  },
  {
    name: 'length',
    title: 'Length',
    component: 'text',
  },
  {
    name: 'authorId',
    title: 'Author',
    component: 'select',
  },
];

const CoursesSchema = object().shape({
  title: string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  watchHref: string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
});

const index = ({ location: { state }, history: { push }, addCourse }) => {
  return (
    <div>
      <h2>Add Courses</h2>
      <Formik
        initialValues={state.course}
        validationSchema={CoursesSchema}
        // validate={values => {
        //   let errors = {};
        //   if (!values.title) {
        //     errors.title = "Required";
        //   }
        //   if (!values.watchHref) {
        //     errors.watchHref = "Required";
        //   }
        //   if (!values.length) {
        //     errors.length = "Required";
        //   }
        //   if (!values.category) {
        //     errors.category = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={async (values, actions) => {
          addCourse(values, actions).then(() =>
            push({
              pathname: '/',
            }),
          );
        }}
        render={({ handleSubmit, isSubmitting, errors, values }) => {
          console.log(errors);
          return (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{errors.apiFail}</span>
              {formData.map((item, index) => (
                <Field
                  key={index}
                  name={item.name}
                  title={item.title}
                  data={item.component === 'select' ? state.authors : null}
                  component={item.component === 'text' ? TextInput : DropDown}
                />
              ))}

              <input
                type="submit"
                value={state.course.id ? 'Edit Course' : 'Save Course'}
                disabled={isSubmitting}
              />
            </form>
          );
        }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addCourse: (course, actions) => saveCourse(course, actions)(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

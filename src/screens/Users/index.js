import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { Formik } from 'formik';
import { string, object } from 'yup';

// https://github.com/jaredpalmer/formik

// https://github.com/erikras/redux-form

// https://www.npmjs.com/package/yup

const CoursesSchema = object().shape({
  title: string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  watchHref: string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  length: string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  category: string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default class index extends Component {
  static propTypes = {};

  render() {
    console.log(this.props.location.state.authors);
    return (
      <div>
        <h2>Add Courses</h2>
        <Formik
          initialValues={{
            title: '',
            watchHref: '',
            authorId: '',
            length: '',
            category: '',
          }}
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
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 5000);
          }}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && <div>{errors.title}</div>}
              <input
                type="text"
                name="watchHref"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.watchHref}
              />
              {errors.watchHref && touched.watchHref && <div>{errors.watchHref}</div>}
              <input
                type="text"
                name="length"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.length}
              />
              {errors.length && touched.length && <div>{errors.length}</div>}
              <input
                type="text"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              {errors.category && touched.category && <div>{errors.category}</div>}
              <input type="submit" value="Save Course" disabled={isSubmitting} />
            </form>
          )}
        />
      </div>
    );
  }
}

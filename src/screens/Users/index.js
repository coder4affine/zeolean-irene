import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { string, object } from 'yup';

import Select from 'react-select';
import TextInput from '../../component/TextInput';
import DropDown from '../../component/DropDown';
import MultiSelect from '../../component/MultiSelect';

// https://github.com/jaredpalmer/formik

// https://github.com/erikras/redux-form

// https://www.npmjs.com/package/yup

const formData = [
  {
    id: 1,
    name: 'title',
    title: 'Title',
    component: 'text',
  },
  {
    id: 2,
    name: 'watchHref',
    title: 'Link',
    component: 'text',
  },
  {
    id: 3,
    name: 'category',
    title: 'Category',
    component: 'text',
  },
  {
    id: 4,
    name: 'length',
    title: 'Length',
    component: 'text',
  },
  {
    id: 5,
    name: 'authorId',
    title: 'Author',
    component: 'select',
  },
  {
    id: 6,
    name: 'color',
    title: 'Color',
    component: 'multiSelect',
  },
];

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
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
  color: string().required('Required'),
});

const index = ({ authors, course, addCourse, closeDialog }) => {
  return (
    <div>
      <h2>Add Courses</h2>
      <Formik
        enableReinitialize
        initialValues={course}
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
          console.log(values);
          addCourse(values, actions).then(closeDialog);
        }}
        render={({ handleSubmit, isSubmitting, errors, setFieldValue }) => {
          console.log(errors);
          return (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{errors.apiFail}</span>
              {formData.map(item => (
                <Field
                  key={item.id}
                  name={item.name}
                  title={item.title}
                  onMultiSelect={(val, items) => {
                    if (item.component === 'multiSelect') {
                      setFieldValue('color', val, true);
                    }
                  }}
                  data={
                    item.component === 'select'
                      ? authors
                      : item.component === 'multiSelect'
                      ? options
                      : null
                  }
                  defaultValue={item.component === 'multiSelect' ? [] : null}
                  component={
                    item.component === 'text'
                      ? TextInput
                      : item.component === 'multiSelect'
                      ? MultiSelect
                      : DropDown
                  }
                />
              ))}

              <input
                type="submit"
                value={course.id ? 'Edit Course' : 'Save Course'}
                disabled={isSubmitting}
              />
            </form>
          );
        }}
      />
    </div>
  );
};

index.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  addCourse: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default index;

/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const index = ({ field, form: { touched, errors }, title, ...props }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 10 }}>
      <label htmlFor="title">{title}</label>
      <input type="text" {...field} {...props} />
      {errors[field.name] && touched[field.name] && <div>{errors[field.name]}</div>}
    </div>
  );
};

index.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default index;

import React from 'react';
import PropTypes from 'prop-types';

const index = ({ field, form: { touched, errors }, title, ...props }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 10 }}>
      <label htmlFor="title">{title}</label>
      <input type="text" {...field} {...props} />
      {errors.name && touched.name && <div>{errors.name}</div>}
    </div>
  );
};

index.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default index;

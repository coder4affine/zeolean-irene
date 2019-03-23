/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const index = ({ field, form: { touched, errors }, data, title, ...props }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 10 }}>
      <label htmlFor="title">{title}</label>
      <select {...field} {...props}>
        <option value="">Select Author</option>
        {data &&
          data.map(item => (
            <option key={item.id} value={item.id}>{`${item.firstName} ${item.lastName}`}</option>
          ))}
      </select>
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

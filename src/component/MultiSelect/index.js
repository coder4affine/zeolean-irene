/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const index = ({
  field,
  form: { touched, errors },
  data,
  defaultValue,
  onMultiSelect,
  title,
  ...props
}) => {
  console.log(errors[field.name]);
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 10 }}>
      <label htmlFor="title">{title}</label>
      <Select
        defaultValue={defaultValue}
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onMultiSelect}
        onBlur={field.onBlur}
      />
      {errors[field.name] && <div>{errors[field.name]}</div>}
    </div>
  );
};

index.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default index;

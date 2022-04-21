import React from "react";
import s from './filter.module.css'
import PropTypes from 'prop-types';

const FilterContacts = ({ value, onChange }) => {
  return (
    <label className={s.find__contacts}>Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.find__input}
      />
    </label>
  )
}

export default FilterContacts;

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
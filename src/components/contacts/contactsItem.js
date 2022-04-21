import React from "react";
import s from './contacts.module.css'
import PropTypes from 'prop-types';

const ContactItem = ({ nameItem, numberIem, onDelete }) => {
  return (
    <>
      <p className={s.list__name}>{nameItem} :<span className={s.list__span}>{numberIem}</span></p>
      <button onClick={onDelete} className={s.list__btn} >delete</button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  nameItem: PropTypes.string.isRequired,
  numberIem: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
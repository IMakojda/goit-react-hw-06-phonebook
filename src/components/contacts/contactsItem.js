import React from "react";
import s from './contacts.module.css'
import PropTypes from 'prop-types';

const ContactItem = ({ nameItem, numberIem }) => {
  return (
    <>
      <p className={s.list__name}>{nameItem} :<span className={s.list__span}>{numberIem}</span></p>
    </>
  );
}

export default ContactItem;
ContactItem.propTypes = {
  nameItem: PropTypes.string.isRequired,
  numberIem: PropTypes.string.isRequired,
};
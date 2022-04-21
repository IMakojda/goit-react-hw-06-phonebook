import React from "react";
import ContactItem from "./contactsItem";
import PropTypes from 'prop-types';
import s from './contacts.module.css'

const ContactList = ({ contactList, onDelete }) => {
    return (
        <ul className={s.list}>
            {contactList.map(({ id, name, number }) => (
                <li className={s.list__item} key={id}>
                    <ContactItem
                        nameItem={name}
                        numberIem={number}
                        onDelete={() => { onDelete(id) }}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;

ContactList.propTypes = {
    contactList: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
};
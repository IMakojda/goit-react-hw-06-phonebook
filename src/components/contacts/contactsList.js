import React from "react";
import ContactItem from "./contactsItem";
import s from './contacts.module.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "Redux/Slice";

const ContactList = () => {
    const dispatch = useDispatch();
    const contactsState = useSelector((state) => state.contacts.items);
    const inputFilter = useSelector((state) => state.contacts.filter)
    const contactList = contactsState.filter(item => item.name.toLowerCase().includes(inputFilter.toLowerCase()));

    return (
        <ul className={s.list}>
            {contactList.map(({ id, name, number }) => (
                <li className={s.list__item} key={id}>
                    <ContactItem
                        nameItem={name}
                        numberIem={number}
                    />
                    <button onClick={() => dispatch(deleteContact(id))} className={s.list__btn} >delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;


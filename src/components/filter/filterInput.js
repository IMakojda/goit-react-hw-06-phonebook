import React from "react";
import s from './filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "Redux/Slice";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.contacts.filter);

  return (
    <label className={s.find__contacts}>Find contacts by name
      <input
        type="text"
        value={inputValue}
        onChange={e => dispatch(onChangeFilter(e.target.value))}
        className={s.find__input}
      />
    </label>
  )
}

export default FilterContacts;

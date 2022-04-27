import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: ''
}

const toolkitSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, actions) {
      state.items.push(actions.payload);
    },

    deleteContact(state, actions) {
      const deleteItem = state.items.filter(item => item.id !== actions.payload);
      return { ...state, items: [...deleteItem] }
    },

    onChangeFilter(state, actions) {
      state.filter = actions.payload;
    },
  }
});

export const { addContact, onChangeFilter, deleteContact } = toolkitSlice.actions
export default toolkitSlice.reducer;

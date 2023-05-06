import { createSlice } from "@reduxjs/toolkit";

let nextLinkId = 1;

const linksSlice = createSlice({
  name: "links",
  initialState: [],
  reducers: {
    addLink(state, action) {
      state.push({ id: nextLinkId++, text: action.payload });
    },
    deleteLink(state, action) {
      return state.filter((link) => link.id !== action.payload);
    },
    editLink(state, action) {
      const link = state.find((link) => link.id === action.payload.id);
      if (link) {
        link.text = action.payload.text;
      }
    },
  },
});

export const { addLink, deleteLink, editLink } = linksSlice.actions;

export default linksSlice.reducer;

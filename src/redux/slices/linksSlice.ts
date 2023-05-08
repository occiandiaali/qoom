import { createSlice } from "@reduxjs/toolkit";

type WebLink = {
  id: number;
  address: string;
  secret: string;
  description: string;
  creationDate: string;
};
// type InitialStateType = {
//   count: number;
//   links: WebLink[];
// };

let nextLinkId = 1;

// const initialState: InitialStateType = {
//   count: 0,
//   links: [],
// };
const initialState = {
  count: 0,
  links: [] as WebLink[],
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    // addLink(state, action) {
    //   state.push({ id: nextLinkId++, text: action.payload });
    // },
    newLink: (state, action) => {
      const now = new Date().toLocaleString();
      const link = {
        id: Math.random() * 100,
        address: action.payload,
        secret: action.payload,
        description: action.payload,
        creationDate: now,
      };
      state.links.push(link);
      state.count += 1;
    },
    // deleteLink(state, action) {
    //   return state.filter((link) => link.id !== action.payload);
    // },
    removeLink: (state, action) => {
      state.links = state.links.filter((link) => link.id !== action.payload);
      state.count -= 1;
    },
    // editLink(state, action) {
    //   const link = state.find((link) => link.id === action.payload.id);
    //   if (link) {
    //     link.text = action.payload.text;
    //   }
    // },
    updateLink: (state, action) => {
      const link = state.links.find((item) => item.id === action.payload.id);
      if (link) {
        link.address = action.payload.address;
        link.secret = action.payload.secret;
        link.description = action.payload.description;
      }
    },
  },
});

export const { newLink, removeLink, updateLink } = linksSlice.actions;

export default linksSlice.reducer;

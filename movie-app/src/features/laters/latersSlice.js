import { toWatchs } from '../../globals/globalVariables';
import { createSlice } from '@reduxjs/toolkit';

function getToWatch(){
  let toWacthFromStorage = localStorage.getItem(toWatchs);
  if(toWacthFromStorage === null){
    toWacthFromStorage = [];
  }else{
    toWacthFromStorage = JSON.parse(toWacthFromStorage);
  }
  return toWacthFromStorage;
}

const initialState = {
  items: getToWatch()
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const latersSlice = createSlice({
  name: 'laters',
  initialState,
  reducers: {
    addToWatch: (state, action) => {
      const newToWatch = [...state.items, action.payload];
      localStorage.setItem(toWatchs, JSON.stringify(newToWatch));
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = newToWatch;
    },
    deleteToWatch: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(toWatchs, JSON.stringify(itemsCopy));
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = itemsCopy;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToWatch, deleteToWatch } = latersSlice.actions

export default latersSlice.reducer;


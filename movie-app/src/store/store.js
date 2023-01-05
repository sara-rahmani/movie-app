import { configureStore } from '@reduxjs/toolkit';
import favsReducer from '../features/favs/favsSlice';
import latersReducer from '../features/laters/latersSlice';

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    laters: latersReducer

}
});

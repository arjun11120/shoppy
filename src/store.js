import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';

const store = configureStore({
  reducer: {
    shoppyProducts: productReducer,
  },
});

export default store;

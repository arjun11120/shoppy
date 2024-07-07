import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "AIR ZOOM PEGASUS",
      imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
      priceBefore: "$990.00",
      priceNow: "$749.00"
    },
    {
      id: 2,
      name: "AIR ZOOM PEGASUS",
      imgSrc: "https://i.postimg.cc/4dBHXR1Z/image.png",
      priceBefore: "$990.00",
      priceNow: "$749.00"
    },
    {
      id: 3,
      name: "AIR ZOOM PEGASUS",
      imgSrc: "https://i.postimg.cc/DfRL0nTy/image.png",
      priceBefore: "$990.00",
      priceNow: "$749.00"
    },
    {
      id: 4,
      name: "AIR ZOOM PEGASUS",
      imgSrc: "https://i.postimg.cc/DfRL0nTy/image.png",
      priceBefore: "$990.00",
      priceNow: "$749.00"
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.unshift(action.payload);
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.EmployeeId !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;

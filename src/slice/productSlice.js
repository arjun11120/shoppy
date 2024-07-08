import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Nike Invincible 3",
      imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
      priceBefore: "9900.00",
      priceNow: "7499.00"
    },
    {
      id: 2,
      name: "Nike Air Force 1 Mid By You",
      imgSrc: "https://i.postimg.cc/4dBHXR1Z/image.png",
      priceBefore: "9999.00",
      priceNow: "8999.00"
    },
    {
      id: 3,
      name: "Nike SB Dunk Low Pro",
      imgSrc: "https://i.postimg.cc/DfRL0nTy/image.png",
      priceBefore: "9900.00",
      priceNow: "7999.00"
    },
    {
      id: 4,
      name: "Nike Blazer Phantom Low",
      imgSrc: "https://i.postimg.cc/DfRL0nTy/image.png",
      priceBefore: "5999.00",
      priceNow: "4499.00"
    },{
      id: 5,
      name: "Nike Air Max Solo",
      imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
      priceBefore: "9990.00",
      priceNow: "9499.00"
    },
    {
      id: 6,
      name: "Nike Air Max 90",
      imgSrc: "https://i.postimg.cc/4dBHXR1Z/image.png",
      priceBefore: "9900.00",
      priceNow: "7490.00"
    },
    {
      id: 7,
      name: "AIR ZOOM PEGASUS",
      imgSrc: "https://i.postimg.cc/4dBHXR1Z/image.png",
      priceBefore: "12999.00",
      priceNow: "11999.00"
    },
    {
      id: 8,
      name: "Nike SB Dunk Low Pro",
      imgSrc: "https://i.postimg.cc/DfRL0nTy/image.png",
      priceBefore: "7990.00",
      priceNow: "7749.00"
    },
  ],
  cartList : []
};

const productSlice = createSlice({
  name: "shoppy",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIdToAdd = action.payload;
      const productToAdd = state.products.find(product => product.id === productIdToAdd);
      if (productToAdd) {
        const existingProductIndex = state.cartList.findIndex(product => product.id === productIdToAdd);
        if (existingProductIndex !== -1) {
          state.cartList[existingProductIndex].count++;
        } else {
          state.cartList.push({ ...productToAdd, count: 1 });
        }
      }
    },
    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter(
        product => product.id !== action.payload
      );
    },
    incrementCount: (state, action) => {
      const productIdToIncrement = action.payload;
      const productToIncrement = state.cartList.find(product => product.id === productIdToIncrement);  
      if (productToIncrement) {
        productToIncrement.count++;
      }
    },
    decrementCount: (state, action) => {
      const productIdToDecrement = action.payload;
      const productToDecrement = state.cartList.find(product => product.id === productIdToDecrement);
      if (productToDecrement && productToDecrement.count > 1) {
        productToDecrement.count--;
      }
    },
  },
});

export const { addProduct, removeProduct, incrementCount, decrementCount } = productSlice.actions;
export default productSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
   sort: boolean;
   collection: number;
   range: {
      km: boolean;
      lunar: boolean;
   },
   cart: [];
}

export type CartItem = {
   id: number,
   imageUrl: string,
   title: string,
   options: number,
   volume: number,
   voltage: number,
   weight: number,
   price: number,
   count: number
}

const initialState: ProductState = {
   sort: false,
   collection: 20,
   range: {
      km: true,
      lunar: false,
   },
   cart: [],
};

export const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      setDangerous(state) {
         state.sort = !state.sort;
      },
      setKmRange(state) {
         state.range.lunar = false;
         state.range.km = true;
      },
      setLunarRange(state) {
         state.range.km = false;
         state.range.lunar = true;
      },
      setCollection(state) {
         state.collection += 20;
      },
      addCartItem(state, action: PayloadAction<CartItem>) {
         state.cart.push(action.payload);
      },
      checkedItem(state, action: PayloadAction<any>) {
         const findItem = state.cart.find(obj => obj.id === action.payload);

         if (findItem) {
            findItem.checked = true;
         }
      },
      clearCart(state, action: PayloadAction<any>) {
         state.cart = state.cart.filter((item) => item.checked === false && item.id !== action.payload);
      },
   },
});

export const { setDangerous, setKmRange, setLunarRange, setCollection, addCartItem, clearCart, checkedItem } = productSlice.actions;
export default productSlice.reducer;
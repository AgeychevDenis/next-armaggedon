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
   name: string;
   date: string;
   distance: number;
   size: number;
   id: number;
   checked: boolean;
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
         // @ts-ignore
         state.cart.push(action.payload);
      },
      checkedItem(state, action: PayloadAction<any>) {
         // @ts-ignore
         const findItem = state.cart.find(obj => obj.id === action.payload);

         if (findItem) {
            // @ts-ignore
            findItem.checked = true;
         }
      },
      clearCart(state, action: PayloadAction<any>) {
         // @ts-ignore
         state.cart = state.cart.filter((item) => item.checked === false && item.id !== action.payload);
      },
   },
});



export const { setDangerous, setKmRange, setLunarRange, setCollection, addCartItem, clearCart, checkedItem } = productSlice.actions;
export default productSlice.reducer;
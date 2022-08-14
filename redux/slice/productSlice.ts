import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
   sort: false,
   range: {
      km: true,
      lunar: false,
    },
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
   },
});

export const { setDangerous, setKmRange, setLunarRange } = productSlice.actions;
export default productSlice.reducer;
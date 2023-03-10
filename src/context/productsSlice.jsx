import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: [],
  isLoading: false,
  isError: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      if(!state.data){
        state.isLoading = true;
      } 
    },
    fetchProductsSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchProductsFailure(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;
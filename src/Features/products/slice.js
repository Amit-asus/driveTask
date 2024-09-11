import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  loading: false,
  productCreating: false,
  productCreated: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      (state.loading = true), (state.error = null), (state.products = []);
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      (state.products = action.payload), (state.error = null);
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },
    createProduct: (state, action) => {
      state.productCreated = false;
      state.productCreating = true;
    },
    createProductSuccess: (state, action) => {
      state.productCreated = true;
      state.productCreating = false;
    },
    createProductFailure: (state, action) => {
      state.productCreated = false;
      state.productCreating = false;
    },
  },
});

export const { actions, reducer, name } = productSlice;

export default reducer;

// createFeePayment(state, _action: PayloadAction<any>) {
//   state.creatingFeePayment = true;
//   state.FeePaymentCreated = false;
// },
// createFeePaymentSuccess(state, _action: PayloadAction<any>) {
//   state.creatingFeePayment = false;
//   state.FeePaymentCreated = true;
// },
// createFeePaymentFailure(state, _action) {
//   state.creatingFeePayment = false;
//   state.FeePaymentCreated = false;
//   state.error = "Some error happened while creating FeePayment";
// },

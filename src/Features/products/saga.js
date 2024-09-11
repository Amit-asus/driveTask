import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

function* fetchProducts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = yield call(axios.get, url);
    console.log("result got ", result.data);
    yield put({ type: actions.fetchProductsSuccess.type, payload: result.data });
  } catch (error) {
    yield put({
      type: actions.fetchProductFailure.type,
      payload: error,
    });
  }
}

function* createProduct(action) 
{
   try {
    const url  =  "https://fakestoreapi.com/products" ;
    const response  = yield call(axios.post,url,action.payload) ;
    console.log('response',response)
    yield put ({type : actions.createProductSuccess.type ,payload :response.data}
    )
    
   } catch (error) {
     yield put ({type : actions.createProductSuccess.type , payload :  error })
   }
}

const productSaga = [takeLatest(actions.fetchProducts.type, fetchProducts),
  takeLatest(actions.createProduct.type ,createProduct) 
]; //this will  go in the array
export default productSaga;

// function* createProduct(action) {
//   console.log("-->",action.payload);
//   try {
//     const response = yield call(
//       axios.post,
//       "https://fakestoreapi.com/products",
//       action.payload
//     );
//     yield put(actions.postProductSuccess(response.data));
//   } catch (error) {
//     yield put(actions.postProductFailure(error.message));
//   }
// }
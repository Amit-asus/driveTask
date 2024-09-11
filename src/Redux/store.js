import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from  'redux-saga'
import reducers from './reducers';
import rootSaga from './sagas';


const sagaMiddleware  = createSagaMiddleware()  ;
export const store  = configureStore({
   reducer  : reducers ,
   middleware  :(getDefaultMiddleware)=> getDefaultMiddleware({thunk : false}).concat(sagaMiddleware),
   devTools  : true 
})

sagaMiddleware.run(rootSaga) ;
// const sagaMiddleware = createSagaMiddleware() ;


// export const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//     }).concat(sagaMiddleware),
//   devTools: true,
// });

// sagaMiddleware.run(rootSaga);

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false, // Disabling thunk since we're using saga
//     }).concat(sagaMiddleware),
//   devTools: true,
// });

// sagaMiddleware.run(rootSaga);

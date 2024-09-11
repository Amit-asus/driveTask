import { createSlice } from "@reduxjs/toolkit"

const initialState= {
  loading  : false  ,
  drives  : [] ,
  error  : null 
}


const driveSlice  =  createSlice(
  {
    name  : 'products' ,
    initialState  ,
    reducers : {
      fetchDrive : (state , action) =>
      {
           state.loading = true  ;
           state.error    = null ;
           state.drives = [] ;

      } ,
      fetchDriveSuccess : (state,action)=>{
        state.loading  = false  ;
        state.error =  null 
        state.drives =  action.payload  ;
      } ,
      fetchDriveFailure : (state,action)=>{
        state.loading  = false  ;
        state.error  = action.payload  ;
        state.drives =   [] ;
      }
    }
  }
)

export const {name,actions,reducer}    =  driveSlice  ;

export  default  reducer  ;

// const initialState  =  {
//   loading  : false  ,
//   drives  :[] ,
//   error  : null  ,
// }


// const driveSlice = createSlice(
//   {
//     name  : 'drives' ,
//     initialState  ,
//     reducers  : {
//        fetchDrives : (state,action) =>
//       {
//          state.loading = true ,
//          state.drives  = [] ,
//          state.error  =  null 
//       }
//       ,
//       fetchDrivesSuccess : (state,action) =>{
//         state.drives = action.payload  ,
//         state.loading  = false  ,
//         state.error  = null  

//       } ,

//       fetchDrivesFailure  :(state,action)=>{
//         console.log('actionerr' ,action.payload)
//         state.drives  =  [] ;
//         state.error  = action.payload  ;
//         state.loading  = false  ;

//       }
//     }
//   }
// )


// export const  {name,reducer,actions} = driveSlice  ;

// export default reducer ;
































// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   drives: [],
//   error: null,
//   loading: false,
// };

// const drivesSlice = createSlice({
//   name: "drivessss",
//   initialState,
//   reducers: {
//     fetchDrives(state, action) {
//       console.log('first');
//       state.drives = [];
//       state.loading = true;
//       state.error = null;
//     },
//     fetchDrivesSuccess(state, action) {
//       state.drives = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     fetchDrivesFailure(state, action) {
//       state.drives = [];
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { actions, reducer, name } = drivesSlice;

// export default drivesSlice.reducer;

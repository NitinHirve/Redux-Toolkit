// import {createSlice} from '@reduxjs/toolkit';
const createSlice = require('@reduxjs/toolkit').createSlice; 

const initialState ={
    numOfCakes :10
}

const cakeSlice = createSlice({  // createSlice uses the immer library.
    name : "cake", 
    initialState :initialState,
    reducers : {
        ordered : (state)=>{
           state.numOfCakes--
        },
        restocked : (state,action)=>{
            state.numOfCakes += action.payload
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        category: "All",
        brands: [],
        filters: []
    },
    reducers:{
        changeCategory: (state, action)=>{
            state.category = action.payload;
        }
    }
})

export const {changeCategory} = filterSlice.actions;
export default filterSlice.reducer;
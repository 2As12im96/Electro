import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
    "products/productsFetch" , 
    async ()=>{
       const response =  await axios.get('https://electro-api-roan.vercel.app/products');
       return response?.data
    } 
);
export const productSlice = createSlice({
    name:'products',
    initialState:{
       data: [],
       status:null,
       loading:false,
       error:''
    },
    reducers:{
		
	},
    extraReducers: (builder) => {
        builder
          .addCase(productsFetch.pending, (state) => {
            state.status = 'pending';
            state.loading = true
          });
          builder
          .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
            state.loading = false;
            state.error = '';
          });
          builder
          .addCase(productsFetch.rejected, (state) => {
            state.status = 'rejected';
            state.loading = false;
            state.error = 'We could not find the resource you requested. Please refer to the documentation for the list of resources.';
          });
      },
}); 

export default productSlice.reducer

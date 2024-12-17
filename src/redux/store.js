import { configureStore } from "@reduxjs/toolkit";
import productReducer  , {productsFetch} from "./productSlice";
import  cartReducer, { getTotals }  from "./cartSlice";


const store = configureStore({
    reducer:{
       cart:cartReducer,
       products:productReducer,
    }
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
export default store
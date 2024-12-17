import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';


export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:localStorage.getItem('cartItems') ? 
                  JSON.parse(localStorage.getItem('cartItems')) : [] ,
        cartTotalQuantity:0,
        cartTotalAmount:0 ,
        cartTotalAmountAfterShipping: 0,
        favoriteItems: localStorage.getItem("favoriteItems") ?
                       JSON.parse(localStorage.getItem("favoriteItems")) : [] ,
        favoriteTotalQuantity:localStorage.getItem("favoriteItems") ?
                              JSON.parse(localStorage.getItem("favoriteItems")).length: 0,
        justOneProduct:localStorage.getItem('justOneProduct') ? 
                  JSON.parse(localStorage.getItem('justOneProduct')) : [] ,
        compareProduct:localStorage.getItem('compareProduct') ? 
                  JSON.parse(localStorage.getItem('compareProduct')) : [] ,
    },
    reducers:{
		addToCart(state , action){
            const itemIndex = state.cartItems.findIndex(
                (item)=> item.id === action.payload.id
            );
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(` increased ${state.cartItems[itemIndex].title} product quantity ` , {
                    position: 'bottom-left',
                });
            }
            else{
                const tempProduct = { ...action.payload , cartQuantity:1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart ` , {
                    position: 'bottom-left',
                });
            }
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems))
        },
        removeFromCart(state , action){
            const nextCartItems = state.cartItems.filter(
                (cartItem)=> cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
            toast.error(`${action.payload.title} remove from cart ` , {
                position: 'bottom-left',
            });
        },
        decreaseCart(state , action){
            const itemIndex = state.cartItems.findIndex(
                (cartItem)=> cartItem.id === action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1 ;
                toast.info(` Decreased ${action.payload.title} cart quantity ` , {
                    position: 'bottom-left',
                });
            }
            else if(state.cartItems[itemIndex].cartQuantity === 1 ){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems
                toast.error(`${action.payload.title} remove from cart ` , {
                    position: 'bottom-left',
                });
            }
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },
        clearCart(state , action){
            state.cartItems = [];
            toast.error(`Cart cleared` , {
                position: 'bottom-left',
            });
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },
        getTotals(state , action){
            let {total , quantity} = state.cartItems.reduce(
                (cartTotal , cartItem)=> {
                    const { cost , cartQuantity } = cartItem;
                    const itemTotal = cost * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal
                },
                {
                    total:0,
                    quantity:0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
            state.cartTotalAmountAfterShipping = (state.cartTotalAmount + 20) /10;
        },
        addToFavorite(state, action) {
            const itemIndex = state.favoriteItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (itemIndex >= 0) {
              toast.info(`${action.payload.title} already exists in favorites`, {
                position: "bottom-left",
              });
            } 
            else {
              state.favoriteItems.push(action.payload);
              toast.success(`${action.payload.title} added to favorites`, {
                position: "bottom-left",
              });
              localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
              state.favoriteTotalQuantity++;
            }
        },
        removeFromFavorite(state, action) {
            const nextFavorites = state.favoriteItems.filter(
              (favoriteItem) => favoriteItem.id !== action.payload.id
            );
            state.favoriteItems = nextFavorites;
            localStorage.setItem("favoriteItems", JSON.stringify(nextFavorites));
            toast.warning(`${action.payload.title} removed from favorites`, {
              position: "bottom-left",
            });
            state.favoriteTotalQuantity--;
        },
        justOneProduct(state , action){
            state.justOneProduct = [action.payload];
            toast.success(`${action.payload.title} is now the only item in the cart`, {
                position: 'bottom-left',
            });
            localStorage.setItem('justOneProduct' , JSON.stringify(state.justOneProduct))
        },
        compareProduct(state , action){
            state.compareProduct = [action.payload];
            toast.success(`${action.payload.title} is now the only item in the compare cart`, {
                position: 'bottom-left',
            });
            localStorage.setItem('compareProduct' , JSON.stringify(state.compareProduct))
        },
        clearCompareProduct(state) {
            state.compareProduct = [];
            localStorage.setItem('compareProduct', JSON.stringify([]));
            toast.error('Compare product cleared', {
              position: 'bottom-left',
            });
        },
	},
}); 
export const {addToCart , removeFromCart , decreaseCart , clearCart , getTotals , addToFavorite , removeFromFavorite , justOneProduct , compareProduct , clearCompareProduct}  = cartSlice.actions
export default cartSlice.reducer
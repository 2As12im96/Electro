import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../redux/cartSlice";
import { useEffect } from "react";
import Header from "../Navbar/User";
function Cart(){
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    //Remove From Cart
    const handleRemoveFromCart = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }
    //Increase Cart
    const handleIncreaseCart = (cartItem)=>{
        dispatch(addToCart(cartItem))
    }
    //Decrease Cart
    const handleDecreaseCart = (cartItem)=>{
        dispatch(decreaseCart(cartItem));
    }
    //Clear Cart
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    //Total Amount
    useEffect(()=>{
        dispatch(getTotals())
    },[cart])
    return(
        <><Header/>
        <section className='shippingCart'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Contact Us</span>
                </div>
                <div className='carts_parent'>
                    <h1>Shopping Cart</h1>
                    {cart.cartItems.length === 0 ? (
                        <div className='cart_empty text-center'>
                            <p>Your cart is empty</p>
                            <button>
                                <Link to='/Shop' className='d-block'>Continue shopping</Link>
                            </button>
                        </div>
                    ) : (
                        <>
                        <div className='cart_found'>
                            <table>
                                <thead>
                                    <tr>
                                        <td className="one"></td>
                                        <td className="two"><span className='d-block'>Product</span></td>
                                        <td className="three"><span className='d-block'>Price</span></td>
                                        <td className='four'><span className='d-block'>Quantity</span></td>
                                        <td className='five'><span className='d-block'>Total</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.cartItems?.map(cartItem =>(
                                        <tr key={cartItem.id} id={cartItem.id}>
                                            <td className="one" onClick={()=> handleRemoveFromCart(cartItem)}><i className="bi bi-x-lg list_icon"></i></td>
                                            <td className="two">
                                                <div className='product_cart d-flex'>
                                                    <div className='cart_img'>
                                                        <img src={cartItem.imageURL} alt='' className='img-fluid'/>
                                                    </div>
                                                    <strong>{cartItem.title}</strong>
                                                </div>
                                            </td>
                                            <td className="three">
                                                <span className="sallery d-flex">
                                                    <span className='cost text-danger'>${cartItem.cost}.00</span>
                                                    <span className='discount'>${cartItem.discount}.00</span>
                                                </span>
                                            </td>
                                            <td className="four">
                                                <div className='count d-flex justify-content-center'>
                                                    <span className='d-flex justify-content-center rounded-circle math' onClick={()=> handleIncreaseCart(cartItem)}>
                                                        <i className="bi bi-plus"></i>
                                                    </span>
                                                    <span className='num'>{cartItem.cartQuantity}</span>
                                                    <span className='d-flex justify-content-center rounded-circle math' onClick={()=> handleDecreaseCart(cartItem)}>
                                                        <i className="bi bi-dash"></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="five">${cartItem.cost * cartItem.cartQuantity}.00</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className='cart_buttons'>
                            <div className='cart_total_btn d-flex'>
                                <div className='cart_total'>
                                    <p>Cart Total: <span>${cart.cartTotalAmount}.00</span></p>
                                </div>
                                <div className='cart_btn d-flex'>
                                    <button className='shopping'>
                                        <Link to='/Shop' className='d-block w-100'>Continue shopping</Link>
                                    </button>
                                    <button className='clear' onClick={()=> handleClearCart()}>Clear cart</button>
                                </div>
                            </div>
                            <button className='checkout'>
                                <Link to='/Payment' className='d-block w-100'>Proceed to Checkout</Link>
                            </button>
                        </div>
                        </>
                    )}
                    
                    
                    
                </div>
                
            </Container>
        </section>
        </>
    )
}
export default Cart
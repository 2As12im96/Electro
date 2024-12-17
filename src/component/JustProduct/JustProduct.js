import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Header from "../Navbar/User";
import { useSelector , useDispatch } from "react-redux";
import { addToCart, addToFavorite, compareProduct } from "../../redux/cartSlice";

function JustProduct(){
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    //Add To Cart
    const handleAddToCart = (item)=>{
        dispatch(addToCart(item))
    }
    //Add To Favorite
    const handleAddToFavorite = (item)=>{
        dispatch(addToFavorite(item))
    }
    //Add To Compare Page
    const handleAddCompareProduct = (item)=>{
        dispatch(compareProduct(item))
    }    
    return(
        <>
        <Header/>
        <section className='justProduct'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>
                        <Link to='/Shop'>All Collections</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Product</span>
                </div>
                <div className='row tags'>
                    <div className='col-md-3'>
                        <div className='products_categores rounded'>
                            <h3>Categories</h3>
                            <span className='main_line d-block'></span>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accessories</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Cameras</Link>
                                        <Link to='/Shop' className='d-block'>Software</Link>
                                        <Link to='/Shop' className='d-block'>Phones & PDAs</Link>
                                        <Link to='/Shop' className='d-block'>MP3 Players</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>All in One</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Music</Link>
                                        <Link to='/Shop' className='d-block'>Photography</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Gadgets</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Watches</Link>
                                        <Link to='/Shop' className='d-block'>Eyewear</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Gaming</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Mouse</Link>
                                        <Link to='/Shop' className='d-block'>Keyboard</Link>
                                        <Link to='/Shop' className='d-block'>Headphone</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Laptops & Computer</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Mac Computers</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Printers & Ink</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>TV & Audio</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Ultrabooks</Link>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        {cart.justOneProduct?.map((item)=>{
                            return(
                                <div key={item.id} id={item.id} className='child d-flex'>
                                    <div className='child_img'>
                                        <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                    </div>
                                    <div className='child_info'>
                                        <div className='icons'>
                                            <span className='city'>{item.city}</span>
                                            <strong>{item.title}</strong>
                                            <span className='stars d-block'>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <span>(1)</span>
                                            </span>
                                            <span className='social_icons d-flex'>
                                                <span className='facebook'>
                                                    <i className="bi bi-facebook"></i>
                                                    <span>share</span>
                                                </span>
                                                <span className='twitter'>
                                                    <i className="bi bi-twitter"></i>
                                                    <span>share</span>
                                                </span>
                                            </span>
                                            <span className='text d-block'>Product SKU:N/A</span>
                                            <span className='avilable d-block'>Available: 
                                                <span className='color'>In stock</span>
                                            </span>
                                        </div>
                                        <div className='points'>
                                            <ul>
                                                <li>Super-Silent cube gaming case solidly built with 0.8mm SGCC to block out most of the noise</li>
                                                <li>Leathercoated front and top panels with smooth surface finishing</li>
                                                <li>Removable top cover for easy access to Motherboard</li>
                                                <li>Completely removable ODD+FDD rack for ease of installing water cooling system</li>
                                                <li>Supports a complete 240mm water cooling system on the top panel</li>
                                            </ul>
                                        </div>
                                        <div className='features'>
                                            <span className="wishlist_fn" onClick={()=> handleAddToFavorite(item)}>
                                                <i className="bi bi-suit-heart"></i>
                                                <span>wishlist</span>
                                            </span>
                                            <span className="compare_fn" onClick={()=> handleAddCompareProduct(item)}>
                                                <Link to='/Compare'>
                                                    <i className="bi bi-arrow-repeat list_icon"></i>
                                                    <span>compare</span>
                                                </Link>
                                            </span>
                                            <div className='addCart d-flex'>
                                                <span className='sallery'>
                                                    <span className='cost'>${item.cost}.00</span>
                                                    <span className='discount'>${item.discount}.00</span>
                                                </span>
                                                <button onClick={()=> handleAddToCart(item)}>
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                                    <span>Add to Cart</span>
                                                </button>
                                            </div>
                                            <span className='user_icon d-flex'>
                                                <i className="bi bi-cart4"></i>
                                                <span>
                                                    <strong>Other people want this.</strong>
                                                    <p>7 people have this in their carts right now.</p>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}
export default JustProduct

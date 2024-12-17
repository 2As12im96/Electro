import {useEffect} from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useSelector , useDispatch } from 'react-redux';
import { productsFetch } from '../../redux/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { addToCart, addToFavorite, justOneProduct } from '../../redux/cartSlice';
import Header from '../Navbar/User';
function Products(){
    //Display Products
    const data  = useSelector(state=> state.products);
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(productsFetch());
	},[]);
    //Add To Cart
    const handleAddToCart = (item)=>{
        dispatch(addToCart(item))
    }
    //Add To Favorite
    const handleAddToFavorite = (item)=>{
        dispatch(addToFavorite(item))
    }
    //Add Item To Just One Product page
    const handleJustOneProduct = (item)=>{
        dispatch(justOneProduct(item))
    }
    let User = localStorage.getItem('User Name');    
    return(
        <>
        <Header/>
        <section className='products'>
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
                <span>Products</span>
            </div>
            <div className='row'>
                <div className='col-lg-3'>
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
                <div className='col-lg-9 col-md-12'>
                    <div className='products_items'>
                        <h1 className='text-center'>Products</h1>
                        {data.loading && <div className='loading'>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>}
                        {User&&<>
                        {!data.loading && data.data.length ? ( <section>
                            {data.data.map((item)=> (<div key={item.id} id={item.id} className='cart d-flex'>
                                        <div className='cart_img' onClick={()=> handleJustOneProduct(item)}>
                                            <Link to='/JustProduct'>
                                                <img src={item.imageURL} alt='' className=''/>
                                            </Link>
                                        </div>
                                        <div className='cart_info'>
                                            <span className='city'>Bulgari</span>
                                            <h6>{item.title}</h6>
                                            <ul>
                                                <li>High-fidelity stereo music and clear speech</li>
                                                <li>100% Stable and Comfortable when exercising, running and other outdoo sports</li>
                                                <li>Up to 6 hours music play</li>
                                                <li>7 hours talking time</li>
                                                <li>Force Touch trackpad (13-inch model)</li>
                                            </ul>
                                        </div>
                                        <div className='cart_featured'>
                                            <p className='cart_sallery'>${item.cost}.00</p>
                                            <button onClick={()=> handleAddToCart(item)}>Add To cart</button>
                                            <div className="card_icons d-flex">
                                                <Link to='/JustProduct'>
                                                    <span className="icon_fn" onClick={()=> handleJustOneProduct(item)}>
                                                        <i className="bi bi-eye"></i>
                                                        <span>view</span>
                                                    </span>
                                                </Link>
                                                <span className="icon_fn" onClick={()=> handleAddToFavorite(item)}>
                                                    <i className="bi bi-suit-heart"></i>
                                                    <span>wishlist</span>
                                                </span>
                                            </div>
                                        </div>
                                        
                                    </div>))}
                        </section> ): null}</>}
                        {!User&&<>
                        {!data.loading && data.data.length ? ( <section>
                            {data.data.map((item)=> (<div key={item.id} id={item.id} className='cart d-flex'>
                                        <div className='cart_img'>
                                            <Link to='/Login'>
                                                <img src={item.imageURL} alt='' className=''/>
                                            </Link>
                                        </div>
                                        <div className='cart_info'>
                                            <span className='city'>Bulgari</span>
                                            <h6>{item.title}</h6>
                                            <ul>
                                                <li>High-fidelity stereo music and clear speech</li>
                                                <li>100% Stable and Comfortable when exercising, running and other outdoo sports</li>
                                                <li>Up to 6 hours music play</li>
                                                <li>7 hours talking time</li>
                                                <li>Force Touch trackpad (13-inch model)</li>
                                            </ul>
                                        </div>
                                        <div className='cart_featured'>
                                            <p className='cart_sallery'>${item.cost}.00</p>
                                            <Link to='/Login'><button>Add To cart</button></Link>
                                            <div className="card_icons d-flex">
                                                <Link to='/Login'>
                                                    <span className="icon_fn">
                                                        <i className="bi bi-eye"></i>
                                                        <span>view</span>
                                                    </span>
                                                </Link>
                                                <Link to='/Login'>
                                                    <span className="icon_fn">
                                                        <i className="bi bi-suit-heart"></i>
                                                        <span>wishlist</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </div>))}
                        </section> ): null}</>}
                        {!data.loading && data.error ? <div className='error_msg d-flex justify-content-center align-items-center'><p><strong>Error:</strong> {data.error}</p></div> : null}
                    </div>
                </div>
            </div>
            </Container>
        </section>
        </>
    )
}

export default Products
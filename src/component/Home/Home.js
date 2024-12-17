import React , {useState} from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Navbar/User';
import { addToCart, addToFavorite, justOneProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function Home(){
    //Add To Cart
    const dispatch = useDispatch();
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
     //scroll to top
     const scrollToTop = ()=> {
        window.scrollTo({
            top: 0 ,
            behavior:'smooth',
        });
    }
    let User = localStorage.getItem('User Name');
    console.log(User)
    // component section
    const [Cart , setCart] = useState([
        {
        id:'1',
        img:'image/Home/component/Stereo.webp',
        title:'Stereo',
        alt:'Stereo',
        items:'17 Products',
        },
        {
            id:'2',
            img:'image/Home/component/Bluetooth%20Speakers.webp',
            title:'Bluetooth Speakers',
            alt:'Bluetooth Speakers',
            items:'8 Products',
        },
        {
            id:'3',
            img:'image/Home/component/Headphones.webp',
            title:'Headphones',
            alt:'Headphones',
            items:'8 Products',
        },
        {
            id:'4',
            img:'image/Home/component/Speakers.webp',
            title:'Speakers',
            alt:'Speakers',
            items:'12 Products',
        }
    ]);
    const items = Cart.map((item)=>{
        return(
            <div key={item.id} className='col-lg-3 col-md-6'>
                <Link to='/Shop' className='d-block' onClick={scrollToTop}>
                    <div id={item.id} className='component_child'>
                        <img src={item.img} alt={item.alt} className=''/>
                        <span className='line d-block'></span>
                        <h6>{item.title}</h6>
                        <span className='items'>{item.items}</span>
                    </div>
                </Link>
            </div>
        )
    });
    // Hot Products section
    const [hotCart , setHotCart] = useState([
        {
            id:'cart_5',
            title:'product 5',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094361/electro/pl43xuw0jpwwvcptxlzt.webp',
            alt:'ipadgreen',
            cost:65,
            discount:99,
        },
        {
            id:'cart_25',
            title:'product 25',
            city:'Spain',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095059/electro/joszezakethznhioxffl.webp',
            alt:'printer',
            cost:160,
            discount:199,
        },
        {
            id:'cart_41',
            title:'product 41',
            city:'Indian',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095723/electro/eoyl6bexntz2tucqvx3g.webp',
            alt:'phone',
            cost:85,
            discount:120,
        },
        {
            id:'cart_4',
            title:'product 4',
            city:'China',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094333/electro/tzv4t1aaveilcvuijs4f.webp',
            alt:'apptablet',
            cost:200,
            discount:299,
        },
        {
            id:'cart_6',
            title:'product 6',
            city:'UEA',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094373/electro/a0ktncrtq2t00zn0gdtv.webp',
            alt:'lgphone',
            cost:90,
            discount:120,
        },
        {
            id:'cart_1',
            title:'product 1',
            city:'Armani',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094220/electro/ekus9t865opuxpep8f6b.webp',
            alt:'bluePhone',
            cost:150,
            discount:199,
        }
    ]);
    
    let hotProducts = hotCart.map((item)=> {
        return(
            <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img' onClick={()=> handleJustOneProduct(item)}>
                                <Link to='/JustProduct'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <div className='sallery_icon d-flex justify-content-center rounded-circle' onClick={()=> handleAddToCart(item)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                </div>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/JustProduct'>
                                    <span className='icon_fn' onClick={()=> handleJustOneProduct(item)}>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <span className='icon_fn' onClick={()=> handleAddToFavorite(item)}>
                                    <i className="bi bi-suit-heart"></i>
                                    <span>wishlist</span>
                                </span>
                            </div>
                        </div>
                    </div>
        )
    });
    let hotProductsWithoutUser = hotCart.map((item)=> {
        return(
                    <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img'>
                                <Link to='/Login'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <Link to='/Login'>
                                    <div className='sallery_icon d-flex justify-content-center rounded-circle'>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                    </div>
                                </Link>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/Login'>
                                    <span className='icon_fn'>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <Link to='/Login'>
                                    <span className='icon_fn'>
                                        <i className="bi bi-suit-heart"></i>
                                        <span>wishlist</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
        )
    });
    // New Producs section
    const [newCart , setNewCart] = useState([
        {
            id:'cart_9',
            title:'product 9',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094453/electro/zpjd7wudzbgtcjamemas.webp',
            alt:'one1plus',
            cost:50,
            discount:90,
        },
        {
            id:'cart_17',
            title:'product 17',
            city:'Spain',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094811/electro/hpkz1ikyqt0drqeifjy1.webp',
            alt:'watchsmart',
            cost:25,
            discount:65,
        },
        {
            id:'cart_15',
            title:'product 15',
            city:'Indian',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094669/electro/wr7jce2fc89glnyrlcrl.webp',
            alt:'sam1',
            cost:215,
            discount:250,
        },
        {
            id:'cart_3',
            title:'product 3',
            city:'China',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094303/electro/amo6failuf2ysun0cpbe.webp',
            alt:'applap',
            cost:215,
            discount:260,
        },
        {
            id:'cart_41',
            title:'product 41',
            city:'Indian',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095723/electro/eoyl6bexntz2tucqvx3g.webp',
            alt:'phone',
            cost:85,
            discount:120,
        },
        {
            id:'cart_21',
            title:'product 21',
            city:'Armani',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094944/electro/nbua7rfzchtzaug4xjid.webp',
            alt:'camera2',
            cost:180,
            discount:220,
        }
    ]);
    let newProducts = newCart.map((item)=> {
        return(
            <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img' onClick={()=> handleJustOneProduct(item)}>
                                <Link to='/JustProduct'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <div className='sallery_icon d-flex justify-content-center rounded-circle' onClick={()=> handleAddToCart(item)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                </div>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/JustProduct'>
                                    <span className='icon_fn' onClick={()=> handleJustOneProduct(item)}>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <span className='icon_fn' onClick={()=> handleAddToFavorite(item)}>
                                    <i className="bi bi-suit-heart"></i>
                                    <span>wishlist</span>
                                </span>
                            </div>
                        </div>
                    </div>
        )
    });
    let newProductsWithoutUser = newCart.map((item)=> {
        return(
                    <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img'>
                                <Link to='/Login'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <Link to='/Login'>
                                    <div className='sallery_icon d-flex justify-content-center rounded-circle'>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                    </div>
                                </Link>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/Login'>
                                    <span className='icon_fn'>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <Link to='/Login'>
                                    <span className='icon_fn'>
                                        <i className="bi bi-suit-heart"></i>
                                        <span>wishlist</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
        )
    });
    // Recommendation section
    const [recommend , setRecommend] = useState([
        {
            id:'cart_3',
            title:'product 3',
            city:'China',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094303/electro/amo6failuf2ysun0cpbe.webp',
            alt:'applap',
            cost:215,
            discount:260,
        },
        {
            id:'cart_1',
            title:'product 1',
            city:'Armani',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094220/electro/ekus9t865opuxpep8f6b.webp',
            alt:'bluePhone',
            cost:150,
            discount:199,
        },
        {
            id:'cart_25',
            title:'product 25',
            city:'Spain',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095059/electro/joszezakethznhioxffl.webp',
            alt:'printer',
            cost:160,
            discount:199,
        },
        {
            id:'cart_41',
            title:'product 41',
            city:'Indian',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095723/electro/eoyl6bexntz2tucqvx3g.webp',
            alt:'phone',
            cost:85,
            discount:120,
        },
        {
            id:'cart_9',
            title:'product 9',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094453/electro/zpjd7wudzbgtcjamemas.webp',
            alt:'one1plus',
            cost:50,
            discount:90,
        },
        {
            id:'cart_17',
            title:'product 17',
            city:'Spain',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094811/electro/hpkz1ikyqt0drqeifjy1.webp',
            alt:'watchsmart',
            cost:25,
            discount:65,
        }
    ]);
    let recommendProducts = recommend.map((item)=> {
        return(
            <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img' onClick={()=> handleJustOneProduct(item)}>
                                <Link to='/JustProduct'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <div className='sallery_icon d-flex justify-content-center rounded-circle' onClick={()=> handleAddToCart(item)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                </div>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/JustProduct'>
                                    <span className='icon_fn' onClick={()=> handleJustOneProduct(item)}>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <span className='icon_fn' onClick={()=> handleAddToFavorite(item)}>
                                    <i className="bi bi-suit-heart"></i>
                                    <span>wishlist</span>
                                </span>
                            </div>
                        </div>
                    </div>
        )
    });
    let recommendProductsWithoutUser = recommend.map((item)=> {
        return(
                    <div key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
                        <div id={item.id} className='card rounded' >
                            <div className='card_title'>
                                <span>{item.city}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className='card_img'>
                                <Link to='/Login'>
                                    <img src={item.imageURL} alt={item.alt} className='img-fluid'/>
                                </Link>
                            </div>
                            <div className='card_sallery d-flex'>
                                <div className='sallery_num'>
                                    <span className='cost d-block'>${item.cost}.00</span>
                                    <span className='discount'>${item.discount}.00</span>
                                </div>
                                <Link to='/Login'>
                                    <div className='sallery_icon d-flex justify-content-center rounded-circle'>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 68 64"><path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path></svg>
                                    </div>
                                </Link>
                            </div>
                            <span className='card_line d-block'></span>
                            <div className='card_icons d-flex'>
                                <Link to='/Login'>
                                    <span className='icon_fn'>
                                        <i className="bi bi-eye"></i>
                                        <span>view</span>
                                    </span>
                                </Link>
                                <Link to='/Login'>
                                <span className='icon_fn'>
                                    <i className="bi bi-suit-heart"></i>
                                    <span>wishlist</span>
                                </span>
                                </Link>
                            </div>
                        </div>
                    </div>
        )
    });
    //Topic 
    //Topics data 
    const topics = [
        {
            id:'topic_1',
            img:'image/Topics/3.webp',
            title:'SpaceX Falcon',
        },
        {
            id:'topic_2',
            img:'image/Topics/2.webp',
            title:'Coffe Time in Office',
        },
        {
            id:'topic_3',
            img:'image/Topics/1.webp',
            title:'Robot Wars',
        }
    ]
    //stored topic data based on locale storage 
    localStorage.setItem('topics' , JSON.stringify(topics));
    
    const topic = JSON.parse(localStorage.getItem('topics'));
    const handelTopicClick = (id) => {
            const selectedTopic = topic.find(item => item.id === id);
            localStorage.setItem('selectedTopic' , JSON.stringify(selectedTopic));
    }
    return(
        <><Header/>
        <section className='Home'>
            <div className='bg_info'>
                <div className='bg-details'>
                    <Container>
                        <img src='image/Home/slider-v12-image.png' className='img-fluid' alt='Electro'/>
                        <div className='bg_text'>
                            <span>SHOP TO GET WHAT YOU LOVE</span>
                            <strong>
                                <p>TIMEPIECES THAT</p> 
                                <p>MAKE A STATEMENT</p>
                                <span className='small'>UP TO</span>40% OFF</strong>
                                <Link to='/Shop' className='d-flex rounded'>Start Buying</Link>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='component'>
                <Container>
                    <div className='row'>
                        {items}
                    </div>
                </Container>
            </div>
            <div className='products'>
                <Container>
                    <h3>Hot Products Today</h3>
                    <div className='progress'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        {User&&<>
                            {hotProducts}
                        </>}
                        {!User&&<>
                            {hotProductsWithoutUser}
                        </>}
                    </div>
                </Container>
            </div>
            <div className='Banners'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-6 col-md-4'>
                            <Link to='/Shop' onClick={scrollToTop}>
                                <img src='image/Home/Banner/banner-1.jpg' className='img-fluid first' alt='banner'/>
                            </Link>    
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <Link to='/Shop' onClick={scrollToTop}>
                                <img src='image/Home/Banner/banner-2.jpg' className='img-fluid fully' alt='banner'/>
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <Link to='/Shop' onClick={scrollToTop}>
                                <img src='image/Home/Banner/banner-3.jpg' className='img-fluid fully' alt='banner'/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='products'>
                <Container>
                    <h3>New Products</h3>
                    <div className='progress'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        {User&&<>
                            {newProducts}
                        </>}
                        {!User&&<>
                            {newProductsWithoutUser}
                        </>}
                    </div>
                </Container>
            </div>
            <div className='products'>
                <Container>
                    <h3>Recommendations</h3>
                    <div className='progress'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        {User&&<>
                            {recommendProducts}
                        </>}
                        {!User&&<>
                            {recommendProductsWithoutUser}
                        </>}
                    </div>
                </Container>
            </div>
            <div className='topics'>
                <Container>
                    <h3>Tips & Inspirations</h3>
                    <div className='progress'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Link to='/SelectedTopic' className='d-block'>
                                <div id='topic_1' className='topic' onClick={()=> handelTopicClick('topic_1')}>
                                        <div className='topic_img'>
                                            <img src='image/Topics/3.webp' alt='tobic' className='img-fluid rounded'/>
                                        </div>
                                        <div className='topic_info'>
                                            <span>Sep 15, 2022</span>
                                            <h4>SpaceX Falcon</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectu</p>
                                        </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-md-6'>
                            <Link to='/SelectedTopic' className='d-block'>
                                <div id='topic_2' className='topic' onClick={()=> handelTopicClick('topic_2')}>
                                        <div className='topic_img'>
                                            <img src='image/Topics/2.webp' alt='tobic' className='img-fluid rounded'/>
                                        </div>
                                        <div className='topic_info'>
                                            <span>Sep 15, 2022</span>
                                            <h4>Coffe Time in Office</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectu</p>
                                        </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='Brands'>
                <Container>
                    <h3>Known Brands</h3>
                    <div className='progress'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <Link to='/Shop' className='rounded' onClick={scrollToTop}>
                                <div className='brands_child'>
                                    <img src='image/Home/Brands/brand-1.png' alt='brand-1' className='first_img'/>
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                    <img src='image/Home/Brands/brand-1-1.webp' alt='brand-1-1' className='last_img'/>
                                </div>
                            </Link>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <Link to='/Shop' className='rounded' onClick={scrollToTop}>
                                <div className='brands_child'>
                                    <img src='image/Home/Brands/brand-2.png' alt='brand-2' className='first_img'/>
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                    <img src='image/Home/Brands/brand-2-1.webp' alt='brand-2-1' className='last_img'/>
                                </div>
                            </Link>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <Link to='/Shop' className='rounded' onClick={scrollToTop}>
                                <div className='brands_child'>
                                    <img src='image/Home/Brands/brand-3.png' alt='brand-3' className='first_img'/>
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                    <img src='image/Home/Brands/brand-3-1.png' alt='brand-3-1' className='last_img'/>
                                </div>
                            </Link>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <Link to='/Shop' className='rounded' onClick={scrollToTop}>
                                <div className='brands_child'>
                                    <img src='image/Home/Brands/brand-4.png' alt='brand-4' className='first_img'/>
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                    <img src='image/Home/Brands/brand-4-1.png' alt='brand-4-1' className='last_img'/>
                                </div>
                            </Link>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <Link to='/Shop' className='rounded' onClick={scrollToTop}>
                                <div className='brands_child'>
                                    <img src='image/Home/Brands/brand-5.png' alt='brand-5' className='first_img'/>
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                    <img src='image/Home/Brands/brand-5-1.png' alt='brand-5-1' className='last_img'/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
export default Home
//01003791184
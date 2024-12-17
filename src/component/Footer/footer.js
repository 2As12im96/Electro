import React  , {useState , useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { justOneProduct } from '../../redux/cartSlice';

function Footer(){
    const [blocked , setBlocked] = useState(null);
    const handleLinksClick = (id) => {
        setBlocked(blocked === id ? null : id);
    };
    /*--------------------------------------*/
    // scrollToTop button
    const [scrollTop , setScrollTop] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            window.scrollY > 250 ? setScrollTop(true) : setScrollTop(false);
        };
        window.addEventListener('scroll' , handleScroll);
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , []);
    const ScrollToTopButton = ()=> {
        window.scrollTo({
            top: 0 ,
            behavior:'smooth',
        });
    }
    /*--------------------------------------*/
    const phones = [
        {
            id:'cart_14',
            title:'product 14',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094657/electro/qkzg3qqg1ct7e4sdry5o.webp',
            alt:'ipadgreen',
            cost:65,
            discount:100,
        },
        {
            id:'cart_7',
            title:'product 7',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094382/electro/ccxtkqfgkggxcylygjil.webp',
            alt:'ipadgreen',
            cost:115,
            discount:145,
        },
        {
            id:'cart_12',
            title:'product 12',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094594/electro/se7xbpcgff43wvctohkt.webp',
            alt:'ipadgreen',
            cost:35,
            discount:60,
        },
    ];
    const phonesUi = phones.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/JustProduct'>
                <div id={item.id} className='cart d-flex w-100' onClick={()=> handleJustOneProduct(item)}>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });
    const phonesUiWithoutUser = phones.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/Login'>
                <div id={item.id} className='cart d-flex w-100'>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });
    const Computers = [
        {
            id:'cart_3',
            title:'product 3',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094303/electro/amo6failuf2ysun0cpbe.webp',
            alt:'ipadgreen',
            cost:215,
            discount:265,
        },
        {
            id:'cart_29',
            title:'product 29',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095108/electro/edyr6vnez5wwicvuqhlj.jpg',
            alt:'ipadgreen',
            cost:415,
            discount:455,
        },
        {
            id:'cart_28',
            title:'product 28',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095098/electro/umyvpaegw8se0alua6vj.jpg',
            alt:'ipadgreen',
            cost:15,
            discount:36,
        },
    ];
    const ComputersUi = Computers.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/JustProduct'>
                <div id={item.id} className='cart d-flex w-100' onClick={()=> handleJustOneProduct(item)}>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });
    const ComputersUiWithoutUser = Computers.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/Login'>
                <div id={item.id} className='cart d-flex w-100'>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });    
    const Electrocis = [
        {
            id:'cart_27',
            title:'product 27',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095085/electro/wskrvdjolrdplruqthom.jpg',
            alt:'ipadgreen',
            cost:220,
            discount:255,
        },
        {
            id:'cart_11',
            title:'product 11',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734094571/electro/n4mmjimz4t47jtfsbmki.webp',
            alt:'ipadgreen',
            cost:15,
            discount:35,
        },
        {
            id:'cart_36',
            title:'product 36',
            city:'Bulgari',
            imageURL:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1734095530/electro/kyw8avxcbn1atpd3otgf.jpg',
            alt:'ipadgreen',
            cost:400,
            discount:422,
        },
    ];
    const ElectrocisUi = Electrocis.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/JustProduct'>
                <div id={item.id} className='cart d-flex w-100' onClick={()=> handleJustOneProduct(item)}>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });  
    const ElectrocisUiWithoutUser = Electrocis.map((item)=>{
        return(
            <div className='col-lg-12' key={item.id}>
            <Link to='/Login'>
                <div id={item.id} className='cart d-flex w-100'>
                    <div className='cart_image'>
                        < img src={item.imageURL} className='img-fluid' alt={item.alt}/>
                    </div>
                    <div className='cart_info'>
                        <h6>{item.title}</h6>
                        <div className='cost d-flex'>
                            <span className='sallery text-danger'>${item.cost}.00</span>
                            <span className='discount'>${item.discount}.00</span>     
                        </div> 
                    </div>
                </div>
            </Link>
        </div>            
        )
    });     
    const dispatch = useDispatch();
    //Add Item To Just One Product page
    const handleJustOneProduct = (item)=>{
        dispatch(justOneProduct(item))
    }
    let User = localStorage.getItem('User Name');     
    return(
        <footer>
            <Container>
                < div className='other_products'>
                    <div className='title'>
                        <h3>Featured products</h3>
                        <div className='progress'>
                            <span className='heading_line'></span>
                        </div>    
                    </div> 
                    <div className='product'> 
                        <Container>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6'>
                                    <div className='row'>
                                        <h5>Phones</h5>
                                        <div className='progress'>
                                            <span className='heading_line'></span>
                                        </div>
                                        {User&&<>{phonesUi}</>} 
                                        {!User&&<>{phonesUiWithoutUser}</>}
                                    </div> 
                                </div> 
                                <div className='col-lg-3 col-md-6'>
                                    <div className='row'>
                                        <h5>Computers</h5>
                                        <div className='progress'>
                                            <span className='heading_line'></span>
                                        </div>
                                        {User&&<>{ComputersUi}</>} 
                                        {!User&&<>{ComputersUiWithoutUser}</>}
                                    </div> 
                                </div>  
                                <div className='col-lg-3 col-md-6'>
                                    <div className='row'>
                                        <h5>Electrocis</h5>
                                        <div className='progress'>
                                            <span className='heading_line'></span>
                                        </div>
                                        {User&&<>{ElectrocisUi}</>} 
                                        {!User&&<>{ElectrocisUiWithoutUser}</>}
                                    </div> 
                                </div>
                                <div className='col-lg-3 col-md-6'>
                                    <div className='image w-100'>
                                        <Link to='/Shop'>
                                            <img src='image/Home/v2-right-1.jpg' className='img-fluid' alt='banner'/>
                                        </Link>
                                    </div> 
                                </div>  
                            </div>  
                        </Container>
                    </div>
                </div>
                <div className='socail d-flex'>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-1.png' className='img-fluid'/>
                        </Link>
                    </span>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-2.png' className='img-fluid'/>
                        </Link>
                    </span>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-3.png' className='img-fluid'/>
                        </Link>
                    </span>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-4.png' className='img-fluid'/>
                        </Link>
                    </span>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-5.png' className='img-fluid'/>
                        </Link>
                    </span>
                    <span >
                        <Link to='/Shop'>
                            <img src='image/social/themeforst-6.png' className='img-fluid'/>
                        </Link>
                    </span>

                </div>
            </Container>
            <div className='subscribe bg-danger'>
                <div className='subscripe_parent d-flex'>       
                    <Container>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child d-flex'>
                                    < svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-paper-plane fa-w-16 fa-2x"><path fill="currentColor" d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z" className=""></path></svg>
                                    <p>Sign up to Newsletter</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child form d-flex justify-content-end'>
                                    <form className='form-control'>
                                        <input type='text' placeholder='Enter your Email...'/>
                                        <button>subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='footer_contact'>
                <Container>
                    <div className='footer_contact_parent d-flex'>
                        <div className='contact_parent'>
                            <h1 ><Link to='/' className="logo-brand">electro<span className="d-block bg-danger rounded-circle dot"></span></Link></h1>
                            <div className='footer_phone d-flex'>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="55" viewBox="0 0 67 64">
                                        <path d="M32.256 0h2.88c5.824 0.768 11.712 3.008 15.808 7.296 3.84 3.904 5.888 9.152 6.848 14.464 1.024 0.832 2.112 1.728 2.816 2.88 1.984 0.704 3.776 2.048 4.8 3.904 1.088 1.92 1.6 4.032 1.984 6.080v2.88c-0.576 3.264-1.728 6.848-4.544 8.832-0.832 0.64-2.048 0.704-2.688 1.664-0.576 0.896-1.344 1.6-2.24 2.24-0.384 2.688-1.28 5.504-3.136 7.552-1.984 2.24-4.992 3.328-7.936 3.392-1.728 0.064-3.52-0.512-5.184 0.064-1.152 0.768-1.664 2.304-3.072 2.752h-7.744c-2.368-0.064-4.032-2.496-3.776-4.736 0.064-1.856 1.728-3.392 3.584-3.52 2.56-0.192 5.248-0.192 7.808 0.192 1.472 0.192 2.368 1.408 3.2 2.496 3.2 0.192 6.592 0.192 9.536-1.216 2.304-1.088 3.648-3.584 3.968-6.016 0.32-1.28-0.96-1.856-1.728-2.624-0.768-0.64-0.96-1.792-1.024-2.752-0.256-2.56 0-5.184 0.064-7.744 0.128-3.968-0.064-7.936 0.128-11.84 0.064-1.728 0.832-3.584 2.56-4.288-0.704-5.568-3.456-10.88-7.872-14.336-7.552-6.464-19.776-6.528-27.392-0.128-4.224 3.584-6.72 8.896-7.68 14.336 1.344 0.704 2.176 2.048 2.432 3.52 0.576 2.816 0.256 5.76 0.256 8.64-0.128 3.584 0.256 7.104 0.064 10.688-0.192 1.536-0.384 3.264-1.408 4.544-0.96 1.152-2.688 1.344-4.096 0.896-1.216-0.448-1.92-1.664-2.624-2.688-2.24-0.704-4.096-2.24-5.12-4.352-0.896-1.728-1.408-3.648-1.728-5.568v-2.88c0.384-2.112 0.896-4.224 1.984-6.080 1.024-1.92 2.88-3.264 4.928-3.904 0.448-1.28 1.664-2.048 2.688-2.88 0.96-5.504 3.2-11.008 7.296-14.976 4.16-3.968 9.728-6.016 15.36-6.784M9.792 24.832c-0.64 6.528-0.128 13.12-0.384 19.648-0.064 1.024 0.064 2.112 0.576 3.072 0.576-0.064 1.28 0.192 1.728-0.192 0.704-1.408 0.448-3.072 0.384-4.608 0-6.016 0.256-12.032-0.256-17.984-0.64-0.192-1.536-0.448-2.048 0.064M55.552 24.768c-0.576 6.656-0.128 13.312-0.384 20.032 0 0.832 0.128 1.792 0.512 2.56 0.448 0.384 1.152 0.128 1.664 0.192 0.832-1.472 0.576-3.2 0.576-4.8-0.064-6.016 0.256-12.032-0.32-18.048-0.704-0.192-1.408-0.256-2.048 0.064M3.584 31.104c-1.024 2.752-1.088 5.76-0.384 8.64 0.448 1.984 1.536 4.032 3.52 4.864-0.064-5.696 0.192-11.456-0.128-17.152-1.472 0.704-2.496 2.112-3.008 3.648M60.672 27.456c0.064 5.696-0.192 11.456 0.128 17.152 1.216-0.64 2.176-1.728 2.752-2.944 1.152-2.624 1.28-5.568 0.832-8.384-0.384-2.304-1.472-4.8-3.712-5.824M29.824 60.8c2.944 0.64 6.080 0.64 9.088 0 0.192-0.64 0.192-1.344 0-1.984-2.816-0.064-5.76-0.896-8.512-0.064-0.96 0.256-0.896 1.28-0.576 2.048z"></path>
                                        </svg>
                                        <div className='phones'>
                                            <span>Got questions? Call us 24/7!</span>
                                            <p>
                                                <span>(800) 8001-8588,</span>
                                                <span>(0600) 874 548</span>
                                            </p>
                                        </div>
                            </div>
                            <div className='footer_address'>
                                        <p className='title'>Contact info</p>
                                        <p>17 Princess Road, London, Greater</p>
                                        <p >London NW1 8JR, UK</p>
                            </div>
                            <div className='footer_icons'>
                                        <Link to='/' ><i className="bi bi-facebook"></i></Link>
                                        <Link to='/' ><i className="bi bi-twitter"></i></Link>
                                        <Link to='/' ><i className="bi bi-whatsapp"></i></Link>
                                        <Link to='/' ><i className="bi bi-envelope-fill"></i>
                                        </Link>
                            </div>
                        </div>
                        <div id='first_links' className='links first' onClick={()=> handleLinksClick('first_links')}>
                            <div className='info d-flex'>
                                <h6>Find In Fast</h6>
                                <i className={blocked === 'first_links' ? 'bi bi-chevron-up active' : 'bi bi-chevron-up'}></i>
                            </div>
                            <ul className={blocked === 'first_links' ? 'active' : ''}>
                                <li ><Link to='/Shop'>Gaming</Link></li>
                                <li ><Link to='/Shop'>Laptops & Computer</Link></li>
                                <li ><Link to='/Shop'>Mac Computers</Link></li>
                                <li ><Link to='/Shop'>PC Computers</Link></li>
                                <li ><Link to='/Shop'>Ultrabooks</Link></li>
                            </ul>
                        </div>
                        <div id='second_links' className='links' onClick={()=> handleLinksClick('second_links')}>
                            <div className='info d-flex'>
                                <h6>Information</h6>
                                <i className={blocked === 'second_links' ? 'bi bi-chevron-up active' : 'bi bi-chevron-up'}></i>
                            </div>
                            <ul className={blocked === 'second_links' ? 'active' : ''}> 
                                <li ><Link to='/About'>About Us</Link></li>
                                <li ><Link to='/Contact'>Contact Us</Link></li>
                                <li ><Link to='/Shop'>All Collections</Link></li>
                                <li ><Link to='/Terms'>Privacy policy</Link></li>
                                <li ><Link to='/Terms'>Terms & Conditions</Link></li>
                            </ul>   
                        </div>    
                        <div id='third_links' className='links' onClick={()=> handleLinksClick('third_links')}>
                            <div className='info d-flex'>
                                <h6>Customer Care</h6>
                                <i className={blocked === 'third_links' ? 'bi bi-chevron-up active' : 'bi bi-chevron-up'}></i>
                            </div>
                            <ul className={blocked === 'third_links' ? 'active' : ''}> 
                                <li ><Link to='/Contact'>Contact Us</Link></li>
                                <li ><Link to='/Cart'>Shopping Cart</Link></li>
                                <li ><Link to='/Shipping'>Shipping & Return</Link></li>
                                <li ><Link to='/FAQS'>FAQs</Link></li>
                                <li ><Link to='/About'>About Us</Link></li>
                            </ul>   
                        </div>  
                        <div id='foured_links' className='links' onClick={()=> handleLinksClick('foured_links')}>
                            <div className='info d-flex'>
                                <h6>In the Spotlight</h6>
                                <i className={blocked === 'foured_links' ? 'bi bi-chevron-up active' : 'bi bi-chevron-up'}></i>
                            </div>
                            <ul className={blocked === 'foured_links' ? 'active' : ''}> 
                                <li ><Link to='/Shop'>Electronics</Link></li>
                                <li ><Link to='/Shop'>Toys</Link></li>
                                <li ><Link to='/Shop'>Video Games</Link></li>
                                <li ><Link to='/Shop'>Home Products</Link></li>
                                <li ><Link to='/Shop'>Clothing</Link></li>
                                <li ><Link to='/Shop'>Sports & Outdoors</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='copy_right'>
                <Container>
                    <div className='parent d-flex'>
                        <span>
                            © 2023  
                            <strong >
                                <Link to='/'>Electro X - Electro 10 Shopify Theme.</Link>
                            </strong>
                              All Rights Reserved
                        </span>
                        <img src='image/pay/pay.png' className='img-fluid d-block' alt='payment methods'/>
                    </div>
                </Container>
            </div>
            <Container>
                <div className= {scrollTop ? 'scrollToTop active d-flex justify-content-center rounded-circle' : 'scrollToTop d-flex justify-content-center rounded-circle'} onClick={ScrollToTopButton}>
                    <i className="bi bi-chevron-up"></i>
                </div>
            </Container>
        </footer>
    )
}
export default Footer

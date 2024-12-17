import React , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample(){
    const [search , setSearch] = useState(false);
    const [shop , setShop] = useState(false);
    const [scroll , setScroll] = useState(false);
    const [favorite , setFavorite] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          window.scrollY > 250 ? setScroll(true) : setScroll(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);
      let html = document.querySelector('.html');
      let icons = document.querySelectorAll('.parent_icons .box_icons')
      const handleFav = ()=> {
            setFavorite(!favorite);
            var x;
            for(x= 0; x < icons.length; x++){
                if(favorite){
                    html.classList.remove('active');
                    icons[x].classList.remove('active');
                }
                else{
                    html.classList.add('active');
                    icons[x].classList.add('active');
                }
            }
      }
      
    return (
        <>
        <div className={favorite ? 'banner favorite active' : 'banner'} onClick={()=> handleFav()}></div> 
        <header className={scroll ? 'active' : ''} >
        <div className={search ? 'banner active' : 'banner' } onClick={()=>  setSearch(!search)}></div>
        <div className={shop ? 'banner active' : 'banner' } onClick={()=> setShop(!shop)}></div>   
        <div className="min_nav container">
            <p>Welcome to Worldwide Electronics Store</p>
            <div className='register'>
                <div className='sign_in'>
                    <Link to='/Login'>
                        <i className="bi bi-person"></i>
                        <span>Sign in or Register</span>
                    </Link>
                </div>
            </div>
        </div> 
            
        {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="">
            <Container>
                
                <Link to="/" className='navbar-brand'>electro<span className='d-block bg-danger rounded-circle dot'></span></Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    electro
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3 nav_links">
                    <Link to="/" className='nav-link' >Home</Link>
                    <span className='nav_line'></span>
                    <NavDropdown
                        title="Catalog"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <span className='nav_line'></span>    
                        <Link to='/Shop' className='dropdown-item' >shop</Link>
                        <Link to='/Cart' className='dropdown-item' >
                        cart
                        </Link>
                        <Link to='/Login' className='dropdown-item' >
                        My Account
                        </Link>
                    </NavDropdown>
                    <span className='nav_line'></span> 
                    <NavDropdown
                        title="Pages"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <span className='nav_line'></span>     
                        <Link to='/About' className='dropdown-item' >About Us</Link>
                        <Link to='/Contact' className='dropdown-item' >
                        Contact Us
                        </Link>
                        <Link to="/FAQS" className='dropdown-item' >
                        FaQs
                        </Link>
                        <Link to="/Terms" className='dropdown-item' >
                        Terms & Conditions
                        </Link>
                    </NavDropdown>
                    <span className='nav_line'></span> 
                    <Link to='/Topics' className='nav-link' >Features</Link>
                    <span className='nav_line'></span> 
                    </Nav>
                    <div className="parent_icons">
                        <div className='search box_icons res_none'  onClick={()=> {
                                setSearch(!search);
                            }}>
                            <i className={search ? 'bi bi-x-lg list_icon' : 'bi bi-search list_icon' }></i>
                        </div>
                        <div className={search ? 'search_box active rounded' : 'search_box rounded' }>
                            <form action="" method="get">
                                <input type="text" placeholder="Search..." required=""/>
                                <button type="submit">
                                    <i className='bi bi-search'></i>
                                </button>
                            </form>
                        </div>
                        
                        <div className='compare box_icons'>
                            <Link to='/Compare' className='d-block'>
                                <i className="bi bi-arrow-repeat list_icon"></i>
                            </Link>
                        </div>

                        <div className='heart box_icons' onClick={()=> handleFav()}>
                            <i className="bi bi-suit-heart list_icon"></i>
                            <span className="number rounded-circle bg-danger d-flex justify-content-center">
                                <span>0</span>
                            </span>
                        </div>
                       

                        <div className="shop box_icons res_none"  onClick={()=> setShop(!shop)}>
                            <i className="bi bi-cart-fill list_icon"></i>
                            <span className="number rounded-circle bg-danger d-flex justify-content-center">
                                <span>{cartTotalQuantity}</span>
                            </span>
                        </div>
                        <div className={shop ? 'shop_box res_none active rounded' : 'shop_box res_none rounded'}>
                            <p className='notFound'>Your cart is empty</p>
                        </div>
                        <div className='sallery box_icons res_none'>
                            <span>${cartTotalAmount}.00</span>
                        </div>
                    </div>
                    <div className='offcanvas_info'>
                        <strong>Need help? Contact us</strong>
                        <span className="d-flex details">
                            <i className="bi bi-telephone-fill"></i>
                            <span>(+800) 123 456 7890</span>
                        </span>
                        <span className="d-flex details">
                            <i className="bi bi-envelope-fill"></i>
                            <span>sample@email.com</span>
                        </span>
                    </div>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className='icon_responsive'>
                    <div className='search box_icons icon_nav'  onClick={()=> { setSearch(!search); }}>
                        <i className={search ? 'bi bi-x-lg list_icon' : 'bi bi-search list_icon' }></i>
                    </div>
                    <div className={search ? 'search_box active rounded' : 'search_box rounded' }>
                        <form action="" method="get">
                            <input type="text" placeholder="Search..." required=""/>
                            <button type="submit">
                                <i className='bi bi-search'></i>
                            </button>
                        </form>
                    </div>
                    <Link to='/Cart'>
                        <div className="shop box_icons icon_nav">
                            <i className="bi bi-cart-fill list_icon"></i>
                            <span className="number rounded-circle bg-danger d-flex justify-content-center">
                                <span>{cartTotalQuantity}</span>
                            </span>
                        </div>
                    </Link>
                </div>
            </Container>
            </Navbar>
            
        ))}

        </header>
        <div className={favorite ? 'heart_box active' :'heart_box'}>
            <div className='heart_header d-flex'>
                <strong>wishlist</strong>
                <i className="bi bi-x-lg" onClick={()=> handleFav()}></i>
            </div>
            <div className='heart_box_social'>
                <h1>SHARE WISHLIST</h1>
                <div className='parent_icons d-flex'>
                    <span className='rounded-circle d-flex justify-content-center'>
                        <Link to='/'> 
                            <i className="bi bi-facebook"></i>
                        </Link>
                    </span>
                    <span className='rounded-circle d-flex justify-content-center'>
                        <Link to='/'>
                            <i className="bi bi-twitter"></i>
                        </Link>
                    </span>
                    <span className='rounded-circle d-flex justify-content-center'>
                        <Link to='/'>
                            <i className="bi bi-whatsapp"></i>
                        </Link>
                    </span>
                    <span className='rounded-circle d-flex justify-content-center'>
                        <Link to='/'>
                            <i className="bi bi-envelope-fill"></i>
                        </Link>
                    </span>
                    <span className='rounded-circle d-flex justify-content-center'>
                        <Link to='/'>
                            <i className="bi bi-link-45deg"></i>
                        </Link>
                    </span>
                </div>
            </div>
            <div className='heart_box_body'>
                <h2>My wishlist</h2>
                <div className='heart_box_body_parent'>
                    <div className='heart_notFound'>
                        <p className='text-center'>Not available favorite product</p>
                    </div>
                    <div className='heart_items'>
                        <div className='heart_item'>
                            <div className='item_cart'>
                                <span className='d-flex'>
                                    <span className='item_img d-block'>
                                        <img src='image/shop/phone/bluePhone_48f88786-4ca9-4002-8017-6fce5fcc7af1.webp' alt='' className='img-fluid'/>
                                    </span>
                                    <span className='item_info'>
                                        <strong className='d-block'>Georgeous White Bag_1</strong>
                                        <span className='d-block'>In stock</span>
                                        <span className='d-block'>$150.00</span>
                                    </span>
                                </span>
                                <span className='item_btn d-flex justify-content-between align-items-center'>
                                    <button className='btn add'>Add to Cart</button>
                                    <button className='btn remove'>Remove</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='sections_box_icons'>
            <Container>
                <div className='parent d-flex'>
                    <div className='child'>
                        <Link to='/Shop'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-laptop fa-w-20 fa-2x"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg></Link>
                        <p>Computers</p>
                    </div>
                    <div className='child'>
                        <Link to='/Shop'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-camera fa-w-16 fa-2x"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg></Link>
                        <p>Cameras</p>
                    </div>
                    <div className='child'>
                        <Link to='/Shop'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-mobile fa-w-10 fa-2x"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg></Link>
                        <p>Mobiles</p>
                    </div>
                    <div className='child'>
                        <Link to='/Shop'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-tv fa-w-20 fa-2x"><path fill="currentColor" d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path></svg></Link>
                        <p>TV</p>  
                    </div>
                    <div className='child'>
                        <Link to='/Shop'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-gamepad fa-w-20 fa-2x"><path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg></Link>
                        <p>Gaming</p>
                    </div>
                </div>
            </Container>
        </div>
        </>
    );
}

export default OffcanvasExample;
import React , {useState} from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Navbar/User';

function Shop(){
    //Define shop sections
    const [shop] = useState([
        {
            id:'1',
            img:'image/shop/electronics/Accesories.webp',
            title:'Accesories',
            alt:'Accesories',
        },
        {
            id:'2',
            img:'image/shop/electronics/All%20in%20One.jpg',
            title:'All in One',
            alt:'All in One',
        },
        {
            id:'3',
            img:'image/shop/camera/Cameras.jpg',
            title:'Cameras',
            alt:'Cameras image/shop/games/Eyewear.jpg',
        },
        {
            id:'4',
            img:'image/shop/games/Eyewear.jpg',
            title:'Eyewear',
            alt:'Eyewear ',
        },
        {
            id:'5',
            img:'image/shop/games/Gadgets.jpg',
            title:'Gadgets',
            alt:'Gadgets ',
        },
        {
            id:'6',
            img:'image/shop/games/Gaming.jpg',
            title:'Gaming',
            alt:'Gaming ',
        },
        {
            id:'7',
            img:'image/shop/Headphone%20&%20Music/Headphone.jpg',
            title:'Headphone',
            alt:'Headphone ',
        },
        {
            id:'8',
            img:'image/shop/computer/Keyboard.jpg',
            title:'Keyboard',
            alt:'Keyboard ',
        },
        {
            id:'9',
            img:'image/shop/computer/Laptops%20&%20Computer.jpg',
            title:'Laptops & Computer',
            alt:'Laptops & Computer ',
        },
        {
            id:'10',
            img:'image/shop/computer/Mac%20Computers.jpg',
            title:'Mac Computers',
            alt:'Mac Computers',
        },
        {
            id:'11',
            img:'image/shop/electronics/Mouse.jpg',
            title:'Mouse',
            alt:'Mouse',
        },
        {
            id:'12',
            img:'image/shop/electronics/MP3%20Players.jpg',
            title:'MP3 Players',
            alt:'MP3 Players',
        },
        {
            id:'13',
            img:'image/shop/Headphone%20&%20Music/Headphone.jpg',
            title:'Music',
            alt:'Music',
        },
        {
            id:'14',
            img:'image/shop/computer/PC%20Computers.jpg',
            title:'PC Computers',
            alt:'PC Computers',
        },
        {
            id:'15',
            img:'image/shop/phone/Phones%20&%20PDAs.jpg',
            title:'Phones & PDAs',
            alt:'Phones & PDAs',
        },
        {
            id:'16',
            img:'image/shop/camera/Photography.jpg',
            title:'Photography',
            alt:'Photography',
        },
        {
            id:'17',
            img:'image/shop/electronics/printer.webp',
            title:'printer & Ink',
            alt:'printer & Ink',
        },
        {
            id:'18',
            img:'image/shop/electronics/Software.jpg',
            title:'Software',
            alt:'Software',
        },
        {
            id:'19',
            img:'image/shop/electronics/TV%20&%20Audio.jpg',
            title:'TV & Audio',
            alt:'TV & Audio',
        },
        {
            id:'20',
            img:'image/shop/computer/Ultrabooks.jpg',
            title:'Ultrabooks',
            alt:'Ultrabooks',
        },
        {
            id:'21',
            img:'image/shop/clock/Watches.jpg',
            title:'Watches',
            alt:'Watches',
        },
    ]);
    const items = shop.map((item)=> {
        return(
            <div key={item.id} className='col-lg-2 col-md-3 col-sm-6'>
                <Link to='/Products'>
                    <div id={item.id} className='child text-center'>
                        <div className='child_img'>
                            <img src={item.img} alt={item.alt} className='img-fluid'/>
                        </div>
                        <strong>{item.title}</strong>
                    </div>
                </Link>
            </div>
        )
    });
    return(
        <>
            <Header/>
            <section className='shop'>
                <Container>
                    <div className="links d-flex">
                        <span>
                            <Link to='/'>Home</Link>
                        </span>
                        <i className="bi bi-chevron-up"></i>
                        <span>All Collections</span>
                    </div>
                    <div className='parent'>
                        <h1>Collections</h1>
                        <Container>
                            <div className='row'>
                                {items}
                            </div>
                        </Container>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Shop
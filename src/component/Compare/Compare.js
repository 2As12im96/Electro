import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../Navbar/User';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompareProduct, justOneProduct } from '../../redux/cartSlice';

function Compare(){
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    //Add Item To Just One Product page
    const handleJustOneProduct = (item)=>{
        dispatch(justOneProduct(item))
    }
    //Remove Item From Compare Page
    const handleRemoveItemFromComparePage = (item)=>{
       dispatch(clearCompareProduct(item))
    } 
    return (
        <><Header/>
        <section className='compare'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Arena Compare Page</span>
                </div>
                <div className='compare_parent'>
                    <h2 className='text-center'>Compare Page</h2>
                    {cart.compareProduct.length > 0 ? (
                    <>
                    {cart.compareProduct?.map((item)=>{
                        return(
                            <div className='child_true w-100' key={item.id} id={item.id}>
                                <table className='w-100'>
                                    <tbody>
                                        <tr>
                                            <td className='tab_title text-center'>FEATURES</td>
                                            <td className='tab_info text-center'>
                                                <div className='tab_info_child d-flex'>
                                                    <div className='image'>
                                                        <img src={item.imageURL} alt='' className='img-fluid'/>
                                                    </div>
                                                    <div className='text'>
                                                        <strong>{item.title}</strong>
                                                        <p>${item.cost}.00</p>
                                                        <span onClick={()=> handleJustOneProduct(item)}>
                                                            <Link to='/JustProduct'>view product</Link>
                                                        </span>
                                                    </div>
                                                </div>
                                                <span onClick={()=> handleRemoveItemFromComparePage(item)}><i className="bi bi-x-lg list_icon"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                                <td className='tab_title text-center'>AVAILABILITY</td>
                                                <td className='tab_info text-center'>
                                                    <span>In stock</span>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className='tab_title text-center'>OPTIONS</td>
                                            <td className='tab_info text-center'>
                                                <span><strong>Size:</strong> M, L, X, XL</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='tab_title text-center'>VENDOR</td>
                                            <td className='tab_info text-center'>
                                                <span>Dolce & Gabbana</span>
                                            </td>
                                    </tr>
                                        <tr>
                                            <td className='tab_title text-center'>COLLECTION</td>
                                            <td className='tab_info text-center'>
                                                <span>
                                                    <Link to='/Shop'>Accessories ,</Link>
                                                    <Link to='/Shop'> All in One ,</Link>
                                                    <Link to='/Shop'>Mouse ,</Link>
                                                    <Link to='/Shop'>Phones & PDAs ,</Link>
                                                    <Link to='/Shop'>TV & Audio</Link>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                                          
                        )
                    })}
                    </>                        
                    ) : 
                    (<>
                        <div className='child_false d-flex justify-content-center'>
                            <p>No products in compare!</p>
                        </div>                    
                    </>)
                    }


                </div>
            </Container>
        </section>
        </>
    )
}
export default Compare
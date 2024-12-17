import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Navbar/User";

function About(){
    return(
        <>
            <Header/>
            <section className='About'>
                <div className='About_bg d-flex justify-content-center'>
                    <div className='About_bg_info text-center'>
                        <Container>
                            <h2>About us</h2>
                            <p>Passion may be a friendly or eager interest in or admiration for a proposal, cause, <span className='d-block'>discovery, or activity or love to a feeling of unusual excitement.</span></p>
                        </Container>
                    </div>
                </div>
                <div className='About_blogs'>
                        <Container>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Link to='/Shop' className='d-block'>
                                        <div className='blog'>
                                            <div className='blog_img'>
                                                <img src='image/About/Blogs/blog1.jpg' alt='blog1' className='img-fluid'/>
                                            </div>
                                            <div className='blog_info text-center'>
                                                <h5>What we really do?</h5>
                                                <p>Donec libero dolor, tincidunt id laoreet vitae,ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4'>
                                    <Link to='/Shop' className='d-block'>
                                        <div className='blog'>
                                            <div className='blog_img'>
                                                <img src='image/About/Blogs/blog2.jpg' alt='blog2' className='img-fluid'/>
                                            </div>
                                            <div className='blog_info text-center'>
                                                <h5>What we really do?</h5>
                                                <p>Donec libero dolor, tincidunt id laoreet vitae,ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4'>
                                    <Link to='/Shop' className='d-block'>
                                        <div className='blog'>
                                            <div className='blog_img'>
                                                <img src='image/About/Blogs/blog3.jpg' alt='blog3' className='img-fluid'/>
                                            </div>
                                            <div className='blog_info text-center'>
                                                <h5>What we really do?</h5>
                                                <p>Donec libero dolor, tincidunt id laoreet vitae,ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                </div>
                <div className='About_persons'>
                    <Container>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person1.webp' alt='person1' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>Thomas Snow</h6>
                                            <p>Ceo Founder</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person2.jpg' alt='person2' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>Anna Baranov</h6>
                                            <p>Client Care</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person3.jpg' alt='person3' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>Andrei Kowalsy</h6>
                                            <p>Support Boss</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person4.jpg' alt='person4' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>Pamela Doe</h6>
                                            <p>Delivery Driver</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person5.jpg' alt='person5' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>Susan McCain</h6>
                                            <p>Packaking Girl</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <Link to='/Shop'>
                                    <div className='person text-center'>
                                        <div className='person_img'>
                                            <img src='image/About/Persons/person6.png' alt='person6' className='img-fluid rounded-circle'/>
                                        </div>
                                        <div className='person_info text-center'>
                                            <h6>See Details</h6>
                                           
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='About_information'>
                    <Container>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='child_info'>
                                    <div className='first_ask'>
                                        <h6>What we really do?</h6>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                    </div>
                                    <div className='last_ask'>
                                        <h6>Our vision</h6>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='child_info'>
                                    <div className='first_ask'>
                                        <h6>History of the Company</h6>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                    </div>
                                    <div className='last_ask'>
                                        <h6>Cooperate with Us!</h6>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='child_info'>
                                    <div className='lines d-flex'>
                                        <span className='d-flex justify-content-center plus'>
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                        <span>Support 24/7</span>
                                    </div>
                                    <div className='lines d-flex'>
                                        <span className='d-flex justify-content-center plus'>
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                        <span>Best Quanlity</span>
                                    </div>
                                    <div className='lines d-flex'>
                                        <span className='d-flex justify-content-center plus'>
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                        <span>Fastest Delivery</span>
                                    </div>
                                    <div className='lines d-flex'>
                                        <span className='d-flex justify-content-center plus'>
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                        <span>Customer Care</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default About
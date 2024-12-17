import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Navbar/User';

function Contact(){
    return(
        <>
            <Header/>
            <section className='contact'>
                <Container>
                    <div className="links d-flex">
                        <span>
                            <Link to='/'>Home</Link>
                        </span>
                        <i className="bi bi-chevron-up"></i>
                        <span>Contact Us</span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='contact_form'>
                                <h3>Leave A Message</h3>
                                <div className='progress'>
                                    <span className="line"></span>
                                </div>
                                <p>If you have any questions please send us a message using the adjacent form and we will get back to you as soon as possible</p>
                                <form>
                                    <label htmlFor='name'>Name*</label>
                                    <input type='text' name='name' id='name' className='form-control'/>

                                    <label htmlFor='email'>Email*</label>
                                    <input type='email' name='email' id='email' className='form-control'/>

                                    <label htmlFor='phone'>phone Number*</label>
                                    <input type='phone' name='number' id='phone' className='d-block form-control'/>

                                    <label htmlFor='textarea'>Message*</label>
                                    <textarea id='textarea' className='d-block form-control'></textarea>

                                    <input type='submit' value='Send Message' className='d-flex justify-content-center btn'/>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='contact_map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1507308614528!2d-79.3341591849897!3d43.76972985290642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d25ef313d221%3A0x519a94099352214f!2s243%20Consumers%20Rd%2C%20North%20York%2C%20ON%20M2J%204W8%2C%20Canada!5e0!3m2!1sen!2s!4v1639401509230!5m2!1sen!2s" width="600 " height="450 " style={{border:0}} allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Contact
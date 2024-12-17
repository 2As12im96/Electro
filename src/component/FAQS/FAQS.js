import Accordion from 'react-bootstrap/Accordion';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Navbar/User';
function FAQS(){
    return(
        <>
        <Header/>
        <section className='Faqs'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Frequently Asked Questions</span>
                </div>
                <div className="Frequently">
                    <h1 className='text-center'>Frequently Asked Questions</h1>
                    <Container>
                        <h3>Shipping Information</h3>
                        <span className='Faqs_line d-block'></span>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child'>
                                    <strong>What Shipping Methods Are Available?</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child'>
                                    <strong>How Long Will it Take To Get My Package?</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child'>
                                    <strong>How Do I Track My Order?</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className='child'>
                                    <strong>Do I Need A Account To Place Order?</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="faq_Accordion">
                    <h1 className='text-center'>FAQ Second Version</h1>
                    <Container>
                        <Accordion>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What Shipping Methods Are Available?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How Long Will it Take To Get My Package?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How Do I Track My Order?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How Do I Place an Order?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How Should I to Contact if I Have Any Queries?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Do I Need an Account to Place an Order?</Accordion.Header>
                                <Accordion.Body>
                                    In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Container>
                </div>
            </Container>
        </section>
        </>
    )
}
export default FAQS
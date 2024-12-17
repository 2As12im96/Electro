import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Navbar/User";
function Terms(){
    return(
        <>
            <Header/>
            <section className='Terms'>
                <Container>
                    <div className='links d-flex'>
                        <span>
                            <Link to='/'>Home</Link>
                        </span>
                        <i className="bi bi-chevron-up"></i>
                        <span>Terms & Conditions</span>
                    </div>
                    <h1 className='text-center'>Terms & Conditions</h1>
                    <div className='first_list term'>
                        <h2>Intellectual Property</h2>
                        <ol>
                            <li>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.</span>
                            </li>
                            <li>
                                <span>Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</span>
                            </li>
                            <li>
                                <span>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.
                                </span>
                            </li>
                            <li>
                                <span>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.
                                </span>
                            </li>
                            <li>
                                <span>Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.
                                </span>
                            </li>
                            <li>
                                <span>Pellentesque vitae eros eget enim mollis placerat.
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className="last_list term">
                        <h2>Termination</h2>
                        <ol>
                            <li>
                                <span>There are many variations of passages of Lorem Ipsum available</span>
                            </li>
                            <li>
                                <span>If you are going to use a passage</span>
                            </li>
                            <li>
                                <span>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</span>
                            </li>
                            <li>
                                <span>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</span>
                            </li>
                            <li>
                                <span>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>
                            </li>
                            <li>
                                <span>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</span>
                            </li>
                        </ol>
                    </div>
                    <div className='agreement term'>
                        <h2>Changes To This Agreement</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
                    </div>
                    <div className='contact term'>
                        <h2>Contact us</h2>
                        <p>f you have any questions about this Agreement, please contact us filling this 
                        <Link to ='/'>contact form</Link></p>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Terms
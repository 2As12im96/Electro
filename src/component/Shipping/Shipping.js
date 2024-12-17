import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Navbar/User";
function Shipping(){
    return(
        <>
            <Header/>
            <section className='shipping'>
                <Container>
                    <div className='links d-flex'>
                        <span>
                            <Link to='/'>Home</Link>
                        </span>
                        <i className="bi bi-chevron-up"></i>
                        <span>Shipping & Return</span>
                    </div>
                    <h1 className='text-center'>Shipping & Return</h1>
                    <div className='first_content term'>
                        <h3>RETURNS POLICY</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia optio illum. Officiis autem nemo error deleniti numquam hic officia sint accusamus nostrum culpa libero, magnam quis repudiandae architecto nobis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt obcaecati minus</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?</p>
                    </div>
                    <div className='last_content term'>
                        <h3>SHIPPING</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia optio illum. Officiis autem nemo error deleniti numquam hic officia sint accusamus nostrum culpa libero, magnam quis repudiandae architecto nobis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt obcaecati minus</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium culpa libero deleniti eaque quia impedit a sint commodi quod possimus illo dicta nihil, tenetur, aut reiciendis! Labore, illum obcaecati?</p>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Shipping
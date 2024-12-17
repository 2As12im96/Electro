import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Header from "../Navbar/User";


function Topics(){
    /*-------------------------------*/
    //request topic data from locale stroage
    const getTopicsData = JSON.parse(localStorage.getItem('topics'));
    //chooise one topic alone for show Ui in another page by Id
    const handleClick = (id) => {
        const selectedTopic = getTopicsData.find(item => item.id === id);
        localStorage.setItem('selectedTopic' , JSON.stringify(selectedTopic));
    }
    //Show topic data in Browser
    const items =  getTopicsData.map((item)=> {
        return(
                <div key={item.id} id={item.id} className='big_topic'>
                    <Link to='/SelectedTopic' className='d-block'>
                        <div className='big_topic_img' onClick={()=> handleClick(item.id)}>
                            <img src={item.img} alt='' className='img-fluid'/>
                        </div>
                    </Link>
                    <div className='big_topic_info'>
                        <Link to='/SelectedTopic' className='d-block' onClick={()=> handleClick(item.id)}>{item.title}</Link>
                        <span className='d-block date'>15 Sep, 2020 * Posted by: Electro 6 Admin</span>
                        <span className='topic_line'></span>
                        <div className='topic_icons d-flex'>
                            <Link to='/SelectedTopic' className='d-block'>
                                <button onClick={()=> handleClick(item.id)}>Read More</button>
                            </Link>    
                            <span className='chat_icon'>
                                <i className="bi bi-chat"></i>
                                <span>0</span>
                            </span>
                        </div>
                    </div>
                </div>
        )
    });
    /*-------------------------------*/
   
    return(
        <>
        <Header/>
        <section className='Topics'>
            <Container>
            <div className="links d-flex">
                <span>
                    <Link to='/'>Home</Link>
                </span>
                <i className="bi bi-chevron-up"></i>
                <span>New</span>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='big_topics'>
                        {items}
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='topic_menu'>
                        <h3>About</h3>
                        <div className='progress'>
                            <span className='line'></span>
                        </div>
                        <p className='About_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut, aliquid nobis perspiciatis nisi autem illo laborum aut quos exercitationem pariatur. Blanditiis expedita temporibus laborum similique, numquam vel. Repellat, earum.</p>
                        <div className='products_categores rounded'>
                            <h3>Categories</h3>
                            <span className='main_line d-block'></span>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accessories</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Cameras</Link>
                                        <Link to='/Shop' className='d-block'>Software</Link>
                                        <Link to='/Shop' className='d-block'>Phones & PDAs</Link>
                                        <Link to='/Shop' className='d-block'>MP3 Players</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>All in One</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Music</Link>
                                        <Link to='/Shop' className='d-block'>Photography</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Gadgets</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Watches</Link>
                                        <Link to='/Shop' className='d-block'>Eyewear</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Gaming</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to='/Shop' className='d-block'>Mouse</Link>
                                        <Link to='/Shop' className='d-block'>Keyboard</Link>
                                        <Link to='/Shop' className='d-block'>Headphone</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Laptops & Computer</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Mac Computers</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Printers & Ink</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>TV & Audio</Link>
                                <span className='line d-block'></span>
                                <Link to='/Shop' className='d-block acc_link'>Ultrabooks</Link>
                            </Accordion>
                        </div>
                        <h3>Top Stories</h3>
                        <div className='progress'>
                            <span className='line'></span>
                        </div>
                        <div className='small_topics'>
                            <div id='topic_1' className='small_topic d-flex'>
                                <div className='topic_img'>
                                    <img src='image/Topics/3.webp' alt='' className='img-fluid'/>
                                </div>
                                <div className='topic_info'>
                                    <Link to='/'>SpaceX Falcon</Link>
                                    <span className='d-block'>15 Sep, 2020</span>
                                </div>
                            </div>
                            <div id='topic_2' className='small_topic d-flex'>
                                <div className='topic_img'>
                                    <img src='image/Topics/2.webp' alt='' className='img-fluid'/>
                                </div>
                                <div className='topic_info'>
                                    <Link to='/'>Coffe Time in Office</Link>
                                    <span className='d-block'>15 Sep, 2020</span>
                                </div>
                            </div>
                            <div id='topic_3' className='small_topic d-flex'>
                                <div className='topic_img'>
                                    <img src='image/Topics/1.webp' alt='' className='img-fluid'/>
                                </div>
                                <div className='topic_info'>
                                    <Link to='/'>Robot Wars</Link>
                                    <span className='d-block'>15 Sep, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </section>
        </>
    )
}
export default Topics
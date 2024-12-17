import './App.scss' ;
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
//Import All Components
import Header from './component/Navbar/User';
import Footer from './component/Footer/footer';
import Home from './component/Home/Home';
import About from './component/About/About';
import FAQS from './component/FAQS/FAQS';
import Terms from './component/Terms-Conditions/Terms';
import Shipping from './component/Shipping/Shipping';
import Contact from './component/Contact/Contact';
import Shop from './component/Shop/Shop';
import Products from './component/Products/Products';
import Topics from './component/Topics/Topics';
import SelectedTopic from './component/SelectedTopic/SelectedTopic';
import Register from './component/Authentication/Register/Register';
import Login from './component/Authentication/Login/Login';
import Compare from './component/Compare/Compare';
import JustProduct from './component/JustProduct/JustProduct';
import Cart from './component/Cart/Cart';
import Payment from './component/Payment/Payment';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <BrowserRouter>
        < div className='App'>
            <ScrollToTop />
            <ToastContainer />
            
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/FAQS' element={<FAQS/>}/>
                <Route path='/Terms' element={<Terms/>}/>
                <Route path='/Shipping' element={<Shipping/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/Topics' element={<Topics/>}/>
                <Route path='/SelectedTopic' element={<SelectedTopic/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Compare' element={<Compare/>}/>
                <Route path='/JustProduct' element={<JustProduct/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Payment' element={<Payment/>}/>
            </Routes>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App ;
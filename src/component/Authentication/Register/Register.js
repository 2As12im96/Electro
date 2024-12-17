import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import OffcanvasExample from '../../Navbar/Navbar';
function Register(){
    //Register logic 
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [userName , setUserName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isButtonDisabled , setButtonDisabled] = useState(false);
    const [erorrMsg , setErorrMsg] = useState('');
    const [successMsg , setSuccessMsg] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        try{
            localStorage.setItem('First Name' , JSON.stringify(firstName));
            localStorage.setItem('Last Name' , JSON.stringify(lastName));
            localStorage.setItem('User Name' , JSON.stringify(userName));
            localStorage.setItem('Email' , JSON.stringify(email));
            localStorage.setItem('Password' , JSON.stringify(password));
            setSuccessMsg('Sign Up is Successful. You will now be redirected to Login.');
            setFirstName('');
            setLastName('');
            setUserName('');
            setEmail('');
            setPassword('');
            setErorrMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/Login', { replace: true });
            }, 2000);
        }catch(error){
            console.error('An error occurred during sign up. Please try again.');
            setErorrMsg('An error occurred during sign up. Please try again.');
        }
        finally{
            setTimeout(()=>{
                setButtonDisabled(false);
            }, 3000)
        }
    };
    return(
        <><OffcanvasExample/>
        <section className='Auth_register'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Create Account</span>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='child'>
                            <h3>Create New Account</h3>
                            <div className='progress'>
                                <span className='line'></span>
                            </div>
                            <p>Create your own Account</p>
                            {successMsg&&<>
                                <div className='success-msg'>{successMsg}</div>
                                <br></br>
                            </>}
                            <form autoComplete='off' onSubmit={handleSubmit}>
                                <label htmlFor='first'>First Name*</label>
                                <input type='text' name='first name' id='first' className='form-control' required
                                onChange={(e)=> setFirstName(e.target.value)} 
                                />

                                <label htmlFor='last'>Last Name*</label>
                                <input type='text' name='last name' id='last' className='form-control' required
                                onChange={(e)=> setLastName(e.target.value)}
                                />

                                <label htmlFor='user'>User Name*</label>
                                <input type='text' name='username' id='user' className='form-control' required
                                onChange={(e)=> setUserName(e.target.value)}
                                />

                                <label htmlFor='email'>Email*</label>
                                <input type='email' name='email' id='email' className='form-control' required
                                onChange={(e)=> setEmail(e.target.value)} 
                                />

                                <label htmlFor='password'>Password*</label>
                                <input type='password' name='password' id='password' className='form-control' required
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                               
                                <span className={isButtonDisabled ? 'btn-submit active' : 'btn-submit' }>
                                <input type='submit' value='Register' className={isButtonDisabled ? 'btn active' : 'btn'} disabled={isButtonDisabled}/>
                                </span>
                            </form>
                            {erorrMsg&&<>
                                <br></br>
                                <div className='error-msg'>{erorrMsg}</div>
                            </>}
                            <div className='sign'>
                                <h4>Sign up today and you'll be able to :</h4>
                                <span className='d-block'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Speed your way through the checkout</span>
                                </span>
                                <span className='d-block'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Track your orders easily</span>
                                </span>
                                <span className='d-block'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Keep a record of all your purchases</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='child border'>
                            <h3>Login</h3>
                            <div className='progress'>
                                <span className='line'></span>
                            </div>
                            <p>Welcome back! Have an account</p>
                            <Link to='/Login' className='btn_login'>
                                 Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}
export default Register
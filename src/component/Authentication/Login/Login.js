import React , {useState , useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import OffcanvasExample from '../../Navbar/Navbar';

function Login(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [btnDisabled , setBtnDisabled] = useState(false);
    const [erorrMsg , setErorrMsg] = useState('');
    const [successMsg , setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnDisabled(true);
        try{
            const emailData = JSON.parse(localStorage.getItem('Email'));
            const passwordData =  JSON.parse(localStorage.getItem('Password'));
            if(emailData === email && passwordData === password){
                setSuccessMsg('Login is Successful. You will now be redirected to the Home page.');
                setEmail('');
                setPassword('');
                setErorrMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/', { replace: true });
                }, 2000);
            }
            else{
                setErorrMsg('The password is invalid or the user does not have a password');
            }
        }
        catch(error){
            setErorrMsg('The password is invalid or the user does not have a password' || error);
        }
        finally{
            setTimeout(()=>{
                setBtnDisabled(false);
            }, 3000)
        } 
    };
    return(
        <>
        <OffcanvasExample/>
        <section className='login'>
            <Container>
                <div className="links d-flex">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <i className="bi bi-chevron-up"></i>
                    <span>Account</span>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='child'>
                            <h3>Login</h3>
                            <div className='progress'>
                                <span className='line'></span>
                            </div>
                            <p>Welcome back! Sign in to your account</p>
                            {successMsg&&<>
                                <div className='success-msg'>{successMsg}</div>
                                <br></br>
                            </>}
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='Email'>Email Address*</label>
                                <input type='email' name='email' id='Email' className='form-control' required
                                onChange={(e)=> setEmail(e.target.value)}
                                />

                                <label htmlFor='Password'>Password*</label>
                                <input type='password' name='password' id='Password' className='form-control' required
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                                <div className='link d-flex'>
                                    <Link to='/'>Return to Store</Link>
                                    <Link to='/Login'>Forgotten Password?</Link>
                                </div>
                                <span className={btnDisabled ? 'btn-submit active' : 'btn-submit'}>
                                    <input type='submit' value='login' className={btnDisabled ? 'btn active' : 'btn'} disabled={btnDisabled}/>
                                </span>
                            </form>
                            {erorrMsg&&<>
                                <br></br>
                                <div className='error-msg'>{erorrMsg}</div>
                            </>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='child border'>
                            <h3>Create your own Account</h3>
                            <div className='progress'>
                                <span className='line'></span>
                            </div>
                            <p>Create your own Account</p>
                            <div className='sign'>
                                <p>Sign up today and you'll be able to :</p>
                                <span className='d-flex x'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Speed your way through the checkout</span>
                                </span>
                                <span className='d-flex x'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Track your orders easily</span>
                                </span>
                                <span className='d-flex x'>
                                    <i className="bi bi-check-lg"></i>
                                    <span>Keep a record of all your purchases</span>
                                </span>
                            </div>
                            <Link to='/Register' className='register'>Register</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}
export default Login
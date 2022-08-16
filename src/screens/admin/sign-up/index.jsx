import React, {useEffect, useState} from 'react'
import { useHistory, Redirect } from 'react-router-dom';
// import { validateUser } from '../../api/auth';
// import './style.css'
import loginImg from '../../../assets/login-background-3.jpg';
import logo from '../../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../../../context/userContext';




function SignUp() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { registerUser } = useUserContext();

    useEffect(() => {
        // const isLogged = window.sessionStorage.getItem('sarangcv');
        // isLogged ? history.push('/home') : (<Redirect to={'/'}/>)
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const register = registerUser(email, name, password);
        console.log(register)

        // history.push('/customer-entry')
        
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row login-section">
                    <div className="col-lg-5 col-md-5 col-sm-12  login-form-sec">
                        {/* <h2>Welcome to SalesBuddy</h2> */}
                        <div className="login-logo">
                            <img src={logo} alt="Purti" />
                        </div>
                        {/* <h3>Sign in.</h3> */}
                        <form className="login-form">
                            <div className="container login-input-sec">
                                <input type="text" className="form-control login-input" placeholder="Name" onChange={(t) => setName(t.target.value)}/>
                                <input type="text" className="form-control login-input" placeholder="Email" onChange={(t) => setEmail(t.target.value)}/>
                                <input type="password" className="form-control login-input" placeholder="Password" onChange={(t) => setPassword(t.target.value)}/> 
                                <button className="btn btn-primary login-btn" type="submit" onClick={onSubmit} disabled={isLoading}>
                                    Sign Up
                                    {isLoading && <FontAwesomeIcon icon={faCircleNotch} spin style={{ marginLeft: 10 }}/>}
                                    
                                </button>                       
                            </div>                             
                            
                            <p className="login-error-text">{error}</p>
                        </form>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 login-image-sec p-0">
                        {/* <div className="login-image-text-sec">
                            <h2>Welcome to SalesBuddy</h2>
                        </div> */}
                        <img className="login-image" src={loginImg} alt="login-back" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;
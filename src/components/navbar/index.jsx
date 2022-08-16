import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

import navLogo from '../../assets/logo/logo.png'

import './style.css';
import { fullscreen_white, send_white } from '../../assets/icons';

const Navbar = ({title, isAdminBtn}) => {

    const history = useHistory();
    // const isAdminBtn = true;


    const { signInUser, user, logoutUser} = useUserContext();

    const [isFullScreen, setIsFullScreen] = useState(false)


    const handleSignout = async () => {
        await logoutUser()
        history.push('/')
        // logoutUser()
    }
   
        var elem = document.documentElement;
        function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            setIsFullScreen(!isFullScreen)
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        }

        function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(!isFullScreen)
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        }
    console.log('CHECKING FULL SCREEN', document.exitFullscreen);
    return (
        <nav className="navbar-items">
            {/* <h2>{title}</h2> */}
            <img src={navLogo} alt="logo" />
            <div className="navbar-btn-container">
                <button className="btn btn-primary login-btn nav-fullscreen-btn" type="submit" onClick={isFullScreen ? closeFullscreen : openFullscreen}>
                    {/* {isFullScreen ? 'Exit Full Screen' : 'Full Screen'} */}
                    <img src={fullscreen_white} alt="send" />
                </button>
                <button style={{visibility: `${isAdminBtn == true ? 'visible' : 'hidden'}`, position: `${isAdminBtn == true ? 'inherit' : 'absolute'}`}} 
                    className="btn btn-primary login-btn nav-admin-btn" 
                    type="submit" 
                    onClick={()=> history.push('/admin')}>
                    Admin
                </button>
                <button className="btn btn-primary login-btn nav-signout-btn" type="submit" onClick={handleSignout}>
                    Sign Out
                </button>
            </div>
            
            
        </nav>
    )
}

export default Navbar

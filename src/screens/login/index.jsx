import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
// import { validateUser } from '../../api/auth';
import "./style.css";
import loginImg from "../../assets/login-background-3.jpg";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/userContext";

function Login() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  const [email, setEmail] = useState("user1@gmail.com");
  const [password, setPassword] = useState("password");

  const { signInUser, user, loading, error } = useUserContext();

  console.log(error);

  useEffect(() => {
    console.log(
      "user from login screen",
      "email is:",
      email,
      "password is:",
      password
    );
    const isLogged = user;
    isLogged ? history.push("/mobile-entry") : <Redirect to={"/"} />;
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // history.push('/mobile-entry')
    await signInUser(email, password).then((res) => {
      console.log("after login from login screen", res);
      if (res) {
        setIsLoading(false);
        history.push("/mobile-entry");
      }
    });
  };

  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className="login-container">
          <div className="container">
            <div className="row login-section">
              <div className="col-lg-6 col-md-5 col-sm-12  login-form-sec">
                {/* <h2>Welcome to SalesBuddy</h2> */}
                {/* <div className="login-logo">
                                    <img src={logo} alt="Purti" />
                                </div> */}

                <form className="login-form">
                  <div className="container login-input-sec">
                    <h2>
                      <span>Sales</span> Pro
                    </h2>
                    <label>Email address</label>
                    <input
                      type="text"
                      className="form-control login-input"
                      autoComplete="off"
                      placeholder="Enter your email"
                      onChange={(t) => setEmail(t.target.value)}
                      value={email}
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control login-input"
                      autoComplete="off"
                      placeholder="Enter your Password"
                      onChange={(t) => setPassword(t.target.value)}
                      value={password}
                    />
                    <button
                      className="btn btn-primary login-btn"
                      type="submit"
                      onClick={onSubmit}
                      disabled={isLoading}
                    >
                      Sign In
                      {isLoading && (
                        <FontAwesomeIcon
                          icon={faCircleNotch}
                          spin
                          style={{ marginLeft: 10 }}
                        />
                      )}
                    </button>
                  </div>

                  <p className="login-error-text">{error}</p>
                </form>
                {/* <span className="copyright-text">© 2021 All right reserved</span> */}
              </div>
              <div className="col-lg-6 col-md-7 col-sm-12 login-image-sec p-0">
                {/* <div className="login-image-text-sec">
                                    <h2>Welcome to SalesBuddy</h2>
                                </div> */}
                <img className="login-image" src={loginImg} alt="login-back" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;

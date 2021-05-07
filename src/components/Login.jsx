import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../reduxstore/thunk";
function Login(props) {
 

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  var user = {};
  var [user, setUser] = useState({});
  var [message, setMessage] = useState({});
  if (props.isLoggedin) {
   
      props.history.push("/");
   
  }
  let getEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
    user.email = event.target.value;
  };

  let getPassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };
  let login = (e) => {
    e.preventDefault();
    // console.log("did you just hit the login button", user);
    if (!user.email || !user.password) {
      setMessage({
        error: "Email And Password Required",
      });
    } else if (!validateEmail(user.email)) {
      setMessage({
        error: `A Valid Email Please`,
      });
    } else {
      setMessage({
        error: false,
      });
      //thunk
      props.dispatch(loginUser(user,process.env.REACT_APP_BASE_URL));
      //thunk
      // saga code starts
      // props.dispatch({
      //     type:"LOGIN",
      //     payload:user
      // })
      // saga code ends
    }
  };

  return (
    <center>
      <form style={{ width: "500px" }}>
        <h3>Login</h3>
        {/* <input placeholder="Enter Your Name" className="form-control" type="text" onChange={getName}/> <br/> */}
        <input
          placeholder="Enter Your Email"
          autoComplete="on"
          className="form-control"
          type="text"
          onChange={getEmail}
        />{" "}
        <br />
        <input
          placeholder="Enter Your Password"
          className="form-control"
          type="password"
          onChange={getPassword}
        />
        <button className="btn btn-secondary m-3" onClick={login}>
          {props.logging ? (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
      <Link to="/signup">
        {" "}
        <a href="#">Don't have an account Signup</a>
      </Link>
      <br />
      <Link to="/resetpassword">
        {" "}
        <a href="#">Forgot Password?</a>
      </Link>
      <br /> <br />
      {props.loginError && (
        <span className="alert alert-danger">Invalid Credentials</span>
      )}
      {message.success && (
        <span className="alert alert-success">{message.success}</span>
      )}
      {message.error && (
        <span className="alert alert-danger">{message.error}</span>
      )}
    </center>
  );
}
Login = withRouter(Login);
export default connect(function (state, props) {
  console.log("states in login component", state);
  return {
    loginError: state?.isloginerror,
    logging: state?.isfetching,
    isLoggedin: state?.isLoggedin,
  };
})(Login);

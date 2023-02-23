import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import CurrentUserContext from "../../context/authContext";

function Login() {
  const { login } = useContext(CurrentUserContext);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <div className="form">
            <input type="text" placeholder="Usarname" />
            <input type="password" placeholder="Password" />
            <Link to="/">
              <button onClick={login}>Login</button>
            </Link>
            <span style={{ color: "red", fontWeight: "700" }}> &uarr; click login to go home page</span>
            <span style={{ color: "red", fontWeight: "700" }}> &larr; or you can go register page</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

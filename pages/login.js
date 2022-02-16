import Header from "../components/Header";
//import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");
      


    axios
      .post("http://localhost:3000/api/auth/login", {
         
        email,
        password,
          
      })
      .then((response) => {
        console.log(response.data);
        response.data;
        localStorage.setItem('data', JSON.stringify(response.data))

        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="container my-5">
          <form
            onSubmit={handleLogin}
            style={{ width: "90%", maxWidth: "600px", margin: "3rem auto" }}
          >
            {error ? (
              <div className="mb-3">
                <h3 className="text-red">{error}</h3>
              </div>
            ) : null}
            {message ? (
              <div className="mb-3">
                <h3 className="text-red">{message}</h3>
              </div>
            ) : null}
            <h4>Login</h4>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control = error['email'] ? 'is-invalid' : '' "
                id="exampleInputEmail1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control = error['password'] ? 'is-invalid' : '' "
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {/* if (error['password']) {
                <span className="invalid-feedback" role="alert">
                    <strong>= error['password'] </strong>
                </span>
                }  */}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};


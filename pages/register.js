import Header from "../components/Header";
//import Footer from "../components/Footer";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {




  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const handleRegister = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");


    axios
      .post("http://localhost:3000/api/auth/signup", {
        lastname,
        firstname,
        email,
        password,
        birthday,
        nationality,
        speciality,
      })
      .then((response) => {
        console.log(response.data);
        response.data;

        window.location = "/login";
      })
      .catch((err) => {
        console.log(err);
      });

    

    // fields check
    // if (!title || !content) return setError("All fields are required");

    // post structure
    // let sign = {
    //   lastname,
    //   firstname,
    //   email,
    //   password,
    //   birthday,
    //   nationality,
    //   speciality,
    // };
    // console.log("sign")
    // // save the post
    // let response = await fetch("http://localhost:3000/api/auth/signup", {
    //   method: "POST",
    //   body: JSON.stringify(sign),
    // });

    // // get the data
    // let data = await response.json();
    // console.log(data)

    // if (data.success) {
    //   // reset the fields
    //   setLastname("");
    //   setFirstname("");
    //   setEmail("");
    //   setPassword("");
    //   setBirthday("");
    //   setNationality("");
    //   setSpeciality("");
    //   // set the message
    //   return setMessage(data.message);
    // } else {
    //   // set the error
    //   return setError(data.message);
    // }
  };
  //window.location = "/login";


  




  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container my-5">
        <form
          onSubmit={handleRegister}
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

          <h4>Register</h4>
          <div className="mb-3">
            <label htmlFor="firstnameInput1" className="form-label">
              Firstname
            </label>
            <input
              name="firstname"
              type="text"
              className="form-control = error['firstname'] ? 'is-invalid' : '' "
              id="firstnameInput1"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required
            />
            {/* if (error['name']) {
      <span className="invalid-feedback" role="alert">
        <strong>= error['name'] </strong>
      </span>
       }  */}
          </div>

          <div className="mb-3">
            <label htmlFor="lastnameInput2" className="form-label">
              Lastname
            </label>
            <input
              name="lastname"
              type="text"
              className="form-control = error['lastname'] ? 'is-invalid' : '' "
              id="lastnameInput1"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              required
            />
            {/* if (error['name']) {
      <span className="invalid-feedback" role="alert">
        <strong>= error['name'] </strong>
      </span>
       }  */}
          </div>

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

            {/* <span className="invalid-feedback" role="alert">
        <strong>= error['email'] </strong>
      </span> */}
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
          <div className="mb-3">
            <label htmlFor="exampleInputbirthday" className="form-label">
              Birthday
            </label>
            <input
              name="birthday"
              type="date"
              className="form-control = error['birthday'] ? 'is-invalid' : '' "
              id="exampleInputbirthday"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
              required
            />
            {/* if (error['passwordConfirm']) {
      <span className="invalid-feedback" role="alert">
        <strong>= error['passwordConfirm'] </strong>
      </span>
       }  */}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputNationality" className="form-label">
              Nationality
            </label>
            <input
              name="nationality"
              type="country"
              className="form-control = error['nationality'] ? 'is-invalid' : '' "
              id="exampleInputNationality"
              onChange={(e) => setNationality(e.target.value)}
              value={nationality}
              required
            />
            {/* if (error['passwordConfirm']) {
      <span className="invalid-feedback" role="alert">
        <strong>= error['passwordConfirm'] </strong>
      </span>
       }  */}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputSpeciality" className="form-label">
              Speciality
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
            >
              <option selected>Speciality</option>
              <option value="frontend">Front-End</option>
              <option value="backend">Back-End</option>
              <option value="fullstack">Full-Stack</option>
            </select>
            {/* if (error['passwordConfirm']) {
      <span className="invalid-feedback" role="alert">
        <strong>= error['passwordConfirm'] </strong>
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
}

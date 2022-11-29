import React, { useState } from "react";
import { FaUserAlt, FaSignInAlt, FaLock } from "react-icons/fa";
import "./index.scss";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";

const Signup = () => {
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const getUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let validationRes = validationForm();
    // Check if Input is valid
    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details);

      setIsLoading(false);
    } else {
      setIsLoading(false);

      // Send data to api
      // const { data } = await Axios.post(
      //   `https://route-egypt-api.herokuapp.com/signup`,
      //   user
      // );

      const { data } = await Axios.post(
        `http://mapi.somee.com/api/members/signup?first_name=${user.first_name}&last_name=${user.last_name}&email=${user.email}&password=${user.password}`
      );

      if (data[0] === "success.") {
        // if (data.message === "success") {
        // TODOS: navigate user to login
        navigate("/login");
        setIsLoading(false);
        localStorage.setItem("userToken", JSON.stringify(user.first_name));
      } else {
        setIsLoading(false);
        setError(data[0].message);
        // setError(data.message);
      }
    }
  };

  const validationForm = () => {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(16).required(),
      last_name: Joi.string().min(3).max(16).required(),
      password: Joi.string()
        .pattern(new RegExp("^[A-Z][a-z]{3,10}$"))
        .required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "org"] } })
        .required(),
    });

    return scheme.validate(user, { abortEarly: false });
  };

  return (
    <>
      <div className="content  d-flex justify-content-center align-items-center">
        <form className="signin-form" id="signin-form" onSubmit={submitForm}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="text-center mb-3">
                <Link className="navbar-brand mb-3" to="/">
                  <h1 className="h2 text-primary">
                    Aln<span className="text-secondary">msg</span>
                  </h1>
                </Link>
                <h5 className="mb-0">Welcome</h5>
                <h1 className="d-block text-muted h6">Create an account</h1>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={getUser}
                  name="first_name"
                  placeholder="First Name"
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={getUser}
                  name="last_name"
                  placeholder="Last Name"
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={getUser}
                  placeholder="Example@email.com"
                  name="email"
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  onChange={getUser}
                  name="password"
                  placeholder="Password"
                />
                <div className="icon text-muted">
                  <FaLock />
                </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary bg-secondary  main-btn btn-block disabledUntilReady"
                >
                  {isLoading ? (
                    <Spinner animation="border" role="status" />
                  ) : (
                    "SignUp"
                  )}
                </button>
              </div>

              <div className="form-group text-center text-muted content-divider">
                <span className="px-2">Don't have an account?</span>
              </div>

              <div className="form-group">
                <Link to="/login" className="btn btn-light btn-block w-100">
                  Sign in
                </Link>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {errorList.map((err, idx) =>
                idx === 2 ? (
                  <div key={idx} className="alert p-2 alert-danger">
                    Password invalid
                  </div>
                ) : (
                  <div className="alert p-2 alert-danger">{err.message}</div>
                )
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

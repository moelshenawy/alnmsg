import React from "react";
import "./index.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let [user, setUser] = useState({ email: "", password: "" });
  let route = useNavigate();

  const getUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const validationForm = () => {
    let scheme = Joi.object({
      email: Joi.string().email({ tlds: { allow: ["com", "net", "org"] } }),
      password: Joi.string().pattern(new RegExp("^[A-Z][a-z]{2,8}$")),
    });

    return scheme.validate(user, { abortEarly: false });
  };

  const submitForm = async (e) => {
    e.preventDefault(); // prevent Reload
    setLoading(true);

    let validationResponse = validationForm();

    if (validationResponse.error) {
      // Validation Has Error
      setErrorList(validationResponse.error.details);
      setLoading(false);
    } else {
      // let { data } = await Axios.post(
      //   `https://route-egypt-api.herokuapp.com/signin`,
      //   user
      // );
      let { data } = await Axios.post(
        `http://mapi.somee.com/api/members/signip?email=${user.email}&password=${user.password}`,
        user
      );

      // if (data.message === "success") {
      if (data[0] === "user success login.") {
        route("/dashboard");
        setLoading(false);
        // Go To Login Page
      } else {
        setLoading(false);
        setError(data[0].message);
      }
    }
  };

  return (
    <>
      <div className="content  d-flex justify-content-center align-items-center">
        <form className="signin-form" id="signin-form" onSubmit={submitForm}>
          <div className="card mb-0">
            <div className="card-body">
              <div className="text-center mb-3">
                <Link className="navbar-brand mb-3" to="/">
                  <h1 className="h2 text-primary">
                    Aln<span className="text-secondary">msg</span>{" "}
                  </h1>
                </Link>
                <h5 className="mb-0">Welcome</h5>
                <h1 className="d-block text-muted h6">
                  Sign in to your account
                </h1>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={getUser}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  onChange={getUser}
                  name="password"
                />
                <div className="icon text-muted">
                  <FaLock />
                </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary main-btn bg-secondary   btn-block disabledUntilReady"
                  name="signin"
                >
                  {loading ? (
                    <Spinner animation="border" role="status" />
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {errorList.map((err, idx) =>
                idx === 1 ? (
                  <div className="alert p-2 alert-danger" key={idx}>
                    Password invalid
                  </div>
                ) : (
                  <div className="alert p-2 alert-danger" key={idx}>
                    {err.message}
                  </div>
                )
              )}

              <div className="form-group text-center text-muted content-divider">
                <span className="px-2">Don't have an account?</span>
              </div>

              <div className="form-group">
                <Link to="/signup" className="btn btn-light btn-block w-100">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

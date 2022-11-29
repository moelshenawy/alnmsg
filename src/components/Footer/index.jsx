import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="subscribe pt-5 pb-5 bg-warning text-center text-md-start">
        <div className="container">
          <form className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="fw-bold fs-5 mb-3">
                Subscribe to our Newsletter:
              </div>
            </div>
            <div className="col-md-6 col-lg-7 mb-3">
              <input
                className="w-100 text-light p-2 bg-transparent"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <input
                className="btn rounded-pill bg-primary text-warning"
                type="submit"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="footer pt-5 pb-5 bg-primary text-white-50 text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info mb-5">
                <Link className="navbar-brand" to="/">
                  <h1 className="h4 text-light">
                    Algn<span className="text-secondary">msg</span>
                  </h1>
                </Link>
                <p className="mb-5">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                <div className="copyright">
                  Created By <span className="text-secondary">Coodlap</span>
                  <div>
                    &copy; 2022 -
                    <span className="text-warning">{` `} Coodlap Inc</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Portfolio</li>
                  <li>Testimonials</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">About Us</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">
                  Get in touch with us via mail phone.We are waiting for your
                  call or message
                </p>
                <a
                  className="btn rounded-pill bg-danger text-warning main-btn w-100"
                  href="mailto:info@coodlap.com"
                >
                  info@coodlap.com
                </a>
                <ul className="d-flex mt-5 list-unstyled gap-3">
                  <li>
                    <Link className="d-block text-light" href="#">
                      <BsFacebook className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2" />
                    </Link>
                  </li>
                  <li>
                    <Link className="d-block text-light" href="#">
                      <BsTwitter className="fa-brands fa-twitter fa-lg twitter rounded-circle p-2" />
                    </Link>
                  </li>
                  <li>
                    <Link className="d-block text-light" href="#">
                      <BsLinkedin className="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2" />
                    </Link>
                  </li>
                  <li>
                    <Link className="d-block text-light" href="#">
                      <BsYoutube className="fa-brands fa-youtube fa-lg youtube rounded-circle p-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

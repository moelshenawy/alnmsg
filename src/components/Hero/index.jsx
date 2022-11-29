import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Hero = () => {
  return (
    <>
      <section
        className="hero d-flex justify-content-center align-items-center"
        id="home"
      >
        <div className="text-center text-light">
          <h1>WhatsApp API</h1>
          <p className="fs-6 text-white-50 mb-5">
            We provide whatsapp api service
          </p>
          <Link
            className="btn rounded-pill main-btn bg-danger text-warning"
            to="/login"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;

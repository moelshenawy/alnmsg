import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section
      id="service"
      className="project text-center bg-primary mt-5 mb-5 pt-5 pb-5 text-light"
    >
      <h2>Start Your Project Now</h2>
      <p className="text-white-50">
        Leave your description and we start the engine.Don't worry,you can
        cancel anytime
      </p>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Link
          className="btn rounded-pill main-btn text-warning bg-danger text-uppercase"
          href="#"
        >
          Start Project
        </Link>
      </div>
    </section>
  );
};

export default Project;

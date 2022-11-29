import React from "react";
import "./index.scss";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
const Features = () => {
  return (
    <section id="about" className="features text-center pt-5 pb-5">
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src="imgs/title.png" alt="" />
          <h2>How it works</h2>
          <p className="text-black-50 text-uppercase">
            Quick Onboarding in less than 5 minutes
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <IoIosPricetag className="text-secondary fa-1 position-absolute bottom-0 number" />
              </div>
              <h4 className="mb-3 mt-3  text-warning">
                Fixed price no hidden fees{" "}
              </h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <BiMessageSquareDetail className="text-secondary fa-1 position-absolute bottom-0 number" />
              </div>
              <h4 className="mb-3 mt-3 text-warning">Unlimited messages</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <AiOutlineSend className="text-secondary fa-1 position-absolute bottom-0 number" />
              </div>
              <h4 className="mb-3 mt-3  text-warning">No cost per message</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

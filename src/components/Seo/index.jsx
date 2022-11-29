import React from "react";
import { images } from "../../constants";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Seo = () => {
  return (
    <>
      <section className="seo pt-5 pb-5">
        <div className="container">
          <div className="main-title text-center mt-5 mb-5 position-relative">
            <img className="mb-4" src="imgs/title.png" alt="" />
            <h2>Some Stuff About Us</h2>
            <p className="text-black-50 text-uppercase">The Great Team</p>
          </div>
          <p className="description text-center mb-5 text-black-50 m-auto">
            alnamsg is a multifunctional API for WhatsApp And Best Tool for
            businesses and programmers, which can be integrated into any
            accounting system, CRM, ERP, or website to send messages, notify
            users, and much more.
          </p>

          <div className="row justify-content-center">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2">
                <img
                  src={images.seo}
                  alt="Alnmsg is Developer-friendly API for integration"
                />
              </div>
              <div className="col-lg-7 col-md-6 mt-4 pt-2">
                <div className="ms-lg-5">
                  <h4 className="title mb-4">
                    Communicate with Your Audience Through WhatsApp API
                  </h4>
                  <p className="text-muted">
                    Reach over 2.1 billion users worldwide using WhatsApp API.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle className="text-secondary" />
                      </span>
                      Boost Notification Open Rate by 20X
                    </li>
                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle className="text-secondary" />
                      </span>
                      80% Decrease in Order Processing Time
                    </li>

                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle className="text-secondary" />
                      </span>
                      Less Customer Wait Time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Seo;

import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import faqsData from "../../data/faq/faq.json";
import "./index.scss";
const Faq = () => {
  const { faqs } = faqsData;

  return (
    <section id="faq" className="faq-section pt-5 pb-5">
      <div className="container">
        <center className="main-title mt-5 mb-5 position-relative">
          <h4 className="faq-title mb-5 mt-5">FAQ</h4>
        </center>
        <div className="row">
          {faqs.map((faq, index) => (
            <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
              <div className="d-flex">
                <FiHelpCircle className="faq-icon mt-1 me-2" />
                <h5 className="faq-question">{faq.question}</h5>
              </div>
              <p className="faq-answer mb-0">{faq.answer1}</p>
              <p className="faq-answer mb-0">{faq.answer2}</p>
              <p className="faq-answer mb-0">{faq.answer3}</p>
              <p className="faq-answer mb-0">{faq.answer4}</p>
              <p className="faq-answer mb-0">{faq.answer5}</p>
            </div>
          ))}
        </div>
        <div className="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-4 justify-content-center">
          <div className="col-12 text-center">
            <div className="faq-contact">
              <h4 className="title mb-4">Have Question? Get in touch!</h4>
              <p className="text-muted mx-auto"></p>
              <p className="text-muted mb-0">
                We always listen to our clients.
              </p>
              <p className="text-muted mb-0">
                That’s why algnmsg is friendly and easy to use.
              </p>
              <p className="text-muted mb-0">
                If you have any wishes for the functionality, talk to us, so you
                can help develop the service.
              </p>
              <a
                href="mailto:info@coodlap.com"
                className="main-btn btn bg-danger text-warning mt-4 "
              >
                <BsTelephone className="me-2" />
                Contact US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

import React from "react";
import "./index.scss";
import { TfiAngleRight } from "react-icons/tfi";
import cardsData from "../../data/tutorials/tutorials.json";
import { Link } from "react-router-dom";

const Tutorials = () => {
  const { cards } = cardsData;

  return (
    <section
      id="tutorials pt-5 pb-5"
      className="tutorials-section bg-light pt-5"
    >
      <center className="main-title mt-5 mb-5 position-relative">
        <h4 className="tutorials-title mb-5">Tutorials</h4>
        <p className="text-black-50 text-uppercase">Our tutorials </p>
      </center>

      <div className="row mx-2 mt-5">
        {cards.map((card, idx) => (
          <div className="col-md-4 col-12" key={idx}>
            <div className="card shadow rounded border-0 overflow-hidden mb-4 ">
              <div className="card-body">
                <h5>{card.cardName}</h5>
              </div>
              <div className="list-group list-group-flush">
                {card.details.map((detail, idx) => (
                  <a
                    href={detail.link}
                    className="list-group-item list-group-item-action"
                    target="_blank"
                    key={idx}
                    rel="noreferrer"
                  >
                    <TfiAngleRight className="me-1" />
                    {detail.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;

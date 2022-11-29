import React, { useState } from "react";
import "./index.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const navList = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "FAQ", link: "#faq" },
    { name: "SERVICE", link: "#service" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1 className="h4 text-light">
              Aln<span className="text-secondary">msg</span>
            </h1>
          </Link>

          <button
            className="navbar-toggler text-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu />
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {navList.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    href={`${item.link}`}
                    onClick={() => setActive(item)}
                    className={`nav-link p-2 p-lg-3 ${
                      active === item && "active"
                    }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="register d-flex">
              <Link
                className="btn rounded-pill main-btn text-warning bg-danger"
                to="/login"
              >
                Login
              </Link>
              <div className="bord bg-secondary" />
              <Link
                className="btn rounded-pill main-btn text-warning  bg-danger"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

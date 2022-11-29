import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHome2Line, RiStackLine, RiCodeSSlashLine } from "react-icons/ri";
import { TbFileCheck } from "react-icons/tb";
import {
  AiFillIdcard,
  AiFillYoutube,
  AiFillQuestionCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import "./index.scss";
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const route = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userToken"));
    setUserData(items);
  }, []);

  const logOut = () => {
    route("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light ">
        <div className="container  d-flex flex-row-reverse">
          <div className="user" onClick={() => setShowMenu((prev) => !prev)}>
            <div className="user-info position-relative text-light d-flex align-items-center justify-content-center">
              <div className="navbar-brand">
                <img
                  src={require("../../assets/images/user.png")}
                  className="rounded-circle mr-1"
                  alt="user"
                />
              </div>
              <h1 className="h5 ">{userData}</h1>
              <MdOutlineKeyboardArrowDown
                className={`${showMenu && "arrowUp"}`}
              />
            </div>
          </div>

          <div
            className="toggle-bar"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          <Link className=" navbar-brand" to="/">
            <h1 className="h4 text-light">
              Algn<span className="text-secondary">msg</span>{" "}
            </h1>
          </Link>
        </div>

        {showMenu && (
          <div className="user-menu ">
            <ul>
              <li>
                <Link to="#">
                  <FiSettings />
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <RiShutDownLine />
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="d-flex ">
        <div className={`slider ${show && "custom-w"}`}>
          <div className="slider-list">
            <ul>
              <li>
                <Link href="#">
                  <RiHome2Line />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="active">
                <Link href="#">
                  <RiStackLine />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    Instances
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiCodeSSlashLine />

                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    API Docs
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="slider-list">
            <h2 className="h6 text-muted">{show ? "TOOLS" : "..."}</h2>
            <ul>
              <li>
                <Link href="#">
                  <TbFileCheck />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    File to Base64
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <AiFillIdcard />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    VCard generator
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="slider-list">
            <h2 className="h6 text-muted">{show ? "TUTORIALS" : "..."}</h2>

            <ul>
              <li>
                <Link href="#">
                  <FaGraduationCap />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    Articles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <AiFillYoutube />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    Youtube
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="slider-list">
            <h2 className="h6 text-muted">{show ? "FAQ" : "..."}</h2>

            <ul>
              <li>
                <Link href="#">
                  <AiFillQuestionCircle />
                  <span className={`${show ? "d-inline" : "d-none"}`}>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <BsFillEnvelopeFill />
                  <span className={`${show ? "d-inline" : "d-none"}`}>
                    Contact us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="slider-content ps-4 pe-4 bg-dark w-100">
          <div className="row my-5">
            <div className="content-header d-flex align-items-center justify-content-between">
              <div className="title">
                <h3 className="h6 ">
                  <BiArrowBack />
                  Home - Instances
                </h3>
              </div>

              <div className="content-btn">
                <button>
                  <span>
                    <BsPlusCircle />
                  </span>
                  Add Instances
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4 className="h6 table-header">Instances</h4>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table text-nowrap table-hover offer_table">
                  <thead>
                    <tr>
                      <th className="px-1">
                        <Link to="#">
                          <RiArrowDownSFill />
                          Instances
                        </Link>
                      </th>
                      <th className="px-1">
                        <Link to="#">
                          <RiArrowDownSFill />
                          Create Date
                        </Link>
                      </th>
                      <th className="px-1">
                        <Link to="#">
                          <RiArrowDownSFill />
                          Expire Date
                        </Link>
                      </th>
                      <th className="px-1 text-center">
                        <Link to="#">
                          <RiArrowDownSFill />
                          Status
                        </Link>
                      </th>
                      <th className="px-1"></th>
                      <th className="px-1">
                        <Link to="#" className="d-flex flex-column">
                          <RiArrowDownSFill className="text-primary" />
                          <RiArrowDownSFill className="text-primary" />
                        </Link>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="table-success">
                      <td className="px-1">
                        <Link to="#">
                          <div className="d-flex">
                            <div className="me-2">
                              <img
                                src={require("../../assets/images/user.png")}
                                alt=""
                              />
                            </div>
                            <div className="code text-secondary">#23682</div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-1 text-wrap">
                        <Link to="#">
                          <span>220-11-20</span>
                        </Link>
                      </td>
                      <td className="px-1 text-wrap">
                        <Link to="#">
                          <span>220-11-20</span>
                        </Link>
                      </td>
                      <td className="px-1 text-center">
                        <Link to="#">
                          <span className="btn btn-success text-light btn-sm">
                            Active
                          </span>
                        </Link>
                      </td>
                      <td className="px-1  text-center">
                        <Link
                          to="#"
                          className="btn btn-secondary text-primary btn-sm me-2"
                        >
                          <FaRocket className="me-1" />
                          Mange
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-success text-light btn-sm"
                        >
                          <GoCreditCard className="me-1" />
                          Pay
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

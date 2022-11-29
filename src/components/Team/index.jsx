import React from "react";
import { CiMonitor } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { TbLetterB } from "react-icons/tb";
import { FiFeather, FiCode, FiGitMerge, FiSettings } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";
import "./index.scss";

const Team = () => {
  return (
    <section className="seo pt-5 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="seo-title mb-4 pb-2">
              <h4 className="title mb-4">
                Experience the Potential of WhatsApp business API Use Cases
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <CiMonitor />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Chatbots</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <AiOutlineHeart />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Remarketing</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <AiOutlineEye />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Customer Support</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <TbLetterB />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Multimedia Messages</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <FiFeather />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Notifications</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <FiCode />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Reminders</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <BiUserCheck />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Verification & Authentication</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <FiGitMerge />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Customer Communication</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <FiSettings />
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">Automation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

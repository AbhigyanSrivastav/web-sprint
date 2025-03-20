import React from "react";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector from "./vector.svg";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <div className="navbar">
              <div className="text-wrapper">Subscription</div>

              <div className="text-wrapper-2">Review</div>

              <div className="text-wrapper-3">Box Craft</div>

              <div className="text-wrapper-4">Contact us</div>

              <div className="text-wrapper-5">Home</div>
            </div>

            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-6">Epicure Box</div>

                <img className="vector" alt="Vector" src={image} />

                <img className="img" alt="Vector" src={vector} />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-2" />

        <div className="frame-3" />

        <div className="frame-4" />

        <div className="frame-5">
          <div className="text-wrapper-7">Epicure Box</div>

          <div className="group-2">
            <div className="group-3">
              <img className="vector-2" alt="Vector" src={vector2} />

              <div className="text-wrapper-8">support@epicurebox.com</div>
            </div>

            <div className="group-4">
              <img className="vector-3" alt="Vector" src={vector3} />

              <div className="text-wrapper-9">+91 8744168484</div>
            </div>

            <div className="group-5">
              <img className="vector-2" alt="Vector" src={vector4} />

              <div className="text-wrapper-10">Lalpur, Ranchi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

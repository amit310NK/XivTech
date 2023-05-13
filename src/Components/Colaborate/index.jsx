import React from "react";
import "./colaborate.css";
import { BsArrowRight } from "react-icons/bs";
import { cards } from "../utils/cards";

export const Colaborate = () => {
  return (
    <div className="colaborate-component">
      <div className="text-start my-5 heading"> Let's Colaborate</div>

      <div className="desktop">
        {cards.map((item, key) => {
          return (
            <div key={key} className="cards d-flex row my-3">
              <div className="card-details col-12 col-md-6 ">
                <div className="card-heading col-8 col-mb-8 mb-3 text-start ">
                  {item.tittle}
                </div>
                <div className="card-text text-start mb-4 mt-2 col-12 col-md-8">
                  {item.text}
                </div>
                <div className="card-link text-start mb-2">
                  <a href={item.href}>
                    {item.hrefText} <BsArrowRight />{" "}
                  </a>
                </div>
              </div>
              <div className="card-image col-12 col-md-6 d-flex justify-content-center align-items-start">
                <div className="image">
                  <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mobile">
        {cards.map((item, key) => {
          return (
            <div key={key} className="cards d-flex row my-1">
              <div className="card-details col-12 col-md-6 ">
                <div className="card-heading col-8 col-mb-8 mb-3 text-start ">
                  {item.tittle}
                </div>
              </div>
              <div className="card-image col-12 col-md-6 d-flex justify-content-center align-items-start">
                <div className="image">
                  <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="card-text text-start mb-4 mt-2 col-12 col-md-6">
                {item.text}
              </div>
              <div className="card-link text-start mb-2">
                <a href={item.href}>
                  {item.hrefText} <BsArrowRight />{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="button col-2 my-5 text-start d-flex justify-content-center align-items-center">
        <button className="button">Get in Touch</button>
      </div>
    </div>
  );
};

import React from "react";
import "../../assets/styles/ContentHolder.css";

const ContentHolder = () => {
  return (
    <>
      <div className="cardHeading">
        <h2>
          Get <span className="colorHead">insights </span>that help your
          business grow.
        </h2>
      </div>
      <div className="cardContent">
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.{" "}
        </p>
      </div>
      <div className="cardStats">
        <div className="statItem">
          <div className="statCount">10k+</div>
          <div className="statHead">companies</div>
        </div>
        <div className="statItem">
          <div className="statCount">314</div>
          <div className="statHead">templates</div>
        </div>
        <div className="statItem">
          <div className="statCount">12m+</div>
          <div className="statHead">queries</div>
        </div>
      </div>
    </>
  );
};

export default ContentHolder;

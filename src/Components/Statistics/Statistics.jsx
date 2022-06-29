import React from "react";
import "./StatisticsStyle.css";
import brand from "../../Images/icon-brand-recognition.svg";
import detailed from "../../Images/icon-detailed-records.svg";
import fully from "../../Images/icon-fully-customizable.svg";
function Statistics() {
  return (
    <>
      <div className="about">
        <h2 className="u-mb-small">Advanced Statistics</h2>
        <p className="u-mb-medium">
          Track how your links are performing across the web <br />
          with our advanced statistics dashboard.
        </p>
      </div>

      <div className="features-section">
        <div className="feature">
          <div className="features-box box1">
            <div className="feature-image">
              <img src={brand} alt="brand" />
            </div>
            <h3 className="heading">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </p>
          </div>

          <div className="features-box box2">
            <div className="feature-image">
              <img src={detailed} alt="brand" />
            </div>
            <h3 className="heading">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </p>
          </div>

          <div className="features-box box3">
            <div className="feature-image">
              <img src={fully} alt="brand" />
            </div>
            <h3 className="heading">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;

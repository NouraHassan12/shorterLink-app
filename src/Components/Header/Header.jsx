import React from "react";
import cover from "../../Images/illustration-working.svg";
import "./HeaderStyle.css";
function Header() {
  return (
    <div className="cover">
      <div className="content">
        <h1>More than just Shorter links</h1>
        <p>
          Build your brands recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn">Get started</button>
      </div>
      <div className="image">
        <img src={cover} alt="cover" />
      </div>
    </div>
  );
}

export default Header;

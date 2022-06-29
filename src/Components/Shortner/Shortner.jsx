import React, { useState } from "react";
import "./ShortnerStyle.css";
import Statistics from "../Statistics/Statistics";
function Shortner() {
  const [url, setUrl] = useState("");
  const [shortenLink, setShortenLink] = useState([]);
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url || !url.includes(".com")) {
      alert("You must write a valid link");
    } else {
      const handleShortLink = async () => {
        const result = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const data = await result.json();
        console.log(data.result, ",,,");
        setShortenLink(data.result);
        setUrl("");
      };
      handleShortLink();
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortenLink.full_short_link);
    setButtonText("Copied!");
  };
  return (
    <section className="input-section">
      <div className="container">
        <div className="input-box u-mb-large">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="shorten a link here ..."
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="link-btn" type="submit" onClick={handleSubmit}>
              {" "}
              shorten it!
            </button>
          </form>
        </div>
        {shortenLink.original_link && (
          <div className="urlSec">
            <article>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ color: "rgb(68 208 221)" }}>
                  {shortenLink.full_short_link}
                </div>
              </div>
            </article>

            <button onClick={handleCopy} className="copy_btn">
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <Statistics />
    </section>
  );
}

export default Shortner;

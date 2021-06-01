import React from "react";
import "./Resume.css";
import ppic from "./img/sonu.jpeg";
import git from "./img/GitHub.png";
import lin from "./img/linkedin.png";
import eml from "./img/email.png";

const Resume = () => {
  return (
    <div className="bound">
      <div className="container">
        <div className="header">
          <div className="profilePic">
            <img src={ppic} alt="Profile" />
          </div>
          <div className="profileDetails">
            <div className="details">
              <div className="name">SONU KUMAR</div>
              <div className="role">Member @ Developer Student Club-GGV</div>
              <div className="role">
                Who is passionate about exploting and learning new stuffs.
              </div>
            </div>
            <div className="socialDetails">
              <div className="social">
                <img src={lin} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/sonukumar81800/">
                  sonukumar81800
                </a>
              </div>
              <div className="social">
                <img src={git} alt="GitIcon" />
                <a href="https://github.com/SonuKumar81800">SonuKumar81800</a>
              </div>
              <div className="social">
                <img src={eml} alt="Email" />
                <a href="mailto:sonu.patna0808@gmail.com">Sonu Kumar</a>
              </div>
            </div>
          </div>
        </div>
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Resume;

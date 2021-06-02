import React from "react";
import "./Resume.css";
import ppic from "./img/sonu.jpeg";
import git from "./img/GitHub.png";
import lin from "./img/linkedin.png";
import eml from "./img/email.png";

const Resume = () => {
  React.useEffect(() => {
    document.title = "Resume | Sonu Kumar";
  }, []);
  return (
    <div className="bound">
      <div className="container">
        {/* Header Start */}

        <div className="header">
          <div className="profilePic">
            <img src={ppic} alt="Profile" />
          </div>
          <div className="profileDetails">
            <div className="details">
              <div className="name">SONU KUMAR</div>
              <div className="role">Member @ Developer Student Club-GGV</div>
              <div className="role">
                Who is passionate about exploring and learning new stuffs.
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

        {/* Header End  */}

        {/* Main Body Start  */}
        <div className="main">
          <div className="heading">
            <p>ACADEMIC DETAILS</p>
          </div>

          <table>
            <tr>
              <th>Program</th>
              <th>Institute</th>
              <th>Board/University</th>
              <th>Year</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>B.Tech</td>
              <td>
                Institute of Technology Guru Ghasidas University, Bilaspur
                Chhatishgadh
              </td>
              <td>AICTE</td>
              <td>2023</td>
              <td>8.5 CGPA</td>
            </tr>
            <tr>
              <td>XII</td>
              <td>Jawahar Navodaya Vidyalaya Bikram, Patna</td>
              <td>CBSE</td>
              <td>2018</td>
              <td>75 %</td>
            </tr>
            <tr>
              <td>X</td>
              <td>Jawahar Navodaya Vidyalaya Bikram, Patna</td>
              <td>CBSE</td>
              <td>2016</td>
              <td>9.6 CGPA</td>
            </tr>
          </table>

          <div className="heading">
            <p>ACHIEVEMENTS AND CERTIFICATION</p>
          </div>

          <ul>
            <li>LinkedIn Certified:- </li>
          </ul>
        </div>

        {/* Main Body End  */}

        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Resume;

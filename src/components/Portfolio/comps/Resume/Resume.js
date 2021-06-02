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
          <div class="certified">
            <div className="name">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://www.linkedin.com/in/sonukumar81800/"
              >
                LinkedIn Certified
              </a>
            </div>
            <div className="seperator">:-</div>
            <div className="cert">
              Javascript || Node js || React Js || MnogoDB || JSON || NoSQL ||
              REST APIs || GIT || Front-end Developement || Object-Oriented
              Programming (OOP) || HTML || C || C++ || Microsoft Word ||
              Microsoft Power Point || Microsoft Excel
            </div>
          </div>
          <div class="certified">
            <div className="name">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://www.hackerrank.com/sonu_kumar_08"
              >
                Hackerrank <br /> Certified
              </a>
            </div>
            <div className="seperator">:-</div>
            <div className="cert">
              <div className="subcert">
                Assessments : Java || Problem Solving || Python
              </div>
              <div className="subcert">
                Five Star : Java || Problem Solving || 10 Days of JS || C
              </div>
            </div>
          </div>

          <div className="heading">
            <p>TOOLS & TECHNOLOGY || SOFT SKILLS</p>
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/PROGRAMMING_/_SCRIPTING_LANGUAGES-JavaScript,_Java,_C,_C++-informational?style=flat&logo=JavaScript&logoColor=f7df1e&color=003366"
              alt="programmingLang"
            />
            <img
              src="https://img.shields.io/badge/OPERATING_SYSTEM-WINDOWS,_LINUX-informational?style=flat&logo=Linux&logoColor=fffff&color=003366"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/MARKUP_LANGUAGES-HTML,_XML-informational?style=flat&logo=HTML5&logoColor=fffff&color=003366"
              alt="MarkupLang"
            />
            <img
              src="https://img.shields.io/badge/FRAMEWORK-Reactjs,_Nodejs,_Express-informational?style=flat&logo=Node.js&logoColor=fffff&color=003366"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/STYLESHEET_LANGUAGES-CSS-informational?style=flat&logo=CSS3&logoColor=fffff&color=003366"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/DATABASE-MONGODB,_SQL-informational?style=flat&logo=MongoDB&logoColor=47A248&color=003366"
              alt="Database"
            />
            <img
              src="https://img.shields.io/badge/FAVORITE_TEXT_EDITOR-VISUAL_STUDIO_CODE-informational?style=flat&logo=Xcode&logoColor=fffff&color=003366"
              alt=""
            />
          </div>
          <div className="softSkills">
            <li>Problem Solving Attitude</li>
            <li>Self Motivated</li>
            <li>Decision Making</li>
            <li>Quick Lerner</li>
          </div>
          <div className="softSkills">
            <li>Conflict Resolution</li>
          </div>
        </div>

        <div className="heading">
          <p>GITHUB STATISTICS</p>
        </div>

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=SonuKumar81800&theme=chartreuse-dark&layout=compact"
          alt=""
        />
        <img
          src="https://github-profile-trophy.vercel.app/?username=SonuKumar81800&column=2&row=2&layout=compact&theme=darkhub&no-frame=true&no-bg=true"
          alt=""
        />

        {/* Main Body End  */}

        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Resume;

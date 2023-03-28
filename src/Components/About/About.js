import React from "react";
import "./about.css";
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import Web from "../../Static/images/web.jpeg";

const About = () => {
  return (
    <section className="about mt-4" id="about">
      <div className=" section-title">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          labore vitae aspernatur voluptatum animi.
        </p>
      </div>
      <div className="row">
        <div className=" col-md-4">
          <img
            className=" img-fluid"
            src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className=" col-md-8 pt-4 pt-lg-0">
          <h3 className="heading-orange">Software Engineer</h3>
          <p className="text-black fw-bold">
            Junior software developer with 1 year of experience in software development and administration, I am a result driven individual with knowledge and skills to complete the task assigned.
            I belive in team work as it build oneself and encourage productivity. I belive i am the person you need to get your work done. Please Contact me. I am open to Employment on either Contract of Parmanent terms.
          </p>
          <div className="row">
            <div className="col-lg-5">
              <ul>
                <li>
                  Phone: <strong>+254791980616</strong>
                </li>
                <li>
                  Email: <strong>nicholaskiplimo5@gmail.com</strong>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <li>
                Qualification: <strong>Degree</strong>
              </li>
              <li>
                Specialization: <strong>Software & System Applications</strong>
              </li>
            </div>
          </div>
          <div className="col-mg-12 mt-4">
            <p className="fw-bold"><span>Note: </span>Download my resume to View my Education background and more Information about me.</p>
          </div>
        </div>
      </div>

      {/* skills */}
      <section className=" skills mt-3" id="skills">
        <div>
          <h2>Skills</h2>
          <p>
            I a have knowledge in the following technologies. But i am not limited to this, I am flexible to learn new skills and technolgies
          </p>
          <div className="row">
            <div className="col-lg-3">
              <div className=" card align-content-center rounded-5 bg-transparent">
                <FaServer className="image-center" size={39}/>
                <h5 className="card-title text-center">Web Development</h5>
                <div className=" card-body">
                  <ul className=" list-unstyled text-center text-center">
                    <li>
                      <FaHtml5 /> HTML
                    </li>
                    <li>
                      <FaCss3 /> css
                    </li>
                    <li>
                      <TbBrandJavascript /> JAVASCRIPT 
                    </li>
                    <li>
                      <FaReact /> React Js 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" col-lg-3">
              <div className=" card align-content-center rounded-5 bg-transparent">
                <FaServer size={30} className="image-center" />
                <h5 className="card-title text-center">Back end & API</h5>
                <div className=" card-body">
                  <ul className=" list-unstyled text-center">
                    <li>
                      <FaNodeJs /> Node Js 
                    </li>
                    <li>
                      <SiSpringboot /> Spring Boot 
                    </li>
                    <li>
                      <TbBrandJavascript /> JAVASCRIPT 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" col-lg-3">
              <div className=" card align-content-center rounded-5 bg-transparent">
                <FaServer className="image-center" size={30} />
                <h5 className="card-title text-center">Technical Support</h5>
                <div className=" card-body">
                  <ul className=" list-unstyled text-center">
                    <li>
                      <FaNodeJs />Network Troubleshooting 
                    </li>
                    <li>
                     <SiSpringboot /> Software TR 
                    </li>
                    <li>
                      <TbBrandJavascript />JAVASCRIPT 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

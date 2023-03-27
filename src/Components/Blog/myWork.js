import React from "react";
import "./styles.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Demo from "../../Static/images/demo.jpg";

const myWork = () => {
  return (
    <div className="container">
      <Nav />
      <div className="blog" id="blog">
        <div className=" text-center">
          <h3 className="title">
            My Projects
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore?</p>
        </div>
        <div className="row">
          <div className=" col-lg-3">
            <div className="card">
              <div className=" card-body">
                <img  className=" card-img" src={Demo} alt="" />
                <h2 className=" title">Resume Generator</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem maiores vitae nulla sit et ab necessitatibus unde
                  consequatur illo esse.
                </p>
                <div className=" text-muted g-2">
                  <h5>Techologies:</h5>
                  <ul className="list-unstyled">
                    <li className="badge bg-info me-2">Js</li>
                    <li className="badge bg-info me-2">css</li>
                    <li className="badge bg-info me-2">html</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-3">
            <div className="card">
              <div className=" card-body">
                <img  className=" card-img" src={Demo} alt="" />
                <h2 className=" title">Resume Generator</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem maiores vitae nulla sit et ab necessitatibus unde
                  consequatur illo esse.
                </p>
                <div className=" text-muted g-2">
                  <h5>Techologies:</h5>
                  <ul className="list-unstyled">
                    <li className="badge bg-info me-2">Js</li>
                    <li className="badge bg-info me-2">css</li>
                    <li className="badge bg-info me-2">html</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-3">
            <div className="card">
              <div className=" card-body">
                <img  className=" card-img" src={Demo} alt="" />
                <h2 className=" title">Resume Generator</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem maiores vitae nulla sit et ab necessitatibus unde
                  consequatur illo esse.
                </p>
                <div className=" text-muted g-2">
                  <h5>Techologies:</h5>
                  <ul className="list-unstyled">
                    <li className="badge bg-info me-2">Js</li>
                    <li className="badge bg-info me-2">css</li>
                    <li className="badge bg-info me-2">html</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-3">
            <div className="card">
              <div className=" card-body">
                <img  className=" card-img" src={Demo} alt="" />
                <h2 className=" title">Resume Generator</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem maiores vitae nulla sit et ab necessitatibus unde
                  consequatur illo esse.
                </p>
                <div className=" text-muted g-2">
                  <h5>Techologies:</h5>
                  <ul className="list-unstyled">
                    <li className="badge bg-info me-2">Js</li>
                    <li className="badge bg-info me-2">css</li>
                    <li className="badge bg-info me-2">html</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default myWork;

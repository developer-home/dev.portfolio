import React from "react";
import "./contact.css";
import contact_img from './contact.svg'


const Contact = () => {

  return (
    <div className=" container">
      <div className=" row justify-content-center">
        <div className=" col-md-12 mb-3">
          <div className="row justify-content-center">
            <div className=" col-md-6">
              <h3 className="heading mb-4">Let's talk about everything!</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ab?</p>
              <p><img className="img-fluid" style={{height:"40vh"}} src={contact_img} alt="" /></p>
            </div>
            <div className=" col-md-6">
              <form action="" className="mb-5 need_validation" noValidate>
                <div className="row">
                  <div className=" col-md-12 form-group mb-3">
                    <input type="text" className=" form-control" name="name" id="name" placeholder="Enter Your Name..." required/>
                    <div className=" valid-feedback">
                      This Looks Good!
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 form-group mb-3">
                    <input type="text" className=" form-control" name="email" id="email" placeholder="Enter Email Adress..." required/>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 input-group mb-3 ">
                    <input type="text" className=" form-control" name="subject" id="subject" placeholder="Subject..." required/>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 mb-3">
                    <textarea className=" form-control" name="message" rows="7" id="message" placeholder="Write your Message" required></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12">
                    <input type="submit" className=" btn btn-primary rounded-0 py-2 px-4" value="Send Message" />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;

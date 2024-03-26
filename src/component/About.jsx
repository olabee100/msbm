import React from 'react';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import './About.css'; 

const About = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-2 text-center">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
              <h1 style={{ color: "#fb873f" }}>Invest in your professional goals with MSBM</h1>
              <p className="mb-5">Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera, taught by top instructors.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4">
                  <img src={icon1} alt="" width="60px" className="mb-4" />
                  <h5 className="mb-3">Learn anything</h5>
                  <p>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4">
                  <img src={icon2} alt="" width="60px" className="mb-4" />
                  <h5 className="mb-3">Save money</h5>
                  <p>Spend less money on your learning if you plan to take multiple courses this year</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4">
                  <img src={icon3} alt="" width="60px" className="mb-4" />
                  <h5 className="mb-3">Flexible learning</h5>
                  <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4">
                  <img src={icon4} alt="" width="60px" className="mb-4" />
                  <h5 className="mb-3">Unlimited certificates</h5>
                  <p>Earn a certificate for every learning program that you complete at no additional cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

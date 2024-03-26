import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; 
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import './Hero.css'; 

const options = {
  items: 1,
  loop: true,
  nav: true, 
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Define custom icons for navigation
  dots: false,
  autoplay: true,
};

const Hero = () => {
  return (
    <div className="container-fluid p-0 h-[40px] mb-4">
      <OwlCarousel options={options}>
        <div className="owl-carousel-item  position-relative">
          <img className="img-fluid" src={carousel1} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-uppercase mb-3 animated slideInDown" style={{ color: "#fb873f", fontSize: "5vw", maxWidth: "100%" }}>Best E-learning platform</h5>
                  <h1 className="display-3 text-white animated slideInDown" style={{ fontSize: "6vw", maxWidth: "100%" }}>Learn Job ready skills from free online courses with certificates</h1>
                  <p className="text-white mb-4 pb-2" style={{ fontSize: "4vw", maxWidth: "100%" }}>Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!</p>
                  <a href="/" style={{ backgroundColor: "#fb873f" }} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carousel2} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(63, 66, 87, 0.7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-uppercase mb-3 animated slideInDown" style={{ color: "#fb873f", fontSize: "5vw", maxWidth: "100%" }}>Welcome to Metropolitan School of Business and Management</h5>
                  <h1 className="display-3 text-white animated slideInDown" style={{ fontSize: "6vw", maxWidth: "100%" }}>Interactive Learning Experience</h1>
                  <p className="text-white mb-4 pb-2" style={{ fontSize: "4vw", maxWidth: "100%" }}>Engage with interactive lessons, quizzes, and projects. Experience hands-on learning that keeps you motivated and inspired.</p>
                  <a href="/" style={{ backgroundColor: "#fb873f" }} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Hero;

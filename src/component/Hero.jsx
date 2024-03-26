import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
   
  };

  return (
    <div className="container-fluid p-0 h-[40px] mb-4">
      <Slider {...settings}>
        <div className="position-relative">
          <img className="img-fluid" src={carousel1} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-uppercase mb-3 animated slideInDown" style={{ color: "#fb873f", fontSize: "3vw", maxWidth: "100%" }}>Best E-learning platform</h5>
                  <h1 className="display-3 text-white animated slideInDown" style={{ fontSize: "4vw", maxWidth: "100%" }}>Learn Job ready skills from free online courses with certificates</h1>
                  <p className="text-white mb-4 pb-2" style={{ fontSize: "2vw", maxWidth: "100%" }}>Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!</p>
                  <a href="/" style={{ backgroundColor: "#fb873f" }} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <img className="img-fluid" src={carousel2} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(63, 66, 87, 0.7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-uppercase mb-3 animated slideInDown" style={{ color: "#fb873f", fontSize: "3vw", maxWidth: "100%" }}>Welcome to Metropolitan School of Business and Management</h5>
                  <h1 className="display-3 text-white animated slideInDown" style={{ fontSize: "4vw", maxWidth: "100%" }}>Interactive Learning Experience</h1>
                  <p className="text-white mb-4 pb-2" style={{ fontSize: "2vw", maxWidth: "100%" }}>Engage with interactive lessons, quizzes, and projects. Experience hands-on learning that keeps you motivated and inspired.</p>
                  <a href="/" style={{ backgroundColor: "#fb873f" }} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;

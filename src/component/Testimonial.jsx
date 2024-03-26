import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonial1 from "../images/Testimonial1.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h1 className="bg-white text-center px-3" style={{ color: "#fb873f" }}>Success stories</h1>
          <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quia?</p>
        </div>

        <Slider {...settings}>
          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={Testimonial1}
              style={{ width: "80px", height: "80px" }} alt="testimonial" />
            <h5 className="mb-0">Sarah K.</h5>
            <div className="testimonial-text  bg-light text-center p-4 h-10" style={{ width: "50%", margin: "0 auto", height: "150px", overflowY: "auto" }}>
              <p className="mb-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi dolorum quas cum voluptatibus omnis quaerat aliquam inventore nihil laborum voluptatum, modi praesentium repudiandae unde. Quis corporis natus nesciunt culpa!</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={Testimonial1}
              style={{ width: "80px", height: "80px" }} alt="testimonial" />
            <h5 className="mb-0">Sarah K.</h5>
            <div className="testimonial-text mb-5 bg-light text-center p-4 "style={{ width: "50%", margin: "0 auto", height: "150px", overflowY: "auto" }} >
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis dignissimos dolor est aliquam accusantium odio fugit minima ut illum quidem neque assumenda ab, voluptas eveniet, exercitationem id iure animi.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={Testimonial1}
              style={{ width: "80px", height: "80px" }} alt="testimonial" />
            <h5 className="mb-0">Sarah K.</h5>
            <div className="testimonial-text mb-5 bg-light text-center p-4 "style={{ width: "50%", margin: "0 auto", height: "150px", overflowY: "auto" }} >
              <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestiae perferendis quasi harum illum repellat minima reiciendis vel, molestias, magni libero repellendus eligendi at sequi vitae asperiores tenetur autem soluta.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={Testimonial1}
              style={{ width: "80px", height: "80px" }} alt="testimonial" />
            <h5 className="mb-0">Sarah K.</h5>
            <div className="testimonial-text mb-5 bg-light text-center p-4 "style={{ width: "50%", margin: "0 auto", height: "150px", overflowY: "auto" }} >
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laboriosam illum nisi eum nemo aperiam veniam, distinctio exercitationem. At nulla eligendi, fugit omnis qui nobis reiciendis ullam minus ex aliquam.</p>
            </div>
          </div>

          
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

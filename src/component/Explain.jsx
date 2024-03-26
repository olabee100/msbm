import React from 'react'
import about from "../images/about.jpg"
import WOW from 'wowjs';
import { useEffect } from 'react';
const Explain = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
  return (
    <div>
       
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
      <div className="position-relative h-100">
        <img className="img-fluid position-absolute w-100 h-100" src={about} alt=""
          style={{ objectFit: "cover" }} />
      </div>
    </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start pe-3">About Us</h6>
                    <h1 className="mb-4" style={{ color: "#fb873f" }}>Welcome to MSBM</h1>

                    <p class="mb-4">At MSBM, we believe in accessible, innovative learning experiences that
                        adapt to your schedule and learning style. Join us in embracing the future of education and
                        unlock your potential with our immersive online courses.</p>
                    <p class="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo minima porro reprehenderit cumque necessitatibus recusandae sed dolorem aspernatur reiciendis fugiat quisquam, possimus sit illum expedita mollitia tempore esse repudiandae eum!</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2"></i>Expert Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right me-2"></i>Live Interactive Sessions</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right me-2"></i>Comprehensive Course Catalog</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right me-2"></i>Community Engagement</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right me-2"></i>Personalized Learning Paths</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right me-2"></i>Certification and Recognition</p>
                        </div>
                    </div>
                    <a class="btn text-light py-3 px-5 mt-2" href="about.html">Read More</a>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Explain
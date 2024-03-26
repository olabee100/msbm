import React from 'react'
import  course1 from "../images/course1.jpg"
import  course2 from "../images/course2.jpg"
import  course3 from "../images/course3.jpg"
import  course4 from "../images/course4.jpg"
import  course5 from "../images/course5.jpg"
import  course6 from "../images/course6.jpg"
import  course7 from "../images/course7.jpg"
import  course8 from "../images/course8.jpg"
import  course9 from "../images/course9.jpg"
import  course10 from "../images/course10.jpg"
import  course11 from "../images/course11.jpg"
import  course12 from "../images/course12.jpg"

const Courses = () => {
  return (
    <div>
       
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center px-3">Popular Courses</h6>
                <h1 class="mb-5" style={{color: "#fb873f"}}>Explore new and trending free online courses</h1>
            </div>
            <div class="row g-4 py-2">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course1} alt="" />
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#fb873f" }} className="px-2 py-1 fw-bold text-uppercase">FREE</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1"><a href="single.html" class="text-dark">HTML Course for Beginners </a></h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                4.55</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>5.8L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>2.0
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 0</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course2} alt="" />
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#0ed44c" }} className="px-2 py-1 fw-bold text-uppercase">PAID</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">Front End Development-CSS
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                4.55</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>5.2L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>4.0
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 199</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6"style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course3} alt="" />
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#fb873f" }} className="px-2 py-1 fw-bold text-uppercase">FREE</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">Introduction to JavaScript
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                4.46</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>76L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>2.5
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 0</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course4} alt=""/>
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#0ed44c" }} className="px-2 py-1 fw-bold text-uppercase">PAID</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">Python Programming
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                3.54</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>3.3L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>3.0
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 299</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course5}alt=""/>
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#fb873f" }} className="px-2 py-1 fw-bold text-uppercase">FREE</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">SQL for Data Science
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-1"><i class="fa fa-star text-warning me-2"></i>
                                4.54</small>
                            <small class="flex-fill text-center py-1 px-1"><i class="fa fa-user-graduate me-2"></i>1.3L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-1"><i
                                    class="fa fa-user me-2"></i>Intermediate</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>5.0
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 0</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course6} alt=""/>
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#fb873f" }} className="px-2 py-1 fw-bold text-uppercase">FREE</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">ChatGPT for Beginners
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                3.55</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>3.5L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>4.5
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 0</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course7} alt=""/>
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#fb873f" }} className="px-2 py-1 fw-bold text-uppercase">FREE</div>

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1">AWS for Beginners
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-star text-warning me-2"></i>
                                4.53</small>
                            <small class="flex-fill text-center py-1 px-2"><i class="fa fa-user-graduate me-2"></i>1L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Beginner</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>3.0
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 0</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src={course8}alt="" />
                            <div style={{ position: "absolute", top: "15px", left: "16px", fontSize: "12px", borderRadius: "3px", backgroundColor: "#0ed44c" }} className="px-2 py-1 fw-bold text-uppercase">
    PAID
</div>

                        <div class="p-2 pb-0">

                            <h5 class="mb-1">Microsoft Azure Essentials
                            </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-center py-1 px-1"><i class="fa fa-star text-warning me-2"></i>
                                4.64</small>
                            <small class="flex-fill text-center py-1 px-1"><i class="fa fa-user-graduate me-2"></i>4.4L+
                                Learners
                            </small>
                            <small class="flex-fill text-center py-1 px-1"><i
                                    class="fa fa-user me-2"></i>Intermediate</small>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill text-left p-2 px-2"><i class="fa fa-clock me-2"></i>3.5
                                Hrs</small>
                            <small class="py-1 px-2 fw-bold fs-6 text-center">₹ 149</small>
                            <small class=" text-primary py-1 px-2 fw-bold fs-6" style={{ float:"right" }}><a href="#">Enroll
                                    Now </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                    </div>
                </div>
                
                    
              
            </div>

        </div>
    </div>
    <div class="container text-center">
        <a class="btn text-light py-3 px-5 mt-2 mb-5" href="courses.html">All Courses</a>
    </div>
    
    </div>
    </div>
  )
}

export default Courses;
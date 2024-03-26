import React from 'react'

const Faq = () => {
  return (
    <div>
       
    <div class="container-xxl py-5 category">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                
                <h1 class="mb-5">Frequently Asked Questions</h1>
            </div>
            <div class="row g-2">
                <div class="col-12">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is the MSBM ?
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sit saepe dolores? Eaque porro deserunt dicta commodi natus incidunt facere?
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur. ?
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem molestiae neque iure ipsum culpa expedita architecto minus perferendis dolore non similique sequi labore, voluptate adipisci? Ipsum error natus amet blanditiis.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How many free courses can I enroll in at the same time?
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aspernatur..
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How can I enroll in these free online courses?
                              </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque?
                                </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What are the most popular free courses offered by MSBM ?
                              </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eveniet architecto hic voluptatum maxime consequuntur voluptates nulla illo repellendus blanditiis.
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid, saepe iusto nostrum aut aperiam!</p>
                                <ul>
                                    <li>Free Data Science Courses</li>
                                    <li>Free Artificial Intelligence Courses</li>
                                    <li>Free Software Courses</li>
                                    <li>Free Cloud Computing Courses</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default Faq
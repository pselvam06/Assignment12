import React from 'react'
import './Herosection.css'; 


function HeroSection() {
  return (
 <section className="hero-section position-relative">
      <div className="overlay position-absolute w-100 h-100"></div>
      
      <div className="container  position-relative z-index-1 text-white text-center">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-10 col-md-11 col-sm-12">
            <h1 className="hero-title   mb-4">
              Unlimited movies, TV shows and more
            </h1>
            <p className="hero-subtitle fs-5 mb-4">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="cta-text fs-6 mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="email-form row g-2 justify-content-center">
              <div className="col-md-10 col-lg-7">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="heroEmail"
                    placeholder="Email address"
                  />
                  <label htmlFor="heroEmail">Email address</label>
                </div>
              </div>
              <div className="col-md-3 col-lg-5 d-flex">
                <button className="btn btn-danger fs-4 btn-lg w-100 py-3">
                  Get Started <i className="bi bi-chevron-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default HeroSection

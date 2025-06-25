import React from 'react'
import './Herosection.css'; 


function HeroSection() {
  return (
 <section className="hero-section position-relative">
  <div className="overlay position-absolute w-100 h-100"></div>

  <div className="container position-relative z-index-1 text-white text-center">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
        <h1 className="hero-title text-center mb-5">
          Unlimited movies, TV shows and more
        </h1>
        <p className="hero-subtitle fs-5 fw-bold mb-3">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="cta-text fs-6 fw-bold mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-form row g-2 justify-content-center">
          <div className="col-12 col-sm-8">
            <div className="form-floating">
              <input
                type="email"
                className="form-control text-white bg-transparent  fs-5"
                id="heroEmail"
                placeholder="Email address"
              />
              <label htmlFor="heroEmail">Email address</label>
            </div>
          </div>
          <div className="col-12 col-sm-4 d-grid">
            <button className="btn btn-danger fs-5 btn-lg w-100">
              Get Started  <i className="bi bi-chevron-right ms-2"></i>
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

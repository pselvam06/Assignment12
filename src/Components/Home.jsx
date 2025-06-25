import React from "react";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div className="home-container bg-dark text-white p-4">
      <div className="position-relative">
        {/* Your content */}
        <div
          className="netflix-curve"
          style={{
            height: "20px",
            width: "100%",
            backgroundColor: "#e50914",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            transform: "scaleY(0.5)",
          }}
        ></div>
      </div>

      <div className="container mt-5 bg-dark text-white p-4 rounded">
        <h3>Trending Now</h3>
        <div className="row">
          {[
            "https://i.pinimg.com/736x/a8/0a/53/a80a5397927d44de482e13041f661497.jpg",
            "https://i.pinimg.com/736x/41/ea/10/41ea1019f87aa1c11cd46dab285abf6d.jpg",
            "https://i.pinimg.com/736x/06/9b/bc/069bbc2d58d734776a7154173b07ed05.jpg",
            "https://i.pinimg.com/736x/fb/1b/f3/fb1bf377103e2e6748729739927570ea.jpg",
            "https://i.pinimg.com/736x/69/41/85/694185c0a4b1ea181f4d068cdb3d36f0.jpg",
            "https://i.pinimg.com/736x/fb/a4/40/fba4407a54b940feaad67448b1528496.jpg",
          ].map((src, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <div className="card bg-dark text-white">
                <img
                  src={src}
                  className="img-fluid rounded"
                  alt={`Movie ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 bg-dark text-white p-4 rounded">
        <h3 className="mb-4">More reasons to join</h3>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="netflix-card h-100 p-3 rounded">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-tv fs-1 text-danger"></i>
              </div>
              <h5 className="fw-bold">Enjoy on your TV</h5>
              <p>
                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="netflix-card h-100 p-3 rounded">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-download fs-1 text-danger"></i>
              </div>
              <h5 className="fw-bold">Download your shows</h5>
              <p>
                Save your favorites easily and always have something to watch
                offline.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="netflix-card h-100 p-3 rounded">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-phone fs-1 text-danger"></i>
              </div>
              <h5 className="fw-bold">Watch everywhere</h5>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="netflix-card h-100 p-3 rounded">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-emoji-smile fs-1 text-danger"></i>
              </div>
              <h5 className="fw-bold">Kids profiles</h5>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 bg-dark text-white  p-4">
        <h3>Frequently Asked Questions</h3>
        <div className="accordion bg-dark " id="faqAccordion">
          <div className="accordion-item ">
            <h2 className="accordion-header gap-5">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
                aria-expanded="true"
                aria-controls="faq1"
              >
                What is Netflix?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse  collapse">
              <div className="accordion-body">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more.
              </div>
            </div>
          </div>

          <div className="accordion-item  ">
            <h2 className="accordion-header">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
                aria-expanded="false"
                aria-controls="faq2"
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body">
                Netflix offers several membership plans to suit your needs. You
                can choose from Basic, Standard, or Premium plans.
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
                aria-expanded="false"
                aria-controls="faq3"
              >
                How do I cancel my subscription?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse">
              <div className="accordion-body">
                You can cancel your subscription at any time through your
                account settings on the Netflix website or app.
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button   collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
                aria-expanded="false"
                aria-controls="faq4"
              >
                Can I watch Netflix on multiple devices?
              </button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, you can stream Netflix on multiple devices simultaneously,
                depending on your subscription plan.
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button   collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq5"
                aria-expanded="false"
                aria-controls="faq5"
              >
                Is there a free trial available?
              </button>
            </h2>
            <div id="faq5" className="accordion-collapse collapse">
              <div className="accordion-body">
                Netflix does not currently offer a free trial, but you can sign
                up for a monthly subscription and cancel at any time.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button   collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq6"
                aria-expanded="false"
                aria-controls="faq6"
              >
                What devices can I use to watch Netflix?
              </button>
            </h2>
            <div id="faq6" className="accordion-collapse collapse">
              <div className="accordion-body">
                You can watch Netflix on Smart TVs, game consoles, streaming
                media players, smartphones, tablets, and computers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-dark text-light p-5 text-center">
        <p className="mb-4 fs-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-form row g-2 justify-content-center align-items-center">
          <div className="col-12 col-sm-8 col-md-7 col-lg-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control transparent-input text-white"
                id="heroEmail"
                placeholder="Email address"
              />
              <label htmlFor="heroEmail">Email address</label>
            </div>
          </div>

          <div className="col-12 col-sm-4 col-md-3 col-lg-2 d-grid">
            <button
              className="btn btn-danger fs-5 btn-lg py-3 w-100"
              type="submit"
            >
              Get Started <i className="bi bi-chevron-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

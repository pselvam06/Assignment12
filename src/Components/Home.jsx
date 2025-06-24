import React from 'react'
import './Home.css'; 


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
        <div className="col-md-3 mb-3">
          <div className="card bg-dark text-white">
            <img
              src="https://i.pinimg.com/736x/a8/0a/53/a80a5397927d44de482e13041f661497.jpg"
              className="img-fluid"
              alt="Movie 1"
              style={{ maxWidth: "250px", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movie 1</h5>
              <p className="card-text">Description of Movie 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-dark text-white">
            <img
              src="https://i.pinimg.com/736x/41/ea/10/41ea1019f87aa1c11cd46dab285abf6d.jpg"
              className="img-fluid"
              alt="Movie 2"
              style={{ maxWidth: "250px", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movie 2</h5>
              <p className="card-text">Description of Movie 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-dark text-white">
            <img
              src="https://i.pinimg.com/736x/06/9b/bc/069bbc2d58d734776a7154173b07ed05.jpg"
              className="img-fluid"
              alt="Movie 3"
              style={{ maxWidth: "250px", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movie 4</h5>
              <p className="card-text">Description of Movie 4.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-dark text-white">
            <img
              src="https://i.pinimg.com/736x/fb/1b/f3/fb1bf377103e2e6748729739927570ea.jpg"
              className="img-fluid"
              alt="Movie 4"
              style={{ maxWidth: "250px", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movie 3</h5>
              <p className="card-text">Description of Movie 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5 bg-dark text-white p-4 rounded">
      <h3>More reasons to join</h3>
      <div className="row">
        <div className="col-md-3">
          <h5>Enjoy on your TV</h5>
          <p>
            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Download your shows to watch offline</h5>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
        <div className="col-md-3">
          <h5>Watch everywhere</h5>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Create profiles for kids</h5>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>

    <div className="container mt-5 bg-dark text-white p-4 rounded">
      <h3>Frequently Asked Questions</h3>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1"
            >
              What is Netflix?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
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

        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
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
              You can cancel your subscription at any time through your account
              settings on the Netflix website or app.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
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

        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
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
              Netflix does not currently offer a free trial, but you can sign up
              for a monthly subscription and cancel at any time.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-dark text-white">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
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
              You can watch Netflix on Smart TVs, game consoles, streaming media
              players, smartphones, tablets, and computers.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home

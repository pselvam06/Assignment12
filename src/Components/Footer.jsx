import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <p>Questions? Call <a href="tel:+18669524456" className="text-light">1-866-952-4456</a></p>
        <div className="row">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Help Centre</li>
              <li>Account</li>
              <li>Media Centre</li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <select className="form-select w-25">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>
        <p className="mt-3">© 2025 Netflix India</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer

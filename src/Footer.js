import React from "react";

function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: "#f7efe5", color: "#4d4d4d" }}>
      <div className="container">
        <div className="row">
          {/* Explore Penang Section */}
          <div className="col-6 col-md-3 mb-3">
            <h5 style={{ color: "#c8a97e", fontWeight: "bold" }}>Explore Penang</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 footer-link" style={{ color: "#4d4d4d" }}>
                  <i className="bi bi-house-door"></i> Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/bucket-list" className="nav-link p-0 footer-link" style={{ color: "#4d4d4d" }}>
                  Bucket List
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/flavours" className="nav-link p-0 footer-link" style={{ color: "#4d4d4d" }}>
                  Flavours
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/shops" className="nav-link p-0 footer-link" style={{ color: "#4d4d4d" }}>
                  Shops
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/hidden-gems" className="nav-link p-0 footer-link" style={{ color: "#4d4d4d" }}>
                  Hidden Gems
                </a>
              </li>
            </ul>
          </div>

          {/* Plan Your Visit Section */}
          <div className="col-6 col-md-3 mb-3">
            <h5 style={{ color: "#c8a97e", fontWeight: "bold" }}>Plan Your Visit</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Travel Tips
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Transportation
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Accommodations
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Events
                </span>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="col-6 col-md-3 mb-3">
            <h5 style={{ color: "#c8a97e", fontWeight: "bold" }}>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Our Mission
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  Contact
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-muted" style={{ cursor: "default" }}>
                  FAQs
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 style={{ color: "#c8a97e", fontWeight: "bold" }}>Stay Connected</h5>
            <p style={{ fontSize: "0.9rem" }}>
              Get the latest updates and travel tips for Penang!
            </p>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <label htmlFor="newsletter" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                className="form-control"
                placeholder="Email address"
                aria-label="Enter your email"
              />
              <button
                className="btn"
                type="button"
                style={{
                  backgroundColor: "#c8a97e",
                  color: "#fff",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
          <p style={{ marginBottom: "0", fontSize: "0.9rem" }}>
            © 2025 Explore Penang. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex footer-icons">
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="#"
                aria-label="Follow us on Twitter"
                style={{ color: "#c8a97e", fontSize: "1.25rem" }}
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="#"
                aria-label="Follow us on Instagram"
                style={{ color: "#c8a97e", fontSize: "1.25rem" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="#"
                aria-label="Follow us on Facebook"
                style={{ color: "#c8a97e", fontSize: "1.25rem" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

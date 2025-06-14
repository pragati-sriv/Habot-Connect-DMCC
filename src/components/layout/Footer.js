import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Provider Profile Builder</h5>
            <p className="text-muted">
              Create and manage professional profiles for healthcare providers and educators.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-muted text-decoration-none">
                  <i className="bi bi-info-circle me-2"></i>
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted text-decoration-none">
                  <i className="bi bi-envelope me-2"></i>
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-muted text-decoration-none">
                  <i className="bi bi-shield-lock me-2"></i>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} Provider Profile Builder. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
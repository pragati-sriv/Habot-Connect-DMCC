import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Step3Contact = ({ data, onChange }) => (
  <div className="card shadow-sm p-4">
    <h4 className="card-title mb-4">Step 3: Contact & Availability</h4>
    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Email Address</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>
        <input
          type="email"
          name="email"
          className={`form-control ${
            data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
              ? "is-invalid"
              : ""
          }`}
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
        {data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && (
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        )}
      </div>
    </div>

    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Phone Number</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-telephone"></i>
        </span>
        <input
          type="text"
          name="phone"
          maxLength={10}
          className="form-control"
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, ""); 
            onChange("phone", onlyNumbers);
          }}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-", "."].includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="form-label fw-bold text-primary">
        Preferred Working Hours
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-clock"></i>
        </span>
        <textarea
          name="availability"
          className="form-control"
          rows="3"
          placeholder="e.g., Monday to Friday, 9 AM - 5 PM"
          value={data.availability}
          onChange={(e) => onChange("availability", e.target.value)}
        />
      </div>
    </div>
  </div>
);

export default Step3Contact;

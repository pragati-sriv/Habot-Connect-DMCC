import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          className="form-control"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Phone Number</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-telephone"></i>
        </span>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Preferred Working Hours</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-clock"></i>
        </span>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter your preferred working hours (e.g., Monday-Friday, 9 AM - 5 PM)"
          value={data.availability}
          onChange={(e) => onChange('availability', e.target.value)}
        />
      </div>
    </div>
  </div>
);

export default Step3Contact;

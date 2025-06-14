import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaClock, FaUserTie } from 'react-icons/fa';

const PreviewProfile = ({ data }) => (
  <div className="card shadow-sm p-4 bg-white">
    <h4 className="text-primary mb-4">🧾 Profile Preview</h4>

    <div className="d-flex align-items-center mb-3">
      {data.profilePicture && (
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="img-thumbnail rounded-circle me-3"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />
      )}
      <div>
        <h5 className="mb-0 fw-bold">{data.name || '-'}</h5>
        <small className="text-muted">{data.bio || '-'}</small>
      </div>
    </div>

    <hr />

    <div className="mb-3">
      <strong className="text-secondary">Specializations:</strong>
      <div className="mt-1">
        {data.specializations.length > 0 ? (
          data.specializations.map((spec, idx) => (
            <span key={idx} className="badge rounded-pill bg-info text-dark me-2 mb-1">
              {spec}
            </span>
          ))
        ) : (
          <span>-</span>
        )}
      </div>
    </div>

    <div className="mb-3">
      <strong className="text-secondary">Services:</strong>
      <div className="mt-1">
        {data.services.length > 0 ? (
          data.services.map((srv, idx) => (
            <span key={idx} className="badge rounded-pill bg-secondary me-2 mb-1">
              {srv}
            </span>
          ))
        ) : (
          <span>-</span>
        )}
      </div>
    </div>

    <p className="mb-2">
      <FaUserTie className="me-2 text-primary" />
      <strong>Experience:</strong> {data.experience || '0'} years
    </p>


    <p className="mb-2">
      <FaEnvelope className="me-2 text-primary" />
      <strong>Email:</strong> {data.email || '-'}
    </p>


    <p className="mb-2">
      <FaPhone className="me-2 text-primary" />
      <strong>Phone:</strong> {data.phone || '-'}
    </p>

    <p className="mb-2">
      <FaClock className="me-2 text-primary" />
      <strong>Availability:</strong> {data.availability || '-'}
    </p>
  </div>
);

export default PreviewProfile;

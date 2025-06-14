import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Step1BasicInfo = ({ data, onChange }) => (
  <div className="card shadow-sm p-4">
    <h4 className="card-title mb-4">Step 1: Basic Information</h4>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input
        id="name"
        className="form-control"
        type="text"
        placeholder="Enter your name"
        value={data.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="bio" className="form-label">Short Bio</label>
      <textarea
        id="bio"
        className="form-control"
        rows={3}
        placeholder="Tell us about yourself"
        value={data.bio}
        onChange={(e) => onChange('bio', e.target.value)}
      />
    </div>
    <div className="mb-3">
      <button
        className="btn btn-outline-primary"
        onClick={() => onChange('profilePicture', true)}
      >
        Upload Profile Picture
      </button>
    </div>
    {data.profilePicture && (
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="img-thumbnail rounded-circle"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </div>
    )}
  </div>
);

export default Step1BasicInfo;

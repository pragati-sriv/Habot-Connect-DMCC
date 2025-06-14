import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StepNavigation = ({ step, next, prev, onSubmit }) => (
  <div className="d-flex justify-content-between mt-4">
    {step > 1 && (
      <button 
        className="btn btn-outline-secondary px-4" 
        onClick={prev}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Previous
      </button>
    )}
    {step < 4 && (
      <button 
        className="btn btn-primary px-4" 
        onClick={next}
      >
        Next
        <i className="bi bi-arrow-right ms-2"></i>
      </button>
    )}
    {step === 4 && (
      <button 
        className="btn btn-success px-4" 
        onClick={onSubmit}
      >
        <i className="bi bi-check-circle me-2"></i>
        Save Profile
      </button>
    )}
  </div>
);

export default StepNavigation;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const specializationsList = ['Dyslexia', 'ADHD', 'Autism', 'Speech Delay'];
const servicesList = ['Tutoring', 'Therapy', 'Coaching'];

const Step2Services = ({ data, onChange }) => {
  const toggleMultiSelect = (field, value) => {
    const current = data[field];
    onChange(
      field,
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  return (
    <div className="card shadow-sm p-4">
      <h4 className="card-title mb-4">Step 2: Services & Expertise</h4>


      <div className="mb-4">
        <label className="form-label fw-bold text-primary">Specializations</label>
        <div className="row g-3">
          {specializationsList.map((item, i) => (
            <div className="col-12 col-sm-6" key={i}>
              <div className="form-check p-3 border rounded">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`specialization-${i}`}
                  checked={data.specializations.includes(item)}
                  onChange={() => toggleMultiSelect('specializations', item)}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor={`specialization-${i}`}
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold text-primary">Services Offered</label>
        <div className="row g-3">
          {servicesList.map((item, i) => (
            <div className="col-12 col-sm-6" key={i}>
              <div className="form-check p-3 border rounded">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`service-${i}`}
                  checked={data.services.includes(item)}
                  onChange={() => toggleMultiSelect('services', item)}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor={`service-${i}`}
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="mb-4">
        <label className="form-label fw-bold text-primary">Years of Experience</label>
        <div className="input-group">
          <input
            type="number"
            name="experience"
            min="0"
            inputMode="numeric"
            className="form-control"
            value={data.experience}
            onChange={(e) => onChange('experience', e.target.value)}
            placeholder="Enter number of years"
          />
          <span className="input-group-text">years</span>
        </div>
      </div>
    </div>
  );
};

export default Step2Services;

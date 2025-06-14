import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Step1BasicInfo from './components/Step1BasicInfo';
import Step2Services from './components/Step2Services';
import Step3Contact from './components/Step3Contact';
import PreviewProfile from './components/PreviewProfile';
import StepNavigation from './components/StepNavigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    profilePicture: false,
    specializations: [],
    services: [],
    experience: '',
    email: '',
    phone: '',
    availability: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log('Submitted Profile:', formData);
    alert('Profile saved successfully!');
  };

  return (
    <main className="flex-grow-1 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary">Create Your Profile</h2>
              <p className="lead text-muted">Build your professional profile in just a few steps</p>
              
              <div className="progress mb-4" style={{ height: '4px' }}>
                <div 
                  className="progress-bar bg-primary" 
                  role="progressbar" 
                  style={{ width: `${(step / 4) * 100}%` }}
                  aria-valuenow={step} 
                  aria-valuemin="1" 
                  aria-valuemax="4"
                ></div>
              </div>
              <div className="d-flex justify-content-between text-muted small">
                <span>Basic Info</span>
                <span>Services</span>
                <span>Contact</span>
                <span>Preview</span>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-8">
                {step === 1 && <Step1BasicInfo data={formData} onChange={handleChange} />}
                {step === 2 && <Step2Services data={formData} onChange={handleChange} />}
                {step === 3 && <Step3Contact data={formData} onChange={handleChange} />}
                {step === 4 && <PreviewProfile data={formData} />}
                <StepNavigation step={step} next={next} prev={prev} onSubmit={handleSubmit} />
              </div>
              
              <div className="col-lg-4">
                <div className="card shadow-sm sticky-top" style={{ top: '2rem' }}>
                  <div className="card-header bg-primary text-white">
                    <h5 className="card-title mb-0">
                      <i className="bi bi-eye me-2"></i>
                      Live Profile Preview
                    </h5>
                  </div>
                  <div className="card-body">
                    <PreviewProfile data={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const BrowseProfiles = () => (
  <main className="flex-grow-1 bg-light">
    <div className="container py-5">
      <h2 className="text-center mb-4">Browse Profiles</h2>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-center text-muted">Profile browsing feature coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const Help = () => (
  <main className="flex-grow-1 bg-light">
    <div className="container py-5">
      <h2 className="text-center mb-4">Help & Support</h2>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Frequently Asked Questions</h5>
              <div className="accordion" id="helpAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How do I create a profile?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Simply click on the "Home" link in the navigation bar and follow the step-by-step process to create your profile.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Can I edit my profile later?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Yes, you can edit your profile at any time by logging in and accessing your profile settings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<BrowseProfiles />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

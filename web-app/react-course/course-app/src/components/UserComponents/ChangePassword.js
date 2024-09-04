import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/Footer';

export const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (setter) => {
    setter(prev => !prev);
  };

  return (
   <div>
    <Navbar/>
    <hr/>
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="font-weight-light my-3">Change Password</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Current Password Field */}
                <div className="mb-3 position-relative">
                  <label htmlFor="currentPassword" className="form-label">Current Password</label>
                  <div className="input-group">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      className="form-control form-control-lg"
                      id="currentPassword"
                      placeholder="Enter your current password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary position-absolute end-0 top-0 me-2"
                      onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
                    >
                      {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* New Password Field */}
                <div className="mb-3 position-relative">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <div className="input-group">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      className="form-control form-control-lg"
                      id="newPassword"
                      placeholder="Enter your new password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary position-absolute end-0 top-0 me-2"
                      onClick={() => togglePasswordVisibility(setShowNewPassword)}
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="form-control form-control-lg"
                      id="confirmPassword"
                      placeholder="Confirm your new password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary position-absolute end-0 top-0 me-2"
                      onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};
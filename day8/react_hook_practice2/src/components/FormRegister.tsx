import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormRegister.css';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter: boolean;
  terms: boolean;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const FormRegister: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const passwordValue = watch('password');

  const onSubmit = (data: FormData) => {
    alert('Register success!');
    // handle register logic here
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="logo-area">
          <img src="/vite.svg" alt="Lottery Display Logo" className="logo-img" />
          <span className="logo-title">Lottery Display</span>
        </div>
        <div className="register-desc">
          <h2>A few clicks away<br/>from creating your<br/>Lottery Display</h2>
        </div>
        <div className="register-graphic">
          <img src="/images/download.png" alt="Lottery Display Graphic" />
        </div>
      </div>
      <div className="register-right">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Register</h2>
          <div className="register-subtitle">
            <b>Manage all your lottery efficiently</b>
            <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
          </div>
          <div className="register-row">
            <div className="register-field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="John"
                {...register('firstName', {
                  required: 'First Name is required',
                  minLength: { value: 2, message: 'Min 2 characters' },
                })}
              />
              {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
            </div>
            <div className="register-field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                {...register('lastName', {
                  required: 'Last Name is required',
                  minLength: { value: 2, message: 'Min 2 characters' },
                })}
              />
              {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
            </div>
          </div>
          <div className="register-row">
            <div className="register-field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="0987654321"
                {...register('phone', {
                  required: 'Phone Number is required',
                  pattern: { value: phoneRegex, message: 'Phone must be 10-15 digits' },
                })}
              />
              {errors.phone && <span className="error-message">{errors.phone.message}</span>}
            </div>
            <div className="register-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: emailRegex, message: 'Invalid email format' },
                })}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
          </div>
          <div className="register-row">
            <div className="register-field">
              <label>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Secret123"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Min 8 characters' },
                    pattern: {
                      value: passwordRegex,
                      message: 'At least 1 uppercase, 1 lowercase, 1 number, no spaces',
                    },
                    validate: v => !/\s/.test(v) || 'No spaces allowed',
                  })}
                />
                <button
                  type="button"
                  className="show-hide-btn"
                  onClick={() => setShowPassword((s) => !s)}
                  tabIndex={-1}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>
            <div className="register-field">
              <label>Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Secret123"
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required',
                    validate: v => v === passwordValue || 'Passwords must match',
                  })}
                />
                <button
                  type="button"
                  className="show-hide-btn"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
            </div>
          </div>
          <div className="register-checkboxes">
            <label className="checkbox-label">
              <input type="checkbox" {...register('newsletter')} /> Yes, I want to receive Lottery Display emails
            </label>
            <label className="checkbox-label">
              <input type="checkbox" {...register('terms', { required: 'You must agree to continue' })} /> I agree to all the <a href="#">Term</a>, <a href="#">Privacy Policy</a> and <a href="#">Fees</a>
            </label>
            {errors.terms && <span className="error-message">{errors.terms.message}</span>}
          </div>
          <button type="submit" className="register-btn" disabled={!isValid}>Create Account</button>
          <div className="register-login">
            Already have an account? <a href="#">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;

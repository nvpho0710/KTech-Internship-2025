import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './formui.css';

type SignUpFields = {
  name: string;
  password: string;
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>();

  const onSubmit = (data: SignUpFields) => {
    alert(`Name: ${data.name}\nPassword: ${data.password}`);
  };

  return (
    <div className="formui-bg">
      <div className="formui-container">
        <button className="formui-back-btn">&#8592;</button>
        <div className="formui-content">
          <div className="formui-title">Sign up</div>
          <div className="formui-desc" style={{ textAlign: 'center' }}>
            Looks like you don't have an account.<br />
            Let's create a new account for <b>jane.doe@gmail.com</b>
          </div>
          <form className="formui-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={{ position: 'relative' }}>
              <input
                className="formui-input"
                type="text"
                placeholder="Name"
                {...register('name', { required: 'Name is required' })}
                style={{ background: '#222', color: '#fff', width: '90%' }}
              />
              {errors.name && (
                <span style={{ color: '#ffb3b3', fontSize: '0.95rem', position: 'absolute', left: 0, top: '105%' }}>{errors.name.message}</span>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <input
                className="formui-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                style={{ background: '#222', color: '#fff', width: '90%' }}
              />
              <button
                type="button"
                className="formui-password-toggle"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? 'Hide' : 'View'}
              </button>
              {errors.password && (
                <span style={{ color: '#ffb3b3', fontSize: '0.95rem', position: 'absolute', left: 0, top: '105%' }}>{errors.password.message}</span>
              )}
            </div>
            <div className="formui-terms" style={{ textAlign: 'center' }}>
              By selecting Agree and continue below, I agree to{' '}
              <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>
            </div>
            <button className="formui-agree-btn" type="submit" style={{ width: '100%' }}>
              Agree and continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

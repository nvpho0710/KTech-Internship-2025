import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './formui.css';

type LoginFields = {
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit = (data: LoginFields) => {
    alert(`Password: ${data.password}`);
  };

  return (
    <div className="formui-bg">
      <div className="formui-container">
        <button className="formui-back-btn">&#8592;</button>
        <div className="formui-content">
          <div className="formui-title">Log in</div>
          <div className="formui-user-info">
            <div className="formui-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)' }}></div>
            <div>
              <div className="formui-user-name">Jane Dow</div>
              <div className="formui-user-email">jane.doe@gmail.com</div>
            </div>
          </div>
          <form className="formui-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={{ position: 'relative' }}>
              <input
                className="formui-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                style={{ background: '#222', color: '#fff', width: '91%' }}
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
            <button className="formui-continue-btn" type="submit" style={{ width: '100%' }}>
              Continue
            </button>
          </form>
          <a className="formui-forgot" href="#" style={{ textAlign: 'center', display: 'block' }}>Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginFormHook.css";

type FormValues = {
  username: string;
  password: string;
  remember: boolean;
};

function isValidEmailOrPhone(value: string) {
  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Phone: 10-15 digits, only numbers
  const phoneRegex = /^\d{10,15}$/;
  return emailRegex.test(value) || phoneRegex.test(value);
}

const LoginFormHook = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      remember: true,
    },
    mode: "onTouched",
  });

  const onSubmit = (data: FormValues) => {
    if (data.remember) {
      // Simulate saving to localStorage
      console.log("Remembered user:", data.username);
    }
    alert("Login success!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="login-page-root">
      <div className="login-left">
        <div className="login-left-content">
          <h1 className="login-title">Set Your Partner<br />Recruitment on Auto-Pilot</h1>
          <div className="login-hexagon-bg">
            <img src="/images/anh1.png" alt="main" className="main-img" />
            <div className="hexagon hex1"></div>
            <div className="hexagon hex2"></div>
            <div className="hexagon hex3"></div>
            <div className="hexagon hex4"></div>
            <div className="hexagon hex5"></div>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-logo">Grovia</div>
        <div className="login-form-container">
          <h2 className="login-form-title">Login</h2>
          <div className="login-form-subtitle">Login to your account</div>
          <div className="login-form-desc">
            Thank you for get back to Grovia, lets access our the best recommendation contact for you.
          </div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <label className="login-label" htmlFor="username">Username</label>
            <input
              id="username"
              className="login-input"
              type="text"
              placeholder="Email or Phone Number"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters",
                },
                validate: value =>
                  isValidEmailOrPhone(value) ||
                  "Must be a valid email or phone number (10-15 digits)",
              })}
            />
            {errors.username && (
              <span className="form-error">{errors.username.message}</span>
            )}

            <label className="login-label" htmlFor="password">Password</label>
            <div className="password-input-wrapper" style={{ position: 'relative' }}>
              <input
                id="password"
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ paddingRight: 44, width: '90%' }}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: value =>
                    !/\s/.test(value) || "Password must not contain spaces",
                })}
              />
              <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', height: '100%' }}>
                <button
                  type="button"
                  className="show-hide-btn eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', height: 24, width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {showPassword ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232b38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5 0-9.27-3.11-11-8 1.21-3.11 3.61-5.64 6.59-6.71"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.93 0 3.5-1.57 3.5-3.5 0-.47-.09-.92-.26-1.33"/></svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232b38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </span>
            </div>
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}

            <div className="login-form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  {...register("remember")}
                  defaultChecked
                />
                Remember me
              </label>
              <a href="#" className="reset-password">Reset Password?</a>
            </div>
            <button className="login-btn" type="submit">SIGN IN</button>
          </form>
          <div className="login-form-footer">
            Don't have an account yet? <a href="#" className="join-link">Join Grovia Now!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormHook;

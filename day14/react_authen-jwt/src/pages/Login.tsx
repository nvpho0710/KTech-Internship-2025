// src/pages/Login.tsx

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '../useAuthStore';
import { useNavigate } from 'react-router';
import './Login.css';

// Strong typed interface for form data
interface IFormInput {
  username: string;
  password: string;
}

// Yup validation schema with strong typing
const validationSchema: yup.ObjectSchema<IFormInput> = yup.object({
  username: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters'),
});

export default function Login() {
  const navigate = useNavigate();
  const { login, error } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange', // Validate on change for better UX
    defaultValues: {
      username: 'tungnt@softech.vn',
      password: '123456789', // Example default value
    },
  });

  const onSubmit = async (data: IFormInput): Promise<void> => {
    login({
      username: data.username,
      password: data.password,
      navigate: navigate,
    });
  };

  console.log('Login error:', error);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="login-title">Login with Zustand</h2>

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register('username')}
            className={`form-input ${
              errors.username
                ? 'input-error'
                : !errors.username && dirtyFields.username
                ? 'input-success'
                : ''
            }`}
            placeholder="Enter your username"
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={`form-input ${
              errors.password
                ? 'input-error'
                : !errors.password && dirtyFields.password
                ? 'input-success'
                : ''
            }`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`login-btn ${isSubmitting || !isValid ? 'btn-disabled' : ''}`}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        {/* Form validation status indicator */}
        <div className="form-status">
          <p className={`status-message ${isValid ? 'status-success' : 'status-error'}`}>
            {isValid ? 'Form is valid ✓' : 'Please fill in all required fields correctly'}
          </p>
          {error && (
            <p className="error-message">
              <span>Login failed: {typeof error === 'string' ? error : 'Unknown error'}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
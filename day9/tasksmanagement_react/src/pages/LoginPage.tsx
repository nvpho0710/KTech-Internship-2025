import { useContext } from 'react';
import AuthContext from '../context';
// import { useNavigate } from 'react-router';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../services';

interface IFormInput {
  username: string;
  password: string;
}

// Validation schema using Yup
const schema = yup
  .object({
    username: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  })
  .required();

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'tungnt@softech.vn',
      password: '123456789',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log('Form submitted:', data);

    // Call API to authenticate user
    const result = await login(data.username, data.password);
    console.log('Login result:', result);

    const authenticatedUser = {
      id: result.loggedInUser.id,
      email: result.loggedInUser.email,
      access_token: result.access_token,
    };

    setUser(authenticatedUser);

    // save user info to localStorage
    localStorage.setItem('user', JSON.stringify(authenticatedUser));

    // save access token to localStorage
    localStorage.setItem('access_token', result.access_token);

    window.location.href = '/tasks'; // Redirect to tasks page
  };
  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="login-icon-wrapper">
          <span className="login-icon">🔒</span>
        </div>
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              {...register('username')}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              {...register('password')}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <button className="btn btn-primary login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../services';

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  })
  .required();

// SVG avatar người mặc vest
const AvatarSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="58" fill="#fff" stroke="#eee" strokeWidth="4"/>
    <ellipse cx="60" cy="44" rx="24" ry="24" fill="#FFD600"/>
    <path d="M36 98c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="#26334D"/>
    <rect x="48" y="70" width="24" height="18" rx="6" fill="#fff"/>
    <path d="M60 70l-8 18h16l-8-18z" fill="#26334D"/>
    <rect x="52" y="88" width="16" height="8" rx="2" fill="#F44336"/>
    <rect x="56" y="88" width="8" height="8" rx="2" fill="#fff"/>
    <rect x="56" y="88" width="4" height="8" rx="2" fill="#F44336"/>
  </svg>
);

export default function LoginPage() {
  const { setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
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

  // Nếu đã đăng nhập thì chuyển hướng sang trang quản lý task (chỉ khi chưa submit form)
  useEffect(() => {
    const storedUser = user || JSON.parse(localStorage.getItem('user') || 'null');
    if (storedUser && storedUser.access_token) {
      navigate('/tasks', { replace: true });
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const result = await login(data.username, data.password);
    // Lưu roles nếu có
    const authenticatedUser = {
      id: result.loggedInUser.id,
      email: result.loggedInUser.email,
      roles: result.loggedInUser.roles, // roles từ backend nếu có
      access_token: result.access_token,
    };
    setUser(authenticatedUser);
    localStorage.setItem('user', JSON.stringify(authenticatedUser));
    localStorage.setItem('access_token', result.access_token);
    navigate('/tasks', { replace: true });
  };

  return (
    <div className="login-mockup-outer-wrapper">
      <div className="login-mockup-card">
        <div className="login-mockup-avatar">
          <div className="login-mockup-avatar-circle">
            <AvatarSVG />
          </div>
        </div>
        <div className="login-mockup-form">
          <h2 className="login-mockup-title">User Login</h2>
          <form className="login-mockup-form-inner" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-mockup-form-group login-mockup-form-group-rel">
              <span className="login-mockup-icon-abs">📧</span>
              <input
                {...register('username')}
                type="text"
                id="username"
                name="username"
                placeholder="Email Id"
                autoComplete="username"
                className="login-mockup-input login-mockup-input-pad"
              />
            </div>
            {errors.username && <p className="login-mockup-error">{errors.username.message}</p>}
            <div className="login-mockup-form-group login-mockup-form-group-rel">
              <span className="login-mockup-icon-abs">🔒</span>
              <input
                {...register('password')}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                className="login-mockup-input login-mockup-input-pad"
              />
            </div>
            {errors.password && <p className="login-mockup-error">{errors.password.message}</p>}
            <button className="login-mockup-btn" type="submit">Login</button>
          </form>
          {/* <div className="login-mockup-forgot">Forgot Username / Password?</div> */}
        </div>
      </div>
    </div>
  );
}
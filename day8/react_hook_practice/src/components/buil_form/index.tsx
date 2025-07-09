
import "./formui.css";
import { useForm } from "react-hook-form";

export default function FormUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {
    // handle submit logic here
    alert("Email: " + data.email);
  };

  return (
    <div className="formui-bg">
      <div className="formui-container">
        <button className="formui-back-btn">&#8592;</button>
        <div className="formui-content">
          <h1 className="formui-hi">Hi!</h1>
          <form className="formui-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="email"
              placeholder="Email"
              className="formui-input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: '#ffb3b3', fontSize: '0.95rem', marginTop: '-0.5rem', marginBottom: '-0.5rem' }}>{errors.email.message}</span>
            )}
            <button type="submit" className="formui-continue-btn">
              Continue
            </button>
          </form>
          <div className="formui-or">or</div>
          <div className="formui-socials">
            <button className="formui-social-btn fb">
              <span className="formui-social-icon">{/* Facebook icon */}</span>
              Continue with Facebook
            </button>
            <button className="formui-social-btn google">
              <span className="formui-social-icon">{/* Google icon */}</span>
              Continue with Google
            </button>
            <button className="formui-social-btn apple">
              <span className="formui-social-icon">{/* Apple icon */}</span>
              Continue with Apple
            </button>
          </div>
          <div className="formui-links">
            <span>Don’t have an account? <a href="#" className="formui-signup">Sign up</a></span>
            <a href="#" className="formui-forgot">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
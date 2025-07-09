import { useForm } from "react-hook-form";
import "./UserRegisterHook.css";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
  dob: string;
  country: string;
  hobbies: string[];
  profilePic: FileList | null;
  bio: string;
};



const UserRegisterHook = () => {
  const { register, handleSubmit, watch, setError, formState: { errors }, reset } = useForm<FormState>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      dob: "",
      country: "",
      hobbies: [],
      profilePic: null,
      bio: "",
    }
  });

  const password = watch("password");
  const bio = watch("bio");

  const onSubmit = (data: FormState) => {
    // Custom validation for file type
    const file = data.profilePic && data.profilePic[0];
    if (!file) {
      setError("profilePic", { type: "manual", message: "Please upload a profile picture." });
      return;
    }
    if (!/\.(jpg|jpeg|png)$/i.test(file.name)) {
      setError("profilePic", { type: "manual", message: "File must be .jpg, .jpeg, or .png." });
      return;
    }
    alert("Registration successful!");
    reset();
  };

  // Update bio count (no-op, just for react-hook-form onChange compatibility)
  const handleBioChange = () => {};

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Full Name</label>
      <input
        {...register("fullName", {
          required: "Full Name is required.",
          minLength: { value: 3, message: "Full Name must be at least 3 characters." }
        })}
      />
      {errors.fullName && <div className="error">{errors.fullName.message}</div>}

      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required.",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format." }
        })}
      />
      {errors.email && <div className="error">{errors.email.message}</div>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required.",
          minLength: { value: 8, message: "Password must be at least 8 characters." },
          validate: v => /[A-Za-z]/.test(v) && /\d/.test(v) || "Password must contain letters and numbers."
        })}
      />
      {errors.password && <div className="error">{errors.password.message}</div>}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: "Confirm Password is required.",
          validate: v => v === password || "Passwords do not match."
        })}
      />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}

      <label>Phone Number</label>
      <input
        type="tel"
        {...register("phone", {
          required: "Phone number is required.",
          pattern: { value: /^\d{10,}$/, message: "Phone number must be at least 10 digits." }
        })}
      />
      {errors.phone && <div className="error">{errors.phone.message}</div>}

      <label>Gender</label>
      <div className="radioGroup">
        <label><input type="radio" value="Male" {...register("gender", { required: "Please select a gender." })} /> Male</label>
        <label><input type="radio" value="Female" {...register("gender", { required: "Please select a gender." })} /> Female</label>
        <label><input type="radio" value="Other" {...register("gender", { required: "Please select a gender." })} /> Other</label>
      </div>
      {errors.gender && <div className="error">{errors.gender.message}</div>}

      <label>Date of Birth</label>
      <input
        type="date"
        {...register("dob", {
          required: "Please select your date of birth.",
          validate: v => {
            if (!v) return true;
            const dob = new Date(v);
            const now = new Date();
            let age = now.getFullYear() - dob.getFullYear();
            const m = now.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
            return age >= 18 || "You must be at least 18 years old.";
          }
        })}
      />
      {errors.dob && <div className="error">{errors.dob.message}</div>}

      <label>Country</label>
      <select {...register("country", { required: "Please select a country." })}>
        <option value="">Select country</option>
        <option value="Vietnam">Vietnam</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Japan">Japan</option>
        <option value="Other">Other</option>
      </select>
      {errors.country && <div className="error">{errors.country.message}</div>}

      <label>Hobbies</label>
      <div className="checkboxGroup">
        <label><input type="checkbox" value="Reading" {...register("hobbies", {
          validate: v => (v && v.length > 0) || "Select at least one hobby."
        })} /> Reading</label>
        <label><input type="checkbox" value="Traveling" {...register("hobbies", {
          validate: v => (v && v.length > 0) || "Select at least one hobby."
        })} /> Traveling</label>
        <label><input type="checkbox" value="Gaming" {...register("hobbies", {
          validate: v => (v && v.length > 0) || "Select at least one hobby."
        })} /> Gaming</label>
      </div>
      {errors.hobbies && <div className="error">{errors.hobbies.message}</div>}

      <label>Profile Picture</label>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        {...register("profilePic")}
      />
      {errors.profilePic && <div className="error">{errors.profilePic.message}</div>}

      <label>Bio</label>
      <textarea
        maxLength={300}
        {...register("bio", {
          maxLength: { value: 300, message: "Bio must be at most 300 characters." },
          onChange: handleBioChange
        })}
      />
      <div>{300 - (bio ? bio.length : 0)} characters left</div>
      {errors.bio && <div className="error">{errors.bio.message}</div>}

      <button type="submit" className="submitBtn">Register</button>
    </form>
  );
};

export default UserRegisterHook;
import { useState } from "react";
import styles from "./UserRegistration.module.css";

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
  profilePic: File | null;
  bio: string;
};

type FormErrors = {
  [K in keyof FormState]?: string;
};

const initialState: FormState = {
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
};

const UserRegistration = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [bioCount, setBioCount] = useState(0);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && name === "hobbies") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((h) => h !== value),
      }));
    } else if (type === "file") {
      setForm((prev) => ({
        ...prev,
        profilePic: (e.target as HTMLInputElement).files?.[0] || null,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (name === "bio") setBioCount(value.length);
    }
  };

  // Hàm validate đầy đủ cho tất cả các trường
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    // Full Name
    if (form.fullName.trim().length < 3) newErrors.fullName = "Full Name must be at least 3 characters.";
    // Email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Invalid email format.";
    // Password
    if (form.password.length < 8 || !/[A-Za-z]/.test(form.password) || !/\d/.test(form.password)) {
      newErrors.password = "Password must be at least 8 characters and contain letters and numbers.";
    }
    // Confirm Password
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = "Passwords do not match.";
    // Phone
    if (!/^\d{10,}$/.test(form.phone)) newErrors.phone = "Phone number must be at least 10 digits.";
    // Gender
    if (!form.gender) newErrors.gender = "Please select a gender.";
    // Date of Birth
    if (!form.dob) newErrors.dob = "Please select your date of birth.";
    else {
      const dob = new Date(form.dob);
      const now = new Date();
      const age = now.getFullYear() - dob.getFullYear();
      const m = now.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
        if (age - 1 < 18) newErrors.dob = "You must be at least 18 years old.";
      } else {
        if (age < 18) newErrors.dob = "You must be at least 18 years old.";
      }
    }
    // Country
    if (!form.country) newErrors.country = "Please select a country.";
    // Hobbies
    if (!form.hobbies.length) newErrors.hobbies = "Select at least one hobby.";
    // Profile Picture
    if (!form.profilePic) newErrors.profilePic = "Please upload a profile picture.";
    else if (!/\.(jpg|jpeg|png)$/i.test(form.profilePic.name)) newErrors.profilePic = "File must be .jpg, .jpeg, or .png.";
    // Bio
    if (form.bio.length > 300) newErrors.bio = "Bio must be at most 300 characters.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful!");
      setForm(initialState);
      setBioCount(0);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label>Full Name</label>
      <input name="fullName" value={form.fullName} onChange={handleChange} />
      {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}


      <label>Email</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} />
      {errors.email && <div className={styles.error}>{errors.email}</div>}

      <label>Password</label>
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      {errors.password && <div className={styles.error}>{errors.password}</div>}

      <label>Confirm Password</label>
      <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}

      <label>Phone Number</label>
      <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
      {errors.phone && <div className={styles.error}>{errors.phone}</div>}

      <label>Gender</label>
      <div className={styles.radioGroup}>
        <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
        <label><input type="radio" name="gender" value="Other" checked={form.gender === "Other"} onChange={handleChange} /> Other</label>
      </div>
      {errors.gender && <div className={styles.error}>{errors.gender}</div>}

      <label>Date of Birth</label>
      <input name="dob" type="date" value={form.dob} onChange={handleChange} />
      {errors.dob && <div className={styles.error}>{errors.dob}</div>}

      <label>Country</label>
      <select name="country" value={form.country} onChange={handleChange}>
        <option value="">Select country</option>
        <option value="Vietnam">Vietnam</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Japan">Japan</option>
        <option value="Other">Other</option>
      </select>
      {errors.country && <div className={styles.error}>{errors.country}</div>}

      <label>Hobbies</label>
      <div className={styles.checkboxGroup}>
        <label><input type="checkbox" name="hobbies" value="Reading" checked={form.hobbies.includes("Reading")} onChange={handleChange} /> Reading</label>
        <label><input type="checkbox" name="hobbies" value="Traveling" checked={form.hobbies.includes("Traveling")} onChange={handleChange} /> Traveling</label>
        <label><input type="checkbox" name="hobbies" value="Gaming" checked={form.hobbies.includes("Gaming")} onChange={handleChange} /> Gaming</label>
      </div>
      {errors.hobbies && <div className={styles.error}>{errors.hobbies}</div>}

      <label>Profile Picture</label>
      <input name="profilePic" type="file" accept=".jpg,.jpeg,.png" onChange={handleChange} />
      {errors.profilePic && <div className={styles.error}>{errors.profilePic}</div>}

      <label>Bio</label>
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        maxLength={300}
      />
      <div>{300 - bioCount} characters left</div>
      {errors.bio && <div className={styles.error}>{errors.bio}</div>}

      <button type="submit" className={styles.submitBtn}>Register</button>
    </form>
  );
};

export default UserRegistration;
document.getElementById('regForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  // Helper
  function setError(id, msg) {
    document.getElementById(id).textContent = msg;
  }
  function clearError(id) {
    document.getElementById(id).textContent = '';
  }
  function setFieldError(field, isError) {
    if (isError) field.classList.add('error');
    else field.classList.remove('error');
  }
  // Full Name
  const fullName = document.getElementById('fullName');
  if (fullName.value.trim().length < 3) {
    setError('fullNameError', 'Ít nhất 3 ký tự!');
    setFieldError(fullName, true); valid = false;
  } else {
    clearError('fullNameError'); setFieldError(fullName, false);
  }
  // Email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    setError('emailError', 'Email không hợp lệ!');
    setFieldError(email, true); valid = false;
  } else {
    clearError('emailError'); setFieldError(email, false);
  }
  // Password
  const password = document.getElementById('password');
  if (!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/.test(password.value)) {
    setError('passwordError', 'Tối thiểu 8 ký tự, gồm chữ và số!');
    setFieldError(password, true); valid = false;
  } else {
    clearError('passwordError'); setFieldError(password, false);
  }
  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword');
  if (confirmPassword.value !== password.value || confirmPassword.value === '') {
    setError('confirmPasswordError', 'Mật khẩu không khớp!');
    setFieldError(confirmPassword, true); valid = false;
  } else {
    clearError('confirmPasswordError'); setFieldError(confirmPassword, false);
  }
  // Phone
  const phone = document.getElementById('phone');
  if (!/^\d{10,}$/.test(phone.value.trim())) {
    setError('phoneError', 'Chỉ nhập số, ít nhất 10 chữ số!');
    setFieldError(phone, true); valid = false;
  } else {
    clearError('phoneError'); setFieldError(phone, false);
  }
  // Gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    setError('genderError', 'Chọn giới tính!'); valid = false;
  } else {
    clearError('genderError');
  }
  // DOB
  const dob = document.getElementById('dob');
  if (!dob.value) {
    setError('dobError', 'Chọn ngày sinh!'); setFieldError(dob, true); valid = false;
  } else {
    // Check age > 18
    const dobDate = new Date(dob.value);
    const now = new Date();
    let age = now.getFullYear() - dobDate.getFullYear();
    const m = now.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < dobDate.getDate())) age--;
    if (age < 18) {
      setError('dobError', 'Phải trên 18 tuổi!'); setFieldError(dob, true); valid = false;
    } else {
      clearError('dobError'); setFieldError(dob, false);
    }
  }
  // Country
  const country = document.getElementById('country');
  if (!country.value) {
    setError('countryError', 'Chọn quốc gia!'); setFieldError(country, true); valid = false;
  } else {
    clearError('countryError'); setFieldError(country, false);
  }
  // Hobbies
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  if (hobbies.length === 0) {
    setError('hobbiesError', 'Chọn ít nhất 1 sở thích!'); valid = false;
  } else {
    clearError('hobbiesError');
  }
  // Profile Pic
  const profilePic = document.getElementById('profilePic');
  if (profilePic.value) {
    const file = profilePic.files[0];
    if (!/\.(jpg|jpeg|png)$/i.test(file.name)) {
      setError('profilePicError', 'Chỉ nhận file ảnh (.jpg, .jpeg, .png)!'); valid = false;
    } else {
      clearError('profilePicError');
    }
  } else {
    clearError('profilePicError');
  }
  // Bio
  const bio = document.getElementById('bio');
  if (bio.value.length > 300) {
    setError('bioError', 'Tối đa 300 ký tự!'); setFieldError(bio, true); valid = false;
  } else {
    clearError('bioError'); setFieldError(bio, false);
  }
  // Submit
  if (valid) {
    alert('Đăng ký thành công!');
    this.reset();
  }
});

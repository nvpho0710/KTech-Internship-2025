import React from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from './UserProvider';

interface UserFormData {
  name: string;
  email: string;
  age?: string;
}

const UserForm: React.FC = () => {
  const { addUser } = useUserContext();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    const userData = {
      name: data.name,
      email: data.email,
      age: data.age ? Number(data.age) : undefined,
    };
    console.log(userData);
    addUser(userData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-form">
      <div className="form-group">
        <label>Name:</label><br />
        <input
          type="text"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Minimum 2 characters' },
          })}
        />
        {errors.name && <div className="error-text">{errors.name.message}</div>}
      </div>
      <div className="form-group">
        <label>Email:</label><br />
        <input
          type="text"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email'
            }
          })}
        />
        {errors.email && <div className="error-text">{errors.email.message}</div>}
      </div>
      <div className="form-group">
        <label>Age:</label><br />
        <input
          type="number"
          {...register('age', {
            validate: (value) => {
              if (value === '' || value === undefined) return true;
              return Number(value) > 0 || 'Age must be positive';
            }
          })}
        />
        {errors.age && <div className="error-text">{errors.age.message}</div>}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};
export default UserForm;

import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { getTaskById, updateTask } from '../services';
import { useNavigate, useParams } from 'react-router';

interface IFormInput {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: 'to_do' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee_id?: string;
}

// Yup validation schema
const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  start_date: yup
    .string()
    .required('Start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date')
    .test('due_date-after-start_date', 'Due date must be after start date', function (value) {
      if (!value) return true;
      const { start_date } = this.parent;
      return new Date(value) >= new Date(start_date);
    }),
  description: yup.string().optional().max(500, 'Description must be less than 500 characters'),
  status: yup
    .mixed<'to_do' | 'in_progress' | 'done'>()
    .required('Status is required')
    .oneOf(['to_do', 'in_progress', 'done'], 'Please select a valid status'),
  priority: yup
    .mixed<'low' | 'medium' | 'high'>()
    .required('Priority is required')
    .oneOf(['low', 'medium', 'high'], 'Please select a valid priority'),
  assignee_id: yup
    .string()
    .optional()
    .test('assignee_id', 'Assignee ID must be a positive number', (value) => {
      if (!value) return true;
      return !isNaN(Number(value)) && Number(value) >= 1;
    }),
});

export default function UpdateTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  // react form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      start_date: '',
      due_date: '',
      description: '',
      status: 'to_do',
      priority: 'medium',
      assignee_id: '',
    },
    mode: 'onChange',
  });
  useEffect(() => {
    const fetchTask = async () => {
      try {
        // Assuming getTask is a function that fetches a task by ID
        const task = await getTaskById(id ? parseInt(id) : 0);

        // Set default values for the form
        reset({
          title: task.title,
          start_date: task.start_date ? task.start_date.split('T')[0] : '', // Format date to YYYY-MM-DD
          due_date: task.due_date ? task.due_date.split('T')[0] : '', // Format date to YYYY-MM-DD

          description: task.description,
          status: task.status,
          priority: task.priority,
          assignee_id: task.assignee_id ? task.assignee_id.toString() : '', // Convert to string if needed
        });
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [id, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    try {
      await updateTask(id ? parseInt(id) : 0, data);
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input className="input" {...register('title')} type="text" id="title" name="title" placeholder="Enter task title" />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            className="input"
            {...register('description')}
            type="text"
            id="description"
            name="description"
            placeholder="Enter task description"
          />
          {errors.description && <p className="error">{errors.description.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="start_date">Start Date:</label>
          <input className="input" {...register('start_date')} type="date" id="start_date" name="start_date" placeholder="YYYY-MM-DD" />
          {errors.start_date && <p className="error">{errors.start_date.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="due_date">Due Date:</label>
          <input className="input" {...register('due_date')} type="date" id="due_date" name="due_date" placeholder="YYYY-MM-DD" />
          {errors.due_date && <p className="error">{errors.due_date.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select className="input" {...register('status')} id="status" name="status">
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select className="input" {...register('priority')} id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <p className="error">{errors.priority.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="assignee_id">Assignee ID:</label>
          <input
            className="input"
            {...register('assignee_id')}
            type="text"
            id="assignee_id"
            name="assignee_id"
            placeholder="Enter assignee ID"
          />
          {errors.assignee_id && <p className="error">{errors.assignee_id.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit">Update Task</button>
      </form>
    </div>
  );
}
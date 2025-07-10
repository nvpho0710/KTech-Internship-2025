import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context';
import { getTasks } from '../services';
import type { Task } from '../types';
import { useNavigate } from 'react-router';
import SearchTasks from '../components/SearchTasks';

export default function OurTasksPage() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [tasks, setTasks] = React.useState([]);

  const [filters, setFilters] = useState<any>({
    status: '',
    priority: '',
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleOnEdit = (taskId: number) => {
    // Logic to handle task edit
    navigate(`/update-task/${taskId}`);
  };

  const handleOnSearch = (filters: { status?: string; priority?: string }) => {
    // Logic to filter tasks based on status and priority
    console.log('Filters applied:', filters);
    // You can implement the filtering logic here or pass it to a service function
    setFilters(filters);
  };

  const filteredTasks = tasks.filter((task: Task) => {
    let matches = true;

    if (filters.status && task.status !== filters.status) {
      matches = false;
    }

    if (filters.priority && task.priority !== filters.priority) {
      matches = false;
    }

    return matches;
  });

  return (
    <div>
      <SearchTasks onSearch={handleOnSearch} />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Assignee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks?.map((task: Task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>{task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}</td>
                <td>{task.assignee_id}</td>
                <td>
                  <button style={{background:'#1976d2',color:'#fff',border:'none',borderRadius:4,padding:'0.25rem 0.75rem',cursor:'pointer'}} onClick={() => handleOnEdit(task.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
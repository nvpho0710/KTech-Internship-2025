import React, { useContext, useEffect } from 'react';
import AuthContext from '../context';
import { getTasksByAssignee } from '../services';
import type { Task } from '../types';
import { useNavigate } from 'react-router';

export default function MyTasksPage() {
  const { user } = useContext(AuthContext);

  console.log('MyTasksPage user', user);

  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;
      try {
        const tasks = await getTasksByAssignee(user.id);
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user]);

  console.log('OurTasksPage user', user);
  const navigate = useNavigate();
  return (
    <div className="table-container my-tasks-table">
      <table className="tasks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Assignee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task: Task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td><span className={`status-badge status-${task.status}`}>{task.status}</span></td>
              <td><span className={`priority-badge priority-${task.priority}`}>{task.priority}</span></td>
              <td>{task.start_date ? new Date(task.start_date).toLocaleDateString() : ''}</td>
              <td>{task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}</td>
              <td>{task.assignee_id}</td>
              <td>
                <button className="btn btn-edit" onClick={() => typeof task.id === 'number' && navigate(`/update-task/${task.id}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
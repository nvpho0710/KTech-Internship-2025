import React, { useContext, useEffect } from 'react';
import AuthContext from '../context';
import { getTasksByAssignee } from '../services';
import type { Task } from '../types';
import { useNavigate } from 'react-router';

export default function MyTasksPage() {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.roles?.includes('Administrator');

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

  const navigate = useNavigate();
  return (
    <div className="table-container my-tasks-table">
      {isAdmin && (
        <button className="btn btn-add" onClick={() => navigate('/create-task')}>Thêm</button>
      )}
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
                {isAdmin && (
                  <>
                    <button className="btn btn-edit" onClick={() => typeof task.id === 'number' && navigate(`/update-task/${task.id}`)}>
                      Sửa
                    </button>
                    <button className="btn btn-delete" onClick={() => {/* Xử lý xóa task */}}>
                      Xóa
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"

interface Task {
  id: number
  title: string
  description: string
  status: "Done" | "In Progress" | "To Do"
  priority: "Low" | "Medium" | "High"
  startDate: string | null
  dueDate: string | null
  assignee: number | null
  completed: boolean
  createdAt: string
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("All Statuses")
  const [filterPriority, setFilterPriority] = useState<string>("All Priorities")

  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false)
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [taskToDeleteId, setTaskToDeleteId] = useState<number | null>(null)

  // Form states for Add/Edit Task
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentDescription, setCurrentDescription] = useState("")
  const [currentStatus, setCurrentStatus] = useState<Task["status"]>("To Do")
  const [currentPriority, setCurrentPriority] = useState<Task["priority"]>("Medium")
  const [currentStartDate, setCurrentStartDate] = useState<string>("") // Use string for date input
  const [currentDueDate, setCurrentDueDate] = useState<string>("") // Use string for date input
  const [currentAssignee, setCurrentAssignee] = useState<string>("")

  // Mock API call to fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))

        const mockTasks: Task[] = [
          {
            id: 22111,
            title: "hi",
            description: "hehehe 600756",
            status: "Done",
            priority: "Medium",
            startDate: "2025-07-15",
            dueDate: "2025-07-19",
            assignee: 1,
            completed: true,
            createdAt: "2025-07-15T10:00:00Z",
          },
          {
            id: 22871,
            title: "Task 6767 - tps1cn",
            description: "hehehe 6767",
            status: "In Progress",
            priority: "Medium",
            startDate: "2025-07-15",
            dueDate: "2025-07-19",
            assignee: 1,
            completed: false,
            createdAt: "2025-07-15T11:30:00Z",
          },
          {
            id: 22872,
            title: "Task 6768 - 16pxnd",
            description: "hehehe 6768",
            status: "To Do",
            priority: "Medium",
            startDate: "2025-07-15",
            dueDate: "2025-07-18",
            assignee: 3,
            completed: false,
            createdAt: "2025-07-15T12:00:00Z",
          },
        ]

        setTasks(mockTasks)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const resetForm = () => {
    setCurrentTitle("")
    setCurrentDescription("")
    setCurrentStatus("To Do")
    setCurrentPriority("Medium")
    setCurrentStartDate("")
    setCurrentDueDate("")
    setCurrentAssignee("")
  }

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
      title: currentTitle,
      description: currentDescription,
      status: currentStatus,
      priority: currentPriority,
      startDate: currentStartDate || null,
      dueDate: currentDueDate || null,
      assignee: currentAssignee ? Number.parseInt(currentAssignee) : null,
      completed: currentStatus === "Done",
      createdAt: new Date().toISOString(),
    }
    setTasks([...tasks, newTask])
    setIsAddTaskDialogOpen(false)
    resetForm()
  }

  const handleEditTask = () => {
    if (!editingTask) return
    const updatedTask: Task = {
      ...editingTask,
      title: currentTitle,
      description: currentDescription,
      status: currentStatus,
      priority: currentPriority,
      startDate: currentStartDate || null,
      dueDate: currentDueDate || null,
      assignee: currentAssignee ? Number.parseInt(currentAssignee) : null,
      completed: currentStatus === "Done",
    }
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    setIsEditTaskDialogOpen(false)
    setEditingTask(null)
    resetForm()
  }

  const handleDeleteTask = () => {
    if (taskToDeleteId === null) return
    // Using window.confirm for simplicity without AlertDialog library
    if (window.confirm("Are you sure you want to delete this task? This action cannot be undone.")) {
      setTasks(tasks.filter((task) => task.id !== taskToDeleteId))
    }
    setTaskToDeleteId(null)
  }

  const openEditDialog = (task: Task) => {
    setEditingTask(task)
    setCurrentTitle(task.title)
    setCurrentDescription(task.description)
    setCurrentStatus(task.status)
    setCurrentPriority(task.priority)
    setCurrentStartDate(task.startDate || "")
    setCurrentDueDate(task.dueDate || "")
    setCurrentAssignee(task.assignee ? task.assignee.toString() : "")
    setIsEditTaskDialogOpen(true)
  }

  const getStatusBadgeClass = (status: Task["status"]) => {
    switch (status) {
      case "Done":
        return "badge status-done"
      case "In Progress":
        return "badge status-in-progress"
      case "To Do":
        return "badge status-to-do"
      default:
        return "badge"
    }
  }

  const getPriorityBadgeClass = (priority: Task["priority"]) => {
    switch (priority) {
      case "High":
        return "badge priority-high"
      case "Medium":
        return "badge priority-medium"
      case "Low":
        return "badge priority-low"
      default:
        return "badge"
    }
  }

  const handleSearch = () => {
    // Filtering is already handled by filteredTasks computed property
    // This button just triggers a re-render if state changes
    console.log("Searching with filters:", { searchTerm, filterStatus, filterPriority })
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "All Statuses" || task.status === filterStatus
    const matchesPriority = filterPriority === "All Priorities" || task.priority === filterPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px" }}>
      {/* Create Task Button in Header */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
        <button
          className="primary"
          onClick={() => {
            setIsAddTaskDialogOpen(true)
            resetForm()
          }}
        >
          Create Task
        </button>
      </div>

      {/* Filter Section */}
      <div className="card" style={{ marginBottom: "32px", padding: "24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "24px",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="filter-status" style={{ fontSize: "14px", fontWeight: "500", color: "#4b5563" }}>
              Status:
            </label>
            <select id="filter-status" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="All Statuses">All Statuses</option>
              <option value="Done">Done</option>
              <option value="In Progress">In Progress</option>
              <option value="To Do">To Do</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="filter-priority" style={{ fontSize: "14px", fontWeight: "500", color: "#4b5563" }}>
              Priority:
            </label>
            <select id="filter-priority" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
              <option value="All Priorities">All Priorities</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor="search-term"
              style={{ fontSize: "14px", fontWeight: "500", color: "#4b5563", display: "none" }}
            >
              Search
            </label>
            <input
              id="search-term"
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: "40px" }}
            />
            <button onClick={handleSearch} className="primary" style={{ width: "100%", marginTop: "16px" }}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="card" style={{ overflowX: "auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "32px" }}>
            <div
              style={{
                animation: "spin 1s linear infinite",
                borderRadius: "9999px",
                height: "32px",
                width: "32px",
                borderBottom: "2px solid #2563eb",
                margin: "0 auto",
              }}
            ></div>
            <p style={{ marginTop: "8px", color: "#4b5563" }}>Loading tasks...</p>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div style={{ padding: "32px", textAlign: "center", color: "#4b5563" }}>
            No tasks found matching your criteria.
          </div>
        ) : (
          <table>
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
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <span className={getStatusBadgeClass(task.status)}>{task.status}</span>
                  </td>
                  <td>
                    <span className={getPriorityBadgeClass(task.priority)}>{task.priority}</span>
                  </td>
                  <td>{task.startDate ? format(new Date(task.startDate), "M/d/yyyy") : "N/A"}</td>
                  <td>{task.dueDate ? format(new Date(task.dueDate), "M/d/yyyy") : "N/A"}</td>
                  <td>{task.assignee || "N/A"}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={() => openEditDialog(task)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Task Dialog */}
      {isAddTaskDialogOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create New Task</h3>
              <button className="modal-close-button" onClick={() => setIsAddTaskDialogOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-grid">
                <label htmlFor="title">Title</label>
                <input id="title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} />

                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={currentDescription}
                  onChange={(e) => setCurrentDescription(e.target.value)}
                />

                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value as Task["status"])}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>

                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  value={currentPriority}
                  onChange={(e) => setCurrentPriority(e.target.value as Task["priority"])}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                <label htmlFor="startDate">Start Date</label>
                <input
                  id="startDate"
                  type="date"
                  value={currentStartDate}
                  onChange={(e) => setCurrentStartDate(e.target.value)}
                />

                <label htmlFor="dueDate">Due Date</label>
                <input
                  id="dueDate"
                  type="date"
                  value={currentDueDate}
                  onChange={(e) => setCurrentDueDate(e.target.value)}
                />

                <label htmlFor="assignee">Assignee</label>
                <input
                  id="assignee"
                  type="number"
                  value={currentAssignee}
                  onChange={(e) => setCurrentAssignee(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="primary" onClick={handleAddTask}>
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Task Dialog */}
      {isEditTaskDialogOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Task</h3>
              <button className="modal-close-button" onClick={() => setIsEditTaskDialogOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-grid">
                <label htmlFor="edit-title">Title</label>
                <input id="edit-title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} />

                <label htmlFor="edit-description">Description</label>
                <textarea
                  id="edit-description"
                  value={currentDescription}
                  onChange={(e) => setCurrentDescription(e.target.value)}
                />

                <label htmlFor="edit-status">Status</label>
                <select
                  id="edit-status"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value as Task["status"])}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>

                <label htmlFor="edit-priority">Priority</label>
                <select
                  id="edit-priority"
                  value={currentPriority}
                  onChange={(e) => setCurrentPriority(e.target.value as Task["priority"])}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                <label htmlFor="edit-startDate">Start Date</label>
                <input
                  id="edit-startDate"
                  type="date"
                  value={currentStartDate}
                  onChange={(e) => setCurrentStartDate(e.target.value)}
                />

                <label htmlFor="edit-dueDate">Due Date</label>
                <input
                  id="edit-dueDate"
                  type="date"
                  value={currentDueDate}
                  onChange={(e) => setCurrentDueDate(e.target.value)}
                />

                <label htmlFor="edit-assignee">Assignee</label>
                <input
                  id="edit-assignee"
                  type="number"
                  value={currentAssignee}
                  onChange={(e) => setCurrentAssignee(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer space-between">
              <button className="destructive" onClick={handleDeleteTask}>
                Delete Task
              </button>
              <button className="primary" onClick={handleEditTask}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
